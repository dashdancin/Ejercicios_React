import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || lyric.err || lyric.name === 'AbortError' ? (
    <Message 
    msg={ `Error: np existe la canción '<em>${search.song}</em>`}}
  ))
 return (
  <div>
   <h2>Detalles</h2>
   <SongArtist />
   <SongLyric />
  </div>
 );
};

export default SongDetails;
