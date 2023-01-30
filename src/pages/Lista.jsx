import React from "react";
import './Lista.css'

function Lista(props) {
    return(
        <section>
            {props.children}
        </section>
    );
}

export { Lista };