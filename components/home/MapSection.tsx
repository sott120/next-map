import Map from '@/components/home/Map';

const MapSection = () => {
  return (
    <Map
      onLoad={() => {
        console.log('load!');
      }}
    />
  );
};
export default MapSection;
