import { gql } from 'apollo-boost';

// eslint-disable-next-line import/prefer-default-export
export const GET_CONTINENTS = gql`
  query allContinents {
    continents {
      name
      code
    }
  }
`;
