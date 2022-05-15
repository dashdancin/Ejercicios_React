import React from 'react';
import CrudApi from './Components/CrudApi';
import CrudApp from './Components/CrudApp';
import SelectAnidados from './Components/SelectAnidados';
import SongSearch from './Components/SongSearch';

function App() {
 return (
  <>
   <SelectAnidados />
   <hr />
   <SongSearch />
   <hr />
   <CrudApi />
   <hr />
   <CrudApp />
  </>
 );
}

export default App;
