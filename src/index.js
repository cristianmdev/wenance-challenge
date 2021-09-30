/**
 * @desc Dependencias
 */
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

/**
 * @desc Aplicación
 */
import Root from "./Views/Root"

/**
 * @desc Configuraciones
 */
 import Redux from "./Config/Redux";


ReactDom.render( 
    <Provider store={ Redux }>
        <Root />
    </Provider>, document.querySelector("#root") );