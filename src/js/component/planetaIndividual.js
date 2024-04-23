import React, { useEffect, useContext } from "react";
import {Context} from "../store/appContext"
import { useNavigate } from "react-router";


export const PlanetaIndividual = (props) => {
    const {store, actions } = useContext(Context);
 //   const cargarPersonajes = useStoreActions(actions => actions.cargarPersonajes);
 //   const personajes = useStoreState(state => state.personajes);

    useEffect(() => {
        actions.cargarPlanetaIndividual();
    }, []);

    const navigate = useNavigate()
    const {name, id} = props

    return (
        <div>
            <p>{name}</p>
            <button onClick={()=>navigate("/single/"+uid)}>Leer más</button>
        </div>
    )
}

