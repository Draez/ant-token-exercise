import React, { useCallback, useEffect, useState } from "react";

const useImage = props => {
  const { id } = props;
  const [imageData, setImageData] = useState(null);
  const [loading, toggleLoading] = useState(false);
  const [currentId, setCurrentId] = useState(id);
  const fetchData = useCallback(() => {
    const asyncData = async () => {
      const res = await fetch(
        `http://localhost:5000/random-image/${currentId}`
      );
      const data = await res.json();
      console.log("data: ", data);
      setImageData(data);
      toggleLoading(false);
    };
    asyncData();
  }, []);
  useEffect(() => {
    if (!imageData && !loading) {
      toggleLoading(true);
      fetchData();
    }
  }, [imageData, loading]);
  useEffect(() => {
    if (currentId !== id) {
      setCurrentId(id);
      toggleLoading(true);
      fetchData();
    }
  }, []);
  return imageData;
};

export default useImage;
