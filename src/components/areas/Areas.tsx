import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import "../../styles/Areas.css";
import { useNavigate } from "react-router-dom";
import { fetchAreas } from "../../redux/features/areas/areasSlice";
import { formatCount, getCountryCode, toSnakeCase } from "../../utils/utils";
import { FaArrowRightLong } from "react-icons/fa6";

const Areas: React.FC = () => {
  const navigate = useNavigate();
  const areas = useAppSelector((state) => state.areas);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (areas.status !== "fulfilled") {
      dispatch(fetchAreas());
    }
  }, []);

  const stats = useMemo(() => {
    const statsMap = {
      areaCount: 0,
    };
    areas.data.forEach(() => {
      statsMap.areaCount += 1;
    });
    return statsMap;
  }, [areas.data]);

  return (
    <div className="areas__container">
      <main className="areas">
      <section className="area__info">
          <p>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjl6ejVwZHY1OG40YWZ1ZG55cm85YXE0dzl3d2J3Y3d1eWJuMXkzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dlh7c1N7NqrH1ns4Yf/giphy.gif"
              alt="earth"
              height={48}
              width={48}
            />
            <span>{formatCount(stats.areaCount, "area", "areas")}</span>
          </p>
        </section>
        {areas.data.map((area) => {
          const countryCode = getCountryCode(area.name);
          const flagImage = countryCode
            ? `https://flagcdn.com/w80/${countryCode.toLocaleLowerCase()}.png`
            : "/assets/blank-flag.png";
          return (
            <article className="area" key={area.id}>
              <header className="area__content">
                <div className="area__content-image">
                  <img
                    src={flagImage}
                    alt={toSnakeCase(`${area.name} flag`)}
                    height={24}
                    width={32}
                  />
                </div>
                <h3>{area.name}</h3>
              </header>
              <button
                onClick={() => {
                  navigate(`./${toSnakeCase(area.name)}`);
                }}
              >
                <FaArrowRightLong />
              </button>
            </article>
          );
        })}
      </main>
    </div>
  );
};

export default Areas;
