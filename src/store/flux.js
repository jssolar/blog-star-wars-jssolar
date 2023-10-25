const getState = ({setStore,getStore, getActions}) => {
    return {
        store: {
            people: {
                height:"",
                mass:"",
                hair_color:"",
                skin_color:"",
                eye_color:"",
                birth_year:"",
                gender:"",
                name:"",
                homeworld:"",
                url:""
            },
            listOfPeople: [],
            planet: {
                climate:"",
                diameter:"",
                gravity:"",
                name:"",
                orbital_period:"",
                population:"",
                residents: [],
                rotation_period:"",
                surface_water:"",
                terrain:"",
                url:""
            },
            listOfPlanets: [],
            vehicle: {
                model:"",
                vehicle_class:"",
                manufacturer:"",
                cost_in_credits:"",
                length:"",
                crew:"",
                passengers:"",
                max_atmosphering_speed:"",
                cargo_capacity:"",
                consumables:"",
                films:[],
                pilots:[],
                name:"",
                url:""
            },
            listOfVehicles: [],
            listOfFavorites: []
        },
        actions: {
            getPeople: ()=>{
                fetch("https://www.swapi.tech/api/people",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfPeople: data.results})).catch((error)=>console.log(error))
            },
            getPeopleInfo: (id)=>{
                fetch("https://www.swapi.tech/api/people/"+id,{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({people: data.result.properties})).catch((error)=>console.log(error))
            },
            getPlanet: ()=>{
                fetch("https://www.swapi.tech/api/planets",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfPlanets: data.results})).catch((error)=>console.log(error))
            },
            getPlanetInfo: (id)=>{
                fetch("https://www.swapi.tech/api/planets/"+id,{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({planet: data.result.properties})).catch((error)=>console.log(error))
            },
            getVehicle: ()=>{
                fetch("https://www.swapi.tech/api/vehicles",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfVehicles: data.results})).catch((error)=>console.log(error))
            },
            getVehicleInfo: (id)=>{
                fetch("https://www.swapi.tech/api/vehicles/"+id,{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({vehicle: data.result.properties})).catch((error)=>console.log(error))
            },
            addFav: (favorite)=>{
				const store = getStore();
				if (store.listOfFavorites.includes(favorite)){
					return alert("Favorite already added")
				}
				setStore({ listOfFavorites: [...store.listOfFavorites, favorite] })
				return console.log(store.listOfFavorites)
			},
			deleteFav: (index)=>{
				const store = getStore()
				store.listOfFavorites.splice(index, 1)
				setStore({listOfFavorites:store.listOfFavorites})
			},
        }
    }
}

export default getState;