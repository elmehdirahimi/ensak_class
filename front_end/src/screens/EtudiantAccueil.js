import React from "react";
import data from "../constants/data";
import Emploi from "../components/Emploi";
import Notes from "../components/Notes";
import Absances from "../components/Absances";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

const EtudiantAccueil = () => {

  // const currentUser = AuthService.getCurrentUser();
  // if (!currentUser ) {
  //   return <Redirect to="/login" />;
  // }

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

export default EtudiantAccueil;
