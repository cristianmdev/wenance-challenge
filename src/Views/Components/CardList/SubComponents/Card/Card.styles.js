/**
 * @desc Dependencias
 */
 import styled, { css } from "styled-components";

 /**
  * @desc Material design
  */
 import { 
     Grid,
     Button,
     Typography
 } from '@mui/material';
 
 /**
  * @desc Raiz
  */
 export const Root = styled.section`
    display:flex;
    width:100%;
    padding:15px;
    border:1px solid #ccc;
    border-radius:4px;
    margin:10px 0px;
    flex-direction:column;
    position:relative;
    box-sizing: border-box;
 `;
 
    
    /**
     * @desc Nombre
     */
    export const Name = styled( Typography )`
        &&{
            margin-bottom:10px;
        }
    `;
    
    
    /**
     * @desc Detalle
     */
    export const Details = styled( Grid )`
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
    `;
        
        
        /**
         * @desc Detalle
         */
        export const Detail = styled( Grid )`
            display:flex;
            width:100%;
            flex-direction:column;
        `;
        
        
        /**
         * @desc Etiqueta
         */
        export const Label = styled( Typography )`
            &&{
                margin-right:10px;
                font-weight:bold;
            }
        `;
        
        
        /**
         * @desc Valor del detalle
         */
        export const Value = styled( Typography )`
        `;
        
    /**
     * @desc Botón de eliminar
     */
    export const Delete = styled( Button )`
        &&{
            position:absolute;
            top:10px;
            right:10px;
        }
    `;
