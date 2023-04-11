import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Location from "./Location";
import Residents from "./Residents";
import Pag from "./Pag";


const Rickandmorty = () => {

    const [rickLocation, setRickLocation] = useState ({})

    useEffect(() => {
        let idLocation = Math.floor(Math.random() * 126) + 1
        axios
         .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
         .then(res =>setRickLocation(res.data))
    }, [] )

    const [ searchLoc, setSearchLoc] = useState("")

    const search = () => {
        if ( searchLoc <= 126){ 
            axios.get(`https://rickandmortyapi.com/api/location/${searchLoc}`)
               .then(res =>setRickLocation(res.data))
            setSearchLoc("")
        } else {
            alert("entrada no valida")
            setSearchLoc("")
        }
    }
    
    const [page, setPage] = useState(1)
    const perPage = 4
    const quantyPage = Math.ceil(rickLocation.residents?.length /
    perPage)

    const firstIndex = (page - 1) * perPage

    const residents = rickLocation.residents?.slice(firstIndex,
    firstIndex + perPage)

    return (
        <div >
            <input type="number"  min={1} max={126} value={
            searchLoc} onChange={(e) => setSearchLoc(e.target.
            value)} placeholder={"Ingrsa Id (1 - 126 )"} />
            <button onClick={search}>Buscar</button>
            <div className="rickandmorty-card">
                <Location rick={rickLocation} />
                <Pag page={page} setPage={setPage} quantyPage=
                {quantyPage} />
                {residents?.map((rick) => (
                    <Residents url={rick} key={rick} />
                ))             
                }
            </div>
          
        </div>
    );
};

export default Rickandmorty;