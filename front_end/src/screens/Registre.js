import React from "react";

const Registere = () => {
  return (
    <div className="container-login">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card shadow-sm my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-form">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Register</h1>
                    </div>
                    <form>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputFirstName"
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputLastName"
                          placeholder="Enter Last Name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Role</label>
                        <select class="form-control mb-3">
                          <option>Etudiant</option>
                          <option>Enseignant</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label>Repeat Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPasswordRepeat"
                          placeholder="Repeat Password"
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="font-weight-bold small" href="/login">
                        Already have an account?
                      </a>
                    </div>
                    <div className="text-center"></div>
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

export default Registere;
