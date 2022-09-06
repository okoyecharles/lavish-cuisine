import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { fetchMealInfo } from "../redux/actions";
import { MealT } from "./Models";
import { AiFillYoutube } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import { GiChefToque } from "react-icons/gi";
import "../styles/Meal.css";
import { getIngredientMaterials, isValidString } from "../utils/utils";
import { TailSpin } from "react-loader-spinner";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#6f4b0c",
    fontWeight: "900",
    textTransform: "uppercase",
    fontSize: "1.05em",
    border: "0",
    padding: ".5em 1em",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1em",
    border: "0",
    padding: ".5em 1em",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#c0841d14",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(ingredient: string, measurement: string) {
  return { ingredient, measurement };
}



const Meal: React.FC = () => {
  const params = useParams<string>();
  const dispatch = useDispatch<any>();

  const meal: MealT = useAppSelector((state) => state.meal);

  const rows = [
    ...getIngredientMaterials(meal).map(pair => createData(pair[0], pair[1]))
  ];

  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchMealInfo(params.meal));
  }, []);

  return (
    <main className="meal">
      {Object.entries(meal).length ? (
        <>
          <header className="meal__header">
            <h1>{meal?.strMeal}</h1>
            <span>{meal?.strArea}</span>
          </header>
          <section className="meal__measurements">
            <h2>Requirements</h2>
            <div >
              <TableContainer component={Paper} className="meal__measurementsContainer">
                <Table sx={{ minWidth: 100 }} aria-label="measurements table" >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Ingredient</StyledTableCell>
                      <StyledTableCell>Measurement</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.ingredient}>
                        <StyledTableCell component="th" scope="row">
                          {row.ingredient}
                        </StyledTableCell>
                        <StyledTableCell>{row.measurement}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </section>
          <section className="meal__instructions">
            <h2>
              Preparation <GiChefToque />
            </h2>
            <div className="meal__instructionsContainer">
              {showMore
                ? meal?.strInstructions
                : meal?.strInstructions.substring(0, 500)}
              <div
                onClick={() => {
                  setShowMore((prevState) => !prevState);
                }}
              >
                {showMore ? "show less" : "show more..."}
              </div>
            </div>
          </section>
          {(isValidString(meal.strYoutube) ||
            isValidString(meal.strSource)) && (
            <section className="meal__help">
              <h2>Still Confused?</h2>
              <div>
                {isValidString(meal.strYoutube) && (
                  <a href={meal.strYoutube} target="_blank" rel="norefferrer">
                    <AiFillYoutube />
                  </a>
                )}
                {isValidString(meal.strSource) && (
                  <a href={meal.strSource} target="_blank" rel="norefferrer">
                    <BsJournalBookmark />
                  </a>
                )}
              </div>
            </section>
          )}
        </>
      ) : (
        <TailSpin
          height="150"
          width="150"
          color="#c0841d"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{
            marginInline: "auto",
            marginTop: "5em",
            opacity: "0.5",
          }}
          wrapperClass=""
          visible={true}
        />
      )}
    </main>
  );
};

export default Meal;
