import React from "react";
import data from "../constants/data";
import Emploi from "../components/Emploi";
import Notes from "../components/Notes";
import Absances from "../components/Absances";
import { Redirect, useLocation } from "react-router-dom";
import AuthService from "../services/auth.service";
import Cours from "./Cours";
import EmploiProf from "../components/EmploiProf";

const Accueil = (props) => {

  let location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }
  // const currentUser = AuthService.getCurrentUser();
  // if (!currentUser ) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <div>

<EmploiProf semestre={props.match.params.semestre}></EmploiProf>
      {/* <div className="row"> */}
          {/* <Absances ></Absances>
          <Notes ></Notes> */}
          <Cours props={props}></Cours>
      {/* </div> */}
      
    </div>

  );
};

export default Accueil;
