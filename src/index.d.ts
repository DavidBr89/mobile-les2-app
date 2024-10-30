interface Parking {
  name: string;
  totalcapacity: number;
  availablecapacity: number;
  occupation: number;
  id: string;
  location: {
    lon: number;
    lat: number;
  };
}