import React from "react";
import data from "../constants/data";
import Emploi from "../components/Emploi";
import Notes from "../components/Notes";
import Absances from "../components/Absances";

const Accueil = () => {

  return (
    <div>


      <div className="row">
          <Absances ></Absances>
          <Notes ></Notes>
      </div>
      <Emploi></Emploi>
    </div>

  );
};

export default Accueil;
