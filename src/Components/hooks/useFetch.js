import { useState, useEffect } from 'react';

export const useFetch = (url) => {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const fetchData = async () => {
   setLoading(true);
   try {
     const res = await fetch(url, {signal})
   }
  };

  return () => {
   second;
  };
 }, [third]);

 return <div>useFetch</div>;
};
