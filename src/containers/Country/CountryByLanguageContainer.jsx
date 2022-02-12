import React from 'react';
import '../../styles/containers.css';
import Country from '../../components/Country';

export default function CountryByLanguageContainer(props) {
  let title = false;
  const { countries, search, language } = props;

  countries.map((country) => (
    country.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    // && search.length > 0
    && country.languages.map((languagex) => (
      languagex.name === language.name ? title = true : null))));

  return (
    <div className="countries">
      <p className="title">
        {title
          ? language.name : null}
      </p>
      {countries.map(
        (country) => country.languages.map(
          (languagex) => (languagex.name === language.name
            ? (
              <Country
                country={country}
                search={search}
              />
            )
            : null),
        ),
      )}
    </div>
  );
}
