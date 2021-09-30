/**
 * @desc Tipos
 */
import { GLOBAL_SET_CHARACTERS, GLOBAL_SEARCH, GLOBAL_DELETE_CHARACTER } from "Reducers/GlobalReducer";


/**
 * @desc Acción de almacenamiento global de los personajes
 * 
 * @param { Array } data
 * 
 * @return { Object }
 */
export const GlobalSetCharacters = ( data ) => {

    return {
        "type": GLOBAL_SET_CHARACTERS,
        "payload": data
    }

}

/**
 * @desc Acción de eliminar un personaje
 * 
 * @param { String } data
 * 
 * @return { Object }
 */
 export const GlobalDeleteCharacter = ( data ) => {

    return {
        "type": GLOBAL_DELETE_CHARACTER,
        "payload": data
    }

}

/**
 * @desc Acción de busqueda
 * 
 * @param { String } text
 * 
 * @return { Object }
 */
 export const GlobalSearch = ( text ) => {

    return {
        "type": GLOBAL_SEARCH,
        "payload": text
    }

}
