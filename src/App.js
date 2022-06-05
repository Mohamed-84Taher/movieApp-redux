import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrailerCard from "./components/TrailerCard";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {" "}
                <Search />
                <MovieList />
                <AddMovie />
              </>
            }
          />
          <Route path='/trailercard/:id' element={<TrailerCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
