/**
 * @desc Raiz de la aplicación
 */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/**
 * @desc Hooks personalizados
 */
import { useCharacters } from "./CustomHooks/useCharacters";

/**
 * @desc Acciones
 */
import { GlobalSetCharacters, GlobalSearch } from "Actions/GlobalActions";

/**
 * @desc Componentes
 */
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import Loader from "./Components/Loader/Loader";

/**
 * @desc Estilos
 */
 import { Root } from "./Root.styles";

export default () => {

    // Disparador
    const dispatch = useDispatch();

    // Personajes
    const characters = useSelector( store => store.GlobalReducer.characters );

    // Datos
    const data = useCharacters();

    // Efecto de cambios de los personajes obtenidos
    useEffect( async () => {

        // Verificamos si hay datos
        Array.isArray( data ) && 
            // Almacenamos los datos
            dispatch( GlobalSetCharacters( data ) );
        
    }, [ data ] );

    return (
        <Root>

            { /* Buscador */ }
            <Search onSearch={ searchText => dispatch( GlobalSearch( searchText ) ) } />

            { /* Lista de personajes */ }
            { Array.isArray( characters ) && <CardList data={ characters } /> }

            { /* Mensaje de carga */ }
            <Loader />

        </Root>
    );

}