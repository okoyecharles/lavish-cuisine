import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IoArrowForwardOutline } from "react-icons/io5";
import "../styles/Areas.css";
import { useNavigate } from "react-router-dom";
import { fetchAreas } from "../redux/features/areas/areasSlice";
import { toSnakeCase } from "../utils/utils";


const Areas: React.FC = () => {
  const navigate = useNavigate();
  const areas = useAppSelector((state) => state.areas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (areas.status !== "fulfilled") {
      dispatch(fetchAreas());
    }
  }, []);

  return (
    <div className="areas__container">
      <main className="areas">
          {areas.data.map((area) => (
            <div className="area" key={area.id}>
              <h2>{area.name}</h2>
              <div
                className="area__forward"
                onClick={() => {
                  navigate(`./${toSnakeCase(area.name)}`);
                }}
              >
                <IoArrowForwardOutline />
              </div>
            </div>
          ))}
      </main>
    </div>
  );
};

export default Areas;
