import Tour from './Tour';

export default function Tours({ tours, onRemoveTour }) {
  return (
    <div className='tours'>
      <h1 className='heading'>Available Tours</h1>
      <div className='underline'></div>
      {tours.map((tour) => (
        <Tour key={tour.name} {...tour} onRemoveTour={onRemoveTour}/>
      ))}
    </div>
  );
}
