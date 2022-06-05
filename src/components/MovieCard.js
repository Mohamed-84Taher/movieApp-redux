import React from 'react'
import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function MovieCard ( {movie} ) {
  return (
    <div>
        <Card style={{ width: '18rem' , height:'800px' , backgroundColor : '#C4DDFF' }}>
  <Card.Img variant="top" src={movie.posterUrl} style = {{ height:'500px'}} />
  <Card.Body>
    <Card.Title> {movie.title} </Card.Title>
    <Card.Text>
      {movie.description}.
    </Card.Text>
    <Link to={`/trailercard/${movie.id}`}>
    <Button variant="primary">watch the movie</Button>
    </Link>
  </Card.Body>
</Card>
    </div>
  )
}
