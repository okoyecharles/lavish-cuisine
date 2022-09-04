import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useAppSelector } from "../hooks";
import { fetchAreas, updateAreasLoaded } from "../redux/actions";
import { AreasT } from "./Models";

const Areas: React.FC = () => {
  const areas: AreasT = useAppSelector(state => state.areas);
  const appState = useAppSelector(state => state.appState);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (appState.areasLoaded) return;
    dispatch(fetchAreas());
    dispatch(updateAreasLoaded());
  });

  return (
    <div className="areas">
      {areas?.map((area) => (
        <li key={v4()}>{area.name}</li>
      ))}
    </div>
  );
};

export default Areas;
