import React from 'react';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
 const [search, setSearch] = useState(null);
 const [lyric, setLyric] = useState(null);
 const [bio, setBio] = useState(null);
 const [loading, setLoading] = useState(false);

 return (
  <div>
   <h2>Buscador de canciones</h2>
   <SongForm />
   <SongDetails />
  </div>
 );
};

export default SongSearch;
