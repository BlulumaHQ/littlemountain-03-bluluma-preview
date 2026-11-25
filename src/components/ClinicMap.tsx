import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const clinic = 'Little Mountain Dental Centre';
const address = '620 East Broadway, Vancouver, BC';
const position = { lat: 49.2623266, lng: -123.0905506 };
const directions = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(clinic + ', ' + address);
const embed = 'https://www.google.com/maps?q=' + encodeURIComponent(clinic + ', ' + address) + '&z=16&output=embed';
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim();

const styles = [
  { elementType: 'geometry', stylers: [{ color: '#faf8f3' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#26362d' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#d3e4d7' }] },
  { featureType: 'road', elementType: 'geometry.fill', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#bbc4bb' }] },
  { featureType: 'road.arterial', elementType: 'geometry.fill', stylers: [{ color: '#eee4cd' }] },
  { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#e3d5b7' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#bad4d5' }] },
];

type MapOptions = {
  center: typeof position;
  zoom: number;
  styles: typeof styles;
  gestureHandling: 'cooperative';
  mapTypeControl: boolean;
  streetViewControl: boolean;
};
type MapInstance = {
  addListener: (event: 'tilesloaded', callback: () => void) => { remove: () => void };
};
type MapsApi = {
  Map: new (element: HTMLDivElement, options: MapOptions) => MapInstance;
  Marker: new (options: {
    map: MapInstance;
    position: typeof position;
    title: string;
    icon: { path: number; scale: number; fillColor: string; fillOpacity: number; strokeColor: string; strokeWeight: number };
  }) => { setMap: (map: null) => void };
  SymbolPath: { CIRCLE: number };
};
type MapsWindow = Window & {
  google?: { maps?: MapsApi };
  gm_authFailure?: () => void;
  initClinicMap?: () => void;
};

let mapsRequest: Promise<MapsApi> | undefined;

function loadMaps(key: string) {
  if (mapsRequest) return mapsRequest;
  const mapsWindow = window as MapsWindow;
  mapsRequest = new Promise<MapsApi>((resolve, reject) => {
    const script = document.createElement('script');
    const query = new URLSearchParams({ key, v: 'quarterly', loading: 'async', callback: 'initClinicMap' });
    script.src = 'https://maps.googleapis.com/maps/api/js?' + query;
    script.async = true;
    mapsWindow.initClinicMap = () => {
      delete mapsWindow.initClinicMap;
      const maps = mapsWindow.google?.maps;
      if (maps?.Map && maps.Marker) resolve(maps);
      else reject(new Error('Google Maps did not initialize'));
    };
    script.onerror = () => {
      delete mapsWindow.initClinicMap;
      script.remove();
      mapsRequest = undefined;
      reject(new Error('Google Maps failed to load'));
    };
    document.head.append(script);
  });
  return mapsRequest;
}

const labels = {
  en: { map: 'Little Mountain Dental Centre on Google Maps', directions: 'Get directions' },
  zh: { map: 'Little Mountain Dental Centre 的 Google 地圖', directions: '查看路線' },
  ja: { map: 'Google マップで Little Mountain Dental Centre を表示', directions: 'ルートを見る' },
};

export default function ClinicMap() {
  const { lang } = useI18n();
  const { map, directions: directionsLabel } = labels[lang];
  const canvas = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = canvas.current;
    if (!apiKey || !element) return;

    const key = apiKey;
    const mapsWindow = window as MapsWindow;
    const originalAuthFailure = mapsWindow.gm_authFailure;
    let active = true;
    let authFailed = false;
    let disposeMap: (() => void) | undefined;
    const onAuthFailure = () => {
      authFailed = true;
      if (active) setReady(false);
      originalAuthFailure?.();
    };
    mapsWindow.gm_authFailure = onAuthFailure;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      void loadMaps(key).then((maps) => {
        if (!active || authFailed) return;
        const mapInstance = new maps.Map(element, {
          center: position,
          zoom: 16,
          styles,
          gestureHandling: 'cooperative',
          mapTypeControl: false,
          streetViewControl: false,
        });
        const pin = new maps.Marker({
          map: mapInstance,
          position,
          title: clinic,
          icon: {
            path: maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#2f6a4d',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2,
          },
        });
        const tiles = mapInstance.addListener('tilesloaded', () => {
          if (active && !authFailed) setReady(true);
        });
        disposeMap = () => {
          tiles.remove();
          pin.setMap(null);
          element.replaceChildren();
        };
      }).catch(() => {
        if (active) setReady(false);
      });
    }, { rootMargin: '200px' });

    observer.observe(element);
    return () => {
      active = false;
      observer.disconnect();
      disposeMap?.();
      if (mapsWindow.gm_authFailure === onAuthFailure) mapsWindow.gm_authFailure = originalAuthFailure;
    };
  }, []);

  return (
    <div className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-lg border border-primary/20 bg-brand-cream shadow-sm">
      <a
        href={directions}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-brand-green-dark focus-visible:outline focus-visible:-outline-offset-2"
      >
        <MapPin size={16} aria-hidden="true" className="shrink-0" />
        <span className="font-medium">{clinic}</span>
        <span className="ml-auto text-right underline">{directionsLabel}</span>
      </a>
      <div className="relative min-h-[240px] flex-1">
        {!ready && (
          <iframe
            src={embed}
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={map}
          />
        )}
        {apiKey && (
          <div
            ref={canvas}
            role="region"
            aria-label={map}
            aria-hidden={!ready}
            className={`absolute inset-0 ${ready ? '' : 'invisible'}`}
          />
        )}
      </div>
    </div>
  );
}
