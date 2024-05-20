import "../styles/PageNotFound.css";
import { TbError404 } from "react-icons/tb";

const PageNotFound = () => {
  return (
    <main className="pageNotFound">
      <TbError404 className="pageNotFound__icon" />
      <h1>This page does not exist</h1>
    </main>
  );
};

export default PageNotFound;
