import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import CountryContainer from './Country/CountryByContinentContainer';
import { GET_CONTINENTS } from '../queries/Continents';

export default function ContinentContainer(props) {
  const { data, loading, error } = useQuery(
    GET_CONTINENTS,
  );
  const { search } = props;

  if (error) {
    return <h2>Something went wrong, please try again later</h2>;
  } if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="country">
      {data.continents.map((continent) => (
        <CountryContainer
          language=""
          continent={continent}
          search={search}
        />
      ))}
    </div>
  );
}
