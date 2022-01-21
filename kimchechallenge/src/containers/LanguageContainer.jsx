import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import CountryByLanguageContainer from './Country/CountryByLanguageContainer';
import { GET_LANGUAGES } from '../queries/Languages';

export default function LanguageContainer(props) {
  const { data, loading, error } = useQuery(
    GET_LANGUAGES,
  );
  const { countries, search } = props;

  if (error) {
    return <h2>Something went wrong, please try again later</h2>;
  } if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="language">
      {data.languages.map((language) => (
        <CountryByLanguageContainer
          countries={countries}
          language={language}
          search={search}
        />
      ))}
    </div>
  );
}
