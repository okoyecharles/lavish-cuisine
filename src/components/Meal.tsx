import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { AiFillYoutube } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import { GiChefToque } from "react-icons/gi";
import "../styles/Meal.css";
import { isValidString } from "../utils/utils";
import { TailSpin } from "react-loader-spinner";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchDetailedMeal } from "../redux/features/meals/mealSlice";

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
  const params = useParams();
  const dispatch = useAppDispatch();
  const meal = useAppSelector((state) => state.meal);

  const [showFullInstructions, setShowFullInstructions] = useState<boolean>(false);
  useEffect(() => {
    dispatch(fetchDetailedMeal({ name: params.meal! }));
  }, []);

  return (
    <main className="meal">
      {meal.status === "pending" ? (
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
      ) : meal.data ? (
        <>
          <header className="meal__header">
            <h1>{meal.data.name}</h1>
            <span>{meal.data.area}</span>
          </header>
          <section className="meal__measurements">
            <h2>Requirements</h2>
            <div>
              <TableContainer component={Paper} className="meal__measurementsContainer">
                <Table sx={{ minWidth: 100 }} aria-label="measurements table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Ingredient</StyledTableCell>
                      <StyledTableCell>Measurement</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {meal.data.ingredients_measurements.map(
                      ([ingredient, measurement]) => (
                        <StyledTableRow key={ingredient}>
                          <StyledTableCell component="th" scope="row">
                            {ingredient}
                          </StyledTableCell>
                          <StyledTableCell>{measurement}</StyledTableCell>
                        </StyledTableRow>
                      )
                    )}
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
              {!showFullInstructions
                ? meal.data.instructions?.substring(0, 500)
                : meal.data.instructions}
              <div
                onClick={() => {
                  setShowFullInstructions((prevState) => !prevState);
                }}
              >
                {showFullInstructions ? "show less" : "show more..."}
              </div>
            </div>
          </section>
          {(isValidString(meal.data.youtube) || isValidString(meal.data.cookbook)) && (
            <section className="meal__help">
              <h2>Still Confused?</h2>
              <div>
                {meal.data.youtube && (
                  <a href={meal.data.youtube} target="_blank" rel="norefferrer">
                    <AiFillYoutube />
                  </a>
                )}
                {meal.data.cookbook && (
                  <a href={meal.data.cookbook} target="_blank" rel="norefferrer">
                    <BsJournalBookmark />
                  </a>
                )}
              </div>
            </section>
          )}
        </>
      ) : null}
    </main>
  );
};

export default Meal;
