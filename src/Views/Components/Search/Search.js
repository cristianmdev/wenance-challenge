
/**
 * @desc Dependencias
 */
 import React, { useState, useEffect } from "react"; 

 /**
  * @desc Estilos
  */
 import { 
    Root,
        Label,
        Search,
            InputAdornment,
                IconButton,
                    SearchIcon
 } from "./Search.styles";
 
 /**
  * @desc Componente de buscador
  */
 export default ({ ...props }) => {
     
     // Alias de las propiedades
     const { onSearch = () => {} } = props;

     // Texto del buscador
     const [ searchText, setSearchText ] = useState( null );

     /**
      * @desc Efecto de inicio
      */
    useEffect(() => {

        searchText !== null &&
            onSearch( searchText )

    }, [ searchText ] );

     return (
         <Root>

            { /* Label */ }
            <Label htmlFor="outlined-adornment-password">Search...</Label>

            { /* Search */ }
            <Search type="text" 
                    id="outlined-adornment-password"
                    value={ searchText }
                    onChange={ e => setSearchText( e.target.value ) }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Search..."
            />

         </Root>
     );
 
 }