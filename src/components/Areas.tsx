import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useAppSelector } from "../hooks";
import { fetchAreas, updateAreasLoaded } from "../redux/actions";
import { AreasT } from "./Models";
import { IoArrowForwardOutline } from "react-icons/io5";
import "../styles/Areas.css";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const FlipAnimation = keyframes`
  from {
    opacity: 0;
    rotate: x -45deg;
  }

  to {
    opacity: 1;
    rotate: x 0deg;
  }
`;

const Areas: React.FC = () => {
  const areas: AreasT = useAppSelector((state) => state.areas);
  const appState = useAppSelector((state) => state.appState);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (appState.areasLoaded) return;
    dispatch(fetchAreas());
    dispatch(updateAreasLoaded());
  });

  return (
    <main className="areas">
      <Reveal
        keyframes={FlipAnimation}
      >
        {areas?.map((area) => (
          <div className="area" key={v4()}>
            <h2>{area.name}</h2>
            <div className="area__forward">
              <IoArrowForwardOutline />
            </div>
          </div>
        ))}
      </Reveal>
    </main>
  );
};

export default Areas;
