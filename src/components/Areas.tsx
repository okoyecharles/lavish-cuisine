import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IoArrowForwardOutline } from "react-icons/io5";
import "../styles/Areas.css";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { fetchAreas } from "../redux/features/areas/areasSlice";
import { clearMeals } from "../redux/features/meals/mealsSlice";
import { toSnakeCase } from "../utils/utils";

const FlipAnimation = keyframes`
  from {
    opacity: 0;
    transform: rotateX(-45deg);
  }

  to {
    opacity: 1;
    transform: rotateX(0);
  }
`;

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
    <main className="areas">
      <Reveal triggerOnce keyframes={FlipAnimation} delay={250}>
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
      </Reveal>
    </main>
  );
};

export default Areas;
