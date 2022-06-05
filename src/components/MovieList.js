import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "./MovieCard.css";

export default function MovieList() {
  const { reduxmovies, title, rate } = useSelector(state => state.movieReducer);

  return (
    <div className='cards'>
      {reduxmovies
        .filter(
          movie =>
            movie.title.toLowerCase().includes(title.toLowerCase().trim()) &&
            movie.rate >= rate
        )
        .map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
}
