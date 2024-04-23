import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CartaPersonajes } from "../component/cartaPersonajes";
import { CartaPlanetas } from "../component/cartaPlanetas";
import { CartaVehiculos } from "../component/cartaVehiculos";
import { useContext } from "react";

export const Home = () => {
	const { store, actions } = useContext(Context);

	<div className="text-center mt-5">
		<h1>CHARACTERS</h1>
		<div>
			<CartaPersonajes />
		</div>
		<h1>PLANETS</h1>
		<div>
			{store.planets.map(elemento =>
			<CartaPlanetas props={elemento}/>)}
		</div>
		<h1>VEHICLES</h1>
		<div>
			<CartaVehiculos />
		</div>
	</div>
};
