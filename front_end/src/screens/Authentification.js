import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Authentification1 = () => {
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
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>

                        <div className="form-group">
                          <a
                            href="index.html"
                            className="btn btn-primary btn-block"
                          >
                            Login
                          </a>
                        </div>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="font-weight-bold small" href="/register">
                          Create an Account!
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
    </div>
  );
};

// export default Authentification;

export default class Authentification extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
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

                        <Form
                          onSubmit={this.handleLogin}
                          ref={(c) => {
                            this.form = c;
                          }}
                        >
                          <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                              type="text"
                              className="form-control"
                              name="username"
                              value={this.state.username}
                              onChange={this.onChangeUsername}
                              validations={[required]}
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                              type="password"
                              className="form-control"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={[required]}
                            />
                          </div>

                          <div className="form-group">
                            <button
                              className="btn btn-primary btn-block"
                              disabled={this.state.loading}
                            >
                              {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              <span>Login</span>
                            </button>
                          </div>

                          {this.state.message && (
                            <div className="form-group">
                              <div className="alert alert-danger" role="alert">
                                {this.state.message}
                              </div>
                            </div>
                          )}
                          <CheckButton
                            style={{ display: "none" }}
                            ref={(c) => {
                              this.checkBtn = c;
                            }}
                          />
                        </Form>
                        <hr />
                        <div className="text-center">
                          <a
                            className="font-weight-bold"
                            href="/register"
                          >
                            Create an Account!
                          </a>
                         
                        </div>
                        <div className="text-center">
                        <a className="font-weight-bol" href="/acceuil">
                          connect as a guest
                        </a>
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
  }
}
