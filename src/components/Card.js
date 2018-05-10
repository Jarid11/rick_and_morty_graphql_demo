import React from 'react';

const cardStyle = {
  height: '400px',
  width: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  border: '3px solid black',
  margin: '5px',
  padding: '10px',
  borderRadius: '3px'
};

const imgStyle = {
  height: '80%',
  width: '80%'
}

const Card = props => (
  <div style={cardStyle}>
    <h4>{props.name}</h4>
    <img src={props.image} style={imgStyle} />
    <p>{props.species}</p>
    <p>{props.gender}</p>
    {/* MUTATION COMPONENT */}
  </div>
);

export default Card;
