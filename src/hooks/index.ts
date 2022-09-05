import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { useNavigate, useNavigationType } from "react-router-dom";
import { RootState } from "../components/Models";
import store from "../redux/configureStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

