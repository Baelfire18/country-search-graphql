import React from 'react';
import '../styles/containers.css';

function Country(props) {
  const { country, search } = props;

  if (country.name.toLowerCase().indexOf(search.toLowerCase()) > -1
  // && search.length > 0
  ) {
    return (
      <div className="container">
        <div className="container-title">
          {`${country.emoji} ${country.name}`}
        </div>
        <br />
        <div className="container-info">
          <b>Original name:</b>
          {' '}
          {country.native}
          <br />
          <b>Capital:</b>
          {' '}
          {country.capital}
          <br />
          <b>Currency:</b>
          {' '}
          {country.currency}
          <br />
          <b>Telephone code:</b>
          {' +'}
          {country.phone}
        </div>
      </div>
    );
  }
  return null;
}

export default Country;
