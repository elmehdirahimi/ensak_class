import React from "react";

const Authentification = () => {
  return (
    <div>
      <div className="container-login">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card shadow-sm my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="login-form">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Login</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address" />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                        </div>
                  
                        <div className="form-group">
                          <a href="index.html" className="btn btn-primary btn-block">Login</a>
                        </div>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="font-weight-bold small" href="/regestre">Create an Account!</a>
                      </div>
                      <div className="text-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    
  );
};

export default Authentification;
