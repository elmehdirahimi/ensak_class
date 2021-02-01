import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import Accueil from "./screens/Accueil";
import Authentification from "./screens/Authentification";
import Cours from "./screens/Cours";
import Registere from "./screens/Registre";

function App() {
  return (
    <BrowserRouter>
      <div id="page-top">
        <div id="wrapper">
          <SideBar></SideBar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <Topbar></Topbar>
              <Route path="/" exact={true} component={Accueil} />
              <Route path="/login" exact={true} component={Authentification} />
              <Route path="/register" exact={true} component={Registere} />
              <Route path="/cours/:semestre?/:module?" component={Cours} />
              {/* <Route path="/all"  component={AllProductScreen} />
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/shop/:id?" component={ShopScreen} />
          <Route path="/signin" component={UserSignInScreen} />
          <Route path="/orders" component={OrdersScreen} /> */}
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
