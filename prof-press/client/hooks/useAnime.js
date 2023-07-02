import React, { useRef, useEffect } from "react";
import anime from "animejs";

function useAnime(animeObj) {
  const animeRef = useRef(null);

  useEffect(() => {
    animeRef.current = anime(animeObj);
  }, []);

  return { animeRef };
}

export default useAnime;
