import { useEffect, useState, useCallback } from "react";

export interface Payload {
  data: null | string,
  loading: boolean
}

const useFetch = (url: string) => {
  // const [state, setState] = useState<Payload>({data: null, loading: true})
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Payload>({data: null, loading: true});

  const refetch = useCallback(() => {
    setLoading(true);
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setQuote({ data: y, loading: false });
        // setQuote(String(Math.random()));
        setLoading(false);
      });
  }, [url]);

  return { quote, refetch, loading };
  }

export default useFetch;
