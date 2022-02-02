import { gql } from 'apollo-boost';

// eslint-disable-next-line import/prefer-default-export
export const GET_LANGUAGES = gql`
  query allLanguages  {
    languages {
      name
      native
    }
  }
`;
