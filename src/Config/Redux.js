/**
 * @desc Dependencias
 */
import { createStore } from "redux";

/**
 * @desc Reducers
 */
import Reducers from "../Reducers/Reducers";

/**
 * @desc Exportamos la configuración del store
 */
export default createStore( Reducers, {} );