
 /**
  * @desc Acciones
  */
 export const GLOBAL_SET_CHARACTERS = 'GLOBAL_SET_CHARACTERS';
 export const GLOBAL_SEARCH = 'GLOBAL_SEARCH';
 export const GLOBAL_DELETE_CHARACTER = 'GLOBAL_DELETE_CHARACTER';
 
 /**
  * @desc Estado inicial.
  */
 const INITIAL_STATE = {

    // Personajes
    "originalData": null,
    // Personajes
    "characters": null
 
 };
 
 /**
  * @desc Reductor.
  */
  const GlobalReducer = ( state = INITIAL_STATE, action ) => {

     // Evaluamos la acción
     switch( action.type ){
 
         case GLOBAL_SET_CHARACTERS: 
             return {
                 ...state,
                 "characters": action.payload,
                 "originalData": action.payload
             };

         case GLOBAL_SEARCH: 

             // Personajes filtrados
             let filtered = state.originalData.filter( item => item.name.toLowerCase().includes( action.payload ) );

             return {
                 ...state,
                 "characters": filtered
             };


        case GLOBAL_DELETE_CHARACTER: 

             // Personajes filtrados
             let newCharacters = state.originalData.filter( item => item.name !== action.payload.name  );

             return {
                 ...state,
                 "originalData": newCharacters,
                 "characters": newCharacters
             };

         default:
             return {
                 ...state,
             }
             
     }
 
 }
 
 export default GlobalReducer;
 