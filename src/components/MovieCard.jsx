import React from 'react';
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  
  const img = `https://image.tmdb.org/t/p/original/${props.img}`;
  const url = `/films/${props.id}`

  return (
      <Card
          hoverable
          style={
              { margin:50, width: '250px', padding:10 ,background:"#80808014", borderRadius: '10px',
              padding: '2rem'}
          }
          cover={<img alt="example" src={img} width= "240"  />}
      >
          <p>Id film = {props.id}</p>
          <h3>{props.title}</h3>
          <Link to={url}>
            <Button type="primary">Consulter</Button>
          </Link>
      </Card>
  );
};

export default MovieCard;