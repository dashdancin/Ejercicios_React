import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
   <> 
    !lyric || lyric.err || lyric.name === 'AbortError' ? (
    <Message 
    msg={ `Error: no existe la canción '<em>${search.song}</em>`}}
  ))
 return (
  <>
   <h2>Detalles</h2>
   <SongArtist />
   <SongLyric />
  </>
 );
};

export default SongDetails;
