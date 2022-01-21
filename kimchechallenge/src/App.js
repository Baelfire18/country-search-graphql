import React, { useState, useEffect } from 'react';
import './styles/App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { GET_COUNTRIES } from './queries/Countries';
import ContinentContainer from './containers/ContinentContainer';
import LanguageContainer from './containers/LanguageContainer';
import SearchBar from './components/Search';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
});

function App() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    client.query(
      { query: GET_COUNTRIES },
    ).then((response) => { setCountries(response.data.countries); });
  }, []);

  function displayContinent() {
    document.getElementById('language').style.display = 'none';
    document.getElementById('Lang').className = '';
    document.getElementById('continent').style.display = 'block';
    document.getElementById('Cont').className = 'active';
  }

  function displayLanguage() {
    document.getElementById('language').style.display = 'block';
    document.getElementById('Lang').className = 'active';
    document.getElementById('continent').style.display = 'none';
    document.getElementById('Cont').className = '';
  }

  if (countries) {
    return (
      <ApolloProvider client={client}>
        <main>
          <div>
            <div className="App-header">
              Country Search 🌎🔍
            </div>
            <SearchBar set={setSearch} />
            <div>
              Group By:
              <button
                type="button"
                id="Cont"
                className="active"
                onClick={displayContinent}
              >
                Continent
              </button>
              <button
                type="button"
                id="Lang"
                onClick={displayLanguage}
              >
                Language
              </button>
            </div>
            <div
              id="language"
              style={{ display: 'none' }}
            >
              <LanguageContainer
                countries={countries}
                search={search}
              />
            </div>
            <div
              id="continent"
              style={{ display: 'block' }}
            >
              <ContinentContainer
                search={search}
              />
            </div>
          </div>
        </main>
      </ApolloProvider>
    );
  } return null;
}

export default App;
