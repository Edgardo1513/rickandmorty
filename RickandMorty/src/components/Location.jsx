import React from "react";


const Location = ({rick}) => { 
    
    return (
        <div className="location-card">
            <h1>{rick.name}</h1>
            <p><strong>Tipo: </strong>{rick.type} </p>
            <p><strong>Dimension: </strong>{rick.dimension} </p>
            <p><strong>Residentes: </strong>{rick.residents?.length} </p>
        </div>
    );
};

export default Location;