import { useEffect, useState } from "react";

export default function useMediaWidth() {
  const [mediaWidth, setMediaWidth] = useState<number>(0);
  useEffect(() => {
    const update = () => setMediaWidth(window.innerWidth);

    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    }
  }, []);
  return mediaWidth;
}