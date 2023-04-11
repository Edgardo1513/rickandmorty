import React, { useEffect, useState } from "react";
import axios from "axios";



const Residents = ({url}) => { 

    const [resident, setResident] = useState ({})

    useEffect(() => {
        axios
        .get( url )
        .then(res =>setResident(res.data))
    }, [] )
     
    let statusArray = []
    const bgStatus = () => {
        if (resident.status === "Alive"){
            statusArray.push("chartreuse", "vivo")               
         } else if (resident.status === "Dead"){ 
           statusArray.push("red", "Muerto")
          } else {
            statusArray.push("grey", "Desconocido")
        }  
        return statusArray      
    }
    bgStatus()    
    return (
        <div className="resident-card">
            <img src={resident.image} alt="" />
            <h3>{resident.name}</h3>
            <div className="info_status">
                <div className="status" style={{backgroundColor: 
                    statusArray[0] }}></div><p>{statusArray[1]}</p>
                 </div>
            <p><strong>Especie: </strong>{resident.species} </p>
            <p><strong>Origen: </strong>{resident.origin?.name} </p>
            <p><strong>Episodios: </strong>{resident.episode?.length} </p>
           
        </div>
    );
};

export default Residents;