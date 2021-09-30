/**
 * @desc Dependencias
 */
 import styled, { css } from "styled-components";

 /**
  * @desc Material design
  */
 import { 
     Grid, 
     OutlinedInput,
     InputAdornment as InputAdornmentMui,
     IconButton as IconButtonMui,
     InputLabel,
     FormControl
 } from '@mui/material';
 
/**
 * @desc Iconos
 */
import { Search as SearchIconMui } from '@mui/icons-material';


 /**
  * @desc Raiz
  */
 export const Root = styled( FormControl )`
    width:100%;
 `;
 
    /**
     * @desc Etiqueta
     */
    export const Label = styled( InputLabel )`
    `;

    /**
     * @desc Buscador
     */
    export const Search = styled( OutlinedInput )`
    `;
    
        
        /**
         * @desc Adorno
         */
        export const InputAdornment = styled( InputAdornmentMui )`
        `;
        
            
            /**
             * @desc Botón para iconos
             */
            export const IconButton = styled( IconButtonMui )`
            `;
            
            
            /**
             * @desc Icono de buscador
             */
            export const SearchIcon = styled( SearchIconMui )`
            `;