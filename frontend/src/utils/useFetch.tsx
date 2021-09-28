import { useEffect, useState, useRef } from "react";

export interface Payload {
  data: null | string,
  loading: boolean
}

const useFetch = (url: string) => {
  const [state, setState] = useState<Payload>({data: null, loading: true})

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setState({ data: y, loading: false });
      });
  }, [url, setState])

  return state;
  }

export default useFetch;
