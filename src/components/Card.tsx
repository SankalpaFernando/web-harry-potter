import React from 'react'
import { startCase } from "lodash";
import {  Character as CardProps} from "../util/types";
import "../styles/Card.scss";




const Card: React.FC<CardProps> = ({ name, house, wand, species, patronus }) => {
  const style = { borderImage: "" };
  switch (house) {
    case 'Gryffindor':
      style.borderImage =
        'linear-gradient(to right, #660000 40%, #e09c0b 60%) 20';
      break;
    case 'Slytherin':
      style.borderImage =
        'linear-gradient(to right, #2f751c 40%, #cccccc 60%) 20';
      break;
    case 'Hufflepuff':
      style.borderImage =
        'linear-gradient(to right, #f79d0d 40%, #1f1e19 60%) 20';
      break;
    case 'Ravenclaw':
      style.borderImage =
        'linear-gradient(to right, #1a3956 40%, #8e501d 60%) 20';
      break;
  }
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-front">
          <h1
            style={{
              textAlign: 'center',
              fontSize: '3rem',
              fontFamily: 'ZCOOL QingKe HuangYou',
              fontWeight: 'lighter',
            }}
          >
            {name}
          </h1>
        </p>
        <p className="card-back" style={style}>
          <ul>
            <li style={{ margin: '1rem auto' }}>
              House: {startCase(house.toString())}
            </li>
            <li style={{ margin: '1rem auto' }}>
              Wand: {startCase(wand.wood + ' ' + wand.core)}
            </li>
            <li style={{ margin: '1rem auto' }}>
              Patronus: {startCase(patronus.toString())}
            </li>
            <li style={{ margin: '1rem auto' }}>
              Species: {startCase(species.toString())}
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Card