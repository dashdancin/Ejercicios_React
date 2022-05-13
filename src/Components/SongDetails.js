import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
   <> 
    {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
    <Message 
    msg={ `Error: no existe la canción '<em>${search.song}</em>'`}
    />
  ) : (
    <SongLyric title={search.song} lyrics={lyric.lyrics}/>
  )
  </>
 );
};

export default SongDetails;
