
 useEffect(() => {
  if (search === null) return;

  const fetchData = async () => {
   const { artist, song } = search;

   let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
   let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

   //  console.log(artistUrl, songUrl);

   setLoading(true);

   const [artistRes, songRes] = await Promise.all([
    helpHttp().get(artistUrl),
    helpHttp().get(songUrl),
   ]);

   //  console.log(artistRes, songRes);

   setBio(artistRes);
   setLyric(songRes);
   setLoading(false);
  };

  fetchData();
 }, [search]);

 const handleSearch = (data) => {
  // console.log(data);
  setSearch(data);
 };

 return (
  <div>
   <h2>Buscador de canciones</h2>
   <SongForm handleSearch={handleSearch} />
   {loading && <Loader />}
   {search && !loading && (
    <SongDetails search={search} lyric={lyric} bio={bio} />
   )}
  </div>
 );
};

export default SongSearch;
