import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({
  name,
  image,
  picks,
  details,
  roles,
  type,
  wins,
}) => (
  <>
    {details
      ? (
        <Link to={`/${name}`} style={{ textDecoration: 'none', color: '#fff' }}>
          <div
            style={{
              width: '200px',
              backgroundColor: '#ce3f75',
              height: '250px',
              borderRadius: '10px',
            }}
          >

            <img
              src={`https://api.opendota.com${image}`}
              alt="hero_name"
              style={{
                width: '100%',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',
              }}
            />
            <div style={{ padding: '5px 10px' }}>
              <h3 style={{ textAlign: 'center', color: '#fff' }}>{name}</h3>
              <div style={{ marginTop: '10px' }}>
                <span style={{ fontWeight: 700 }}>Turbo Picks: </span>
                <span>{picks}</span>
              </div>
            </div>
          </div>
        </Link>

      )

      : (
        <div
          style={{
            width: '300px',
            backgroundColor: '#ce3f75',
            height: '350px',
            borderRadius: '10px',
            margin: '50px auto',
            color: '#fff',
          }}
        >

          <div>
            <img
              src={`https://api.opendota.com${image}`}
              alt="hero_name"
              style={{
                width: '100%',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',
              }}
            />
          </div>
          <div style={{ padding: '10px' }}>
            <h3 style={{ color: '#fff' }}>{name}</h3>
            <div style={{ marginTop: '5px' }}>
              <span style={{ fontWeight: 700 }}>Attack Type: </span>
              <span>{type}</span>
            </div>
            <div style={{ marginTop: '5px' }}>
              <span style={{ fontWeight: 700 }}>Roles: </span>
              <span>{roles?.slice(0, 3).map((role) => `${role} `)}</span>
            </div>
            <div style={{ marginTop: '5px' }}>
              <span style={{ fontWeight: 700 }}>Turbo Picks: </span>
              <span>{picks}</span>
            </div>
            <div style={{ marginTop: '5px' }}>
              <span style={{ fontWeight: 700 }}>Turbo wins: </span>
              <span>{wins}</span>
            </div>
          </div>

        </div>
      )}
  </>
);

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  picks: PropTypes.number,
  details: PropTypes.bool,
  type: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string),
  wins: PropTypes.number,
}.isRequired;
export default Card;
