import { Button, Form, FormControl } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { useDispatch } from "react-redux";
import { searchByRate, searchByTitle } from "../redux/actions/movieActions";

export default function Search() {
  const dispatch = useDispatch();
  const ratingChanged = newRating => {
    dispatch(searchByRate(newRating));
  };

  return (
    <div>
      <div style={{ marginLeft: "700px" }}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor='#ffd700'
        />
        ,
      </div>
      <div style={{ margin: "auto", width: "500px" }}>
        <Form style={{ display: "flex" }}>
          <FormControl
            type='text'
            style={{ margin: "0px 10px" }}
            placeholder=' search a movie'
            onChange={e => dispatch(searchByTitle(e.target.value))}
          />
          <Button>Search</Button>
        </Form>
      </div>
    </div>
  );
}
