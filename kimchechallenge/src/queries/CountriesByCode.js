import { gql } from 'apollo-boost';
import { COUNTRY_INFO } from '../utils/CountryInfo';

// eslint-disable-next-line import/prefer-default-export
export const GET_COUNTRIES_BY_CODE = gql`
  query getCountriesByCode ($cont: String!) {
    countries (filter: {continent: {eq: $cont}}) {
      ${COUNTRY_INFO}
    }
  }
`;
