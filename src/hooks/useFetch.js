import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(null);
  const dateFormat = new Date(time);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json.data);
          setTime(json.timestamp);
        }
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    setInterval(() => doFetch(), 60 * 1000);
  }, [options, url]);
  return { response, error, loading, dateFormat };
};

export default useFetch;
