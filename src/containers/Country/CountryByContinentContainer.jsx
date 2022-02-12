import React from 'react';
import '../../styles/containers.css';
import { useQuery } from '@apollo/react-hooks';
import Country from '../../components/Country';
import { GET_COUNTRIES_BY_CODE } from '../../queries/CountriesByCode';

export default function CountryByContinentContainer(props) {
  const { continent, search } = props;

  const { data, loading, error } = useQuery(
    GET_COUNTRIES_BY_CODE, { variables: { cont: continent.code } },
  );

  if (error) {
    return <h2>Something went wrong, please try again later</h2>;
  } if (loading) {
    return <h2>Loading...</h2>;
  }

  let title = false;

  data.countries.map((country) => (
    country.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    // && search.length > 0
      ? title = true : null));

  return (
    <div className="countries">
      <p className="title">
        {title
          ? continent.name : null}
      </p>
      {data.countries.map((country) => (
        <Country
          country={country}
          search={search}
        />
      ))}
    </div>
  );
}
