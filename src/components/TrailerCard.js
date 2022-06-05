import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TitleMovie from "./TitleMovie";

export default function TrailerCard() {
  const Movies = useSelector(state => state.movieReducer.movies);
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = Movies.find(movie => movie.id === Number(id));
  return (
    <>
      <div>
        <TitleMovie movie={movie} />
        <div style={{ marginTop: "50px" }}>
          <h3 style={{ marginBottom: "50px" }}>{movie.description} </h3>
          <iframe
            width='956'
            height='538'
            src={movie.frameUrl}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Button variant='primary' onClick={() => navigate(-1)}>
        Go Back{" "}
      </Button>
    </>
  );
}
