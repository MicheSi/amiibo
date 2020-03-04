import React from 'react';
import {useDispatch} from 'react-redux';
import {getAmiibos} from './actions';
import AmiiboList from './components/AmiibosList';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {
  const dispatch = useDispatch();

  const getCharacter = character => {
    dispatch(getAmiibos(character))
  }

  return (
    <div className="App">
      <h1>Nintendo Amiibos</h1>
      <SearchForm getCharacter={getCharacter}/>
      <AmiiboList />
    </div>
  );
}

export default App;
