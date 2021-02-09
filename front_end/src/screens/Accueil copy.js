// import React from "react";
// import data from "../constants/data";
// import Emploi from "../components/Emploi";
// import Notes from "../components/Notes";
// import Absances from "../components/Absances";
// import { Redirect, useLocation } from "react-router-dom";
// import AuthService from "../services/auth.service";
// import Cours from "./Cours";
// import EmploiProf from "../components/EmploiProf";

// const Accueil = () => {

//   let location = useLocation();
//   if (location.pathname === "/login" || location.pathname === "/register") {
//     return null;
//   }
//   const currentUser = AuthService.getCurrentUser();
//   if (!currentUser ) {
//     return <Redirect to="/login" />;
//   }

//   return (
//     <div>
//       <div className="row">
//           {/* <Absances ></Absances>
//           <Notes ></Notes> */}
//           <Cours></Cours>
//       </div>
//       <EmploiProf></EmploiProf>
//     </div>

//   );
// };

// export default Accueil;
