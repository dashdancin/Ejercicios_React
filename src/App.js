import React from 'react';
import CrudApi from './Components/CrudApi';
import CrudApp from './Components/CrudApp';
import SongSearch from './Components/SongSearch';

function App() {
 return (
  <>
   <SongSearch />
   <hr />
   <CrudApi />
   <hr />
   <CrudApp />
  </>
 );
}

export default App;
