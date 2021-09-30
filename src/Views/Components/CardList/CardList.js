
/**
 * @desc Dependencias
 */
 import React from "react"; 

 /**
  * @desc Estilos
  */
 import { 
    Root
 } from "./CardList.styles";

 /**
  * @desc Componente 
  */
 import Card from "./SubComponents/Card/Card";
 
 /**
  * @desc Componente de lista de tarjetas
  */
 export default ({ ...props }) => {
    
     // Datos
     const { data } = props;

     return (
         <Root>
            {
                data.map( 
                    ( item, key ) => <Card key={ key } data={ item } />
                )
            }
         </Root>
     );
 
 }