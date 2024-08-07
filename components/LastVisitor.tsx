import { useLocation } from 'hooks/useLastVisitorLocation';

const LastUserLocation: React.FC = () => {
  const { city, country } = useLocation();

  if (city === 'Unknown City' || country === 'Unknown Country') {
    return null;
  }

  return (
    <p className="text-gray-500 inline-flex items-center">
      Last visit from {city}, {country}
    </p>
  );
};

export default LastUserLocation;
