import { createContext, useContext, useState, ReactNode } from 'react';

type LocationContextType = {
  city: string;
  country: string;
};

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
  location?: { city: string; country: string };
};

export const LocationProvider = (props: Props) => {
  const { children, location } = props;
  const [city, setCity] = useState<string>(location?.city || 'Unknown City');
  const [country, setCountry] = useState<string>(
    location?.country || 'Unknown Country'
  );

  return (
    <LocationContext.Provider value={{ city, country }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
