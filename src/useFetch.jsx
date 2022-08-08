import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => setData(json));
  });
  return [data];
}

export default useFetch;
