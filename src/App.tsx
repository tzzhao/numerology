import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {store} from './stores/store'
import './App.css';
import { StringToNumberSection } from './components/StringToNumberSection/StringToNumberSection';
import { FavoriteSection } from './components/FavoriteSection/FavoriteSection';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

enum View {
  SEARCH, FAVORITES
}

const getEnumFromValue = (value: string) => {
  switch(value) {
    case 'favorites': {
      return View.FAVORITES;
    }
    default: {
      return View.SEARCH;
    }
  }
}

const getValueFromEnum = (enumValue: View) => {
  switch(enumValue) {
    case View.FAVORITES: {
      return 'favorites';
    }
    default: {
      return 'search';
    }
  }
}

function App() {
  const [view, setView] = useState(View.SEARCH);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: any) => {
    setView(getEnumFromValue(value));
  };


  return (
    <Provider store={store}>
      <div className="App">
        <div className="mode">
          <RadioGroup row aria-label="gender" name="gender1" value={getValueFromEnum(view)} onChange={handleChange}>
            <FormControlLabel value="search" control={<Radio />} label="Recherche" />
            <FormControlLabel value="favorites" control={<Radio />} label="Gestion des favoris" />
          </RadioGroup>
        </div>
        {view === View.SEARCH && <StringToNumberSection />}
        {view === View.FAVORITES && <FavoriteSection />}
      </div>
    </Provider>
  );
}

export default App;
