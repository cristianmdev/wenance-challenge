
/**
 * @desc Dependencias
 */
 import React from "react"; 
 import { useDispatch } from "react-redux";

/**
 * @desc Acciones
 */
import { GlobalDeleteCharacter } from "Actions/GlobalActions";

 /**
  * @desc Estilos
  */
 import { 
    Root,
        Name,
        Details,
            Detail,
                Label, Value,
        Delete
 } from "./Card.styles";
 
 /**
  * @desc Componente de tarjeta de un personaje
  */
 export default ({ ...props }) => {
     
    // Alias de las propiedades
    const { 
        
        // Datos
        data = {}
    
    } = props;

    // Disparador
    const dispatch = useDispatch();

    return (
        <Root>

            { /* Nombre del personaje */ }
            <Name variant="h5">{ data.name }</Name>

            { /* Altura del personaje */ }
            <Details>

                { /* Detalle */ }
                <Detail>
                    <Label>Height</Label>
                    <Value>{ data.height }</Value>
                </Detail>

                { /* Detalle */ }
                <Detail>
                    <Label>Gender</Label>
                    <Value>{ data.gender }</Value>
                </Detail>
                
            </Details>

            { /* Botón de eliminar */ }
            <Delete variant="outlined" onClick={ () => dispatch( GlobalDeleteCharacter( data ) ) }>DELETE</Delete>

        </Root>
    );
 
 }