/**
 * @desc Raiz de la aplicación
 */
 import React, { useEffect, useState } from "react";
 
/**
 * @desc Servicios
 */
import * as ServiceCharacters from "Services/Characters/Characters";

 /**
 * @desc Hook personalizado
 */
export const useCharacters = () => {

    // Personajes
    const [ data, setData ] = useState( null );

    /**
     * @desc Efecto de ejecución inicial
     */
    useEffect( async () => {

        const response = await ServiceCharacters.GetCharacters();
        // Asignamos los personajes
        setData( response.results )

    }, [] )

    return data;

}