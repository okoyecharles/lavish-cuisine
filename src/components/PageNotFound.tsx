import React from "react";
import { TbError404 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "../styles/PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  const navigateTo = (location: string) =>
    navigate(location, { replace: true });
  return (
    <main className="pageNotFound">
      <header className="pageNotFound__header">
        <h1>Sorry we can't seem to find the page you are looking for...</h1>
        <TbError404 className="pageNotFound__icon" />
      </header>
      <section className="pageNotFound__content">
        <h2>👇 You might be looking for one of the pages below</h2>
        <ul>
          <li>
            <div onClick={() => navigateTo("/")}>Home Page</div>{" "}
            <span>categories for different meals</span>
          </li>
          <li>
            <div onClick={() => navigateTo("/ingredients")}>
              Ingredients Page
            </div>{" "}
            <span>search meals that can be made with an ingredient</span>
          </li>
          <li>
            <div onClick={() => navigateTo("/areas")}>Areas Page</div>{" "}
            <span>list of areas for different meals</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default PageNotFound;
