const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [], 
        },
        
        actions: {
            cargarPlanetas: () => {
                fetch("https://swapi.tech/api/planets")
                    .then(res => res.json())
                    .then(data => setStore({ planetas: data.results }))
                    .catch(err => console.error(err));
                }, 

            cargarPlanetaIndividual: (id) => {
                fetch("https://swapi.tech/api/planets"+id)
                    .then(res => res.json())
                    .then(data => setStore({ planetas: data.results }))
                    .catch(err => console.error(err));
            },
           
            cargarVehiculos: () => {
                fetch("https://swapi.tech/api/vehicles")
                    .then(res => res.json())
                    .then(data => setStore({ vehiculos: data.results }))
                    .catch(err => console.error(err));
            },            
            cargarPersonajes: () => {
                fetch("https://swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({ personajes: data.results }))
                    .catch(err => console.error(err));
            },
        }
    };
};

export default getState;
