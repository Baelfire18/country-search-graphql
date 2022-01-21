import React from 'react';
import '../styles/country.css';

function Country(props) {
  const { country, search } = props;

  if (country.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    && search.length > 0) {
    return (
      <div>
        <div>
          {`${country.emoji} ${country.name}`}
        </div>
        <br />
        <div>
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
