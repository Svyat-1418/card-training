import {TypedUseSelectorHook} from "react-redux/es/types";
import {useSelector} from "react-redux";
import {RootStateType} from "../../app/store";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector