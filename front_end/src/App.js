import { BrowserRouter, Redirect, Route, Router, useLocation } from "react-router-dom";
import Dispatcher from "./components/Dispatcher";
import EtudiantSideBar from "./components/EtudiantSideBar";
import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import Accueil from "./screens/Accueil";
import Authentification from "./screens/Authentification";
import Cours from "./screens/Cours";
import EtudiantAccueil from "./screens/EtudiantAccueil";
import EtudiantDetails from "./screens/EtudiantDetails";
import Etudiants from "./screens/Etudiants";
import Register from "./screens/Registre";
import Services from "./screens/Services";
import authService from "./services/auth.service";



function App() {
  const user = authService.getCurrentUser();

  return (
    <BrowserRouter>
      <div id="page-top">
        <div id="wrapper">
          {
            (user && user.roles.includes("ROLE_USER") ? (
              <EtudiantSideBar></EtudiantSideBar>
            ) : (
              <SideBar></SideBar>
            ))}
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>

              {user && user.roles.includes("ROLE_USER") ? (
                <Route path="/" exact={true} component={EtudiantAccueil} />
              ):(
                <Route path="/" exact={true} component={Dispatcher} />
              )
              }
  
              <Route path="/acceuil/:semestre?/:module?" component={Accueil} />
            
              {user &&
                (user.roles.includes("ROLE_PROF") ||
                  user.roles.includes("ROLE_PROF")) && (
                  <Route path="/etudiants" exact={true} component={Etudiants} />
                )}
              {user &&
                (user.roles.includes("ROLE_PROF") ||
                  user.roles.includes("ROLE_PROF")) && (
                  <Route path="/etudiant/:email?" component={EtudiantDetails} />
                )}
              <Route path="/login" exact={true} component={Authentification} />
              <Route path="/register" exact={true} component={Register} />
              <Route path="/cours/:semestre?/:module?" component={Cours} />
              <Route path="/services" exact={true} component={Services} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
