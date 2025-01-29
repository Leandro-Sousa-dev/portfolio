import { useContext } from "react";
import { NavHContext } from "../contexts/navContext";

export const useNavHandler = () => {
    return useContext(NavHContext)
}