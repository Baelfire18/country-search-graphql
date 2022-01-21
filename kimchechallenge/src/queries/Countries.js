import { gql } from 'apollo-boost';
import { COUNTRY_INFO } from '../utils/CountryInfo';

// eslint-disable-next-line import/prefer-default-export
export const GET_COUNTRIES = gql`
  query allCountries {
    countries {
      ${COUNTRY_INFO}
    }
  }
`;
