import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { fetchAreas, updateAreasLoaded } from "../redux/actions";
import { State } from "./Models";

const Areas: React.FC = () => {
  const areas = useSelector((state: State) => state.areas);
  const appState = useSelector((state: State) => state.appState);

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
