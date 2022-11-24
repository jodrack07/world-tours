import { useEffect, useState } from 'react';
import Tours from './components/Tours';
import './App.css';
import Loading from './components/Loading';
import NoAvailableTour from './components/NoAvailableTour';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://course-api.com/react-tours-project'
      );
      if (response.ok) {
        const data = await response.json();
        setTours(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (isLoading) return <Loading />;

  if(tours.length < 1) return <NoAvailableTour onClick={fetchData}/>;

  return (
    <div className='app'>
      <Tours tours={tours} onRemoveTour={removeTour} />
    </div>
  );
}
