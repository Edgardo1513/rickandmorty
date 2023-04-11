import React from "react";

const Pag = ({page, setPage, quantyPage}) => { 
    
    return (
        <div className="btn_page">
            { page > 1 && <button onClick={() => setPage(page -1)}> Back </button>}<p>{page} de {quantyPage}</p> 
            { quantyPage > page &&  <button onClick={() => setPage(page +1)}>Next </button>}
        </div>
    );
};

export default Pag;