import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../components/Models";
import store from "../redux/configureStore";

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
