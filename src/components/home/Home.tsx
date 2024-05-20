import React, { useMemo } from "react";
import HomeRow from "./HomeRow";
import { useAppSelector } from "../../hooks/redux";
import "../../styles/Home.css";
import { formatCount } from "../../utils/utils";

const Home: React.FC = () => {
  const categories = useAppSelector((state) => state.categories);
  const stats = useMemo(() => {
    const statsMap = {
      mealCount: 0,
      categoryCount: 0,
    };
    categories.data.forEach((category) => {
      statsMap.categoryCount += 1;
      statsMap.mealCount += category.meals.length;
    });
    return statsMap;
  }, [categories.data]);

  return (
    <div className="home__container">
      <main className="home">
        <section className="home__info">
          <p>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjB0bm12OGJ4YmxuNGVodTJ2Nmw2OThhNW96eXdpZTlsOGJrdWdoMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PDK9v6n0IJRHs9MnPB/giphy.gif"
              alt="pie"
              height={48}
              width={48}
            />
            <span>{formatCount(stats.mealCount, "meal", "meals")}</span>
          </p>
          <p>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2t2aHp1cndndDRweGV4NDR5OTkzejNtbWgyejNhaXB2bmE0NG84OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MohQPvwHM9XPc6b9kw/giphy.gif"
              alt="pizza"
              height={48}
              width={48}
            />
            <span>{formatCount(stats.categoryCount, "category", "categories")}</span>
          </p>
        </section>
        {categories.data.map((category) => (
          <HomeRow category={category} key={category.category.id} />
        ))}
      </main>
    </div>
  );
};

export default Home;
