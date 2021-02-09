import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

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

const username = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const nom = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const prenom = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const password = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeVpassword = this.onChangeVpassword.bind(this);

    this.state = {
      username: "",
      nom: "",
      prenom: "",
      role: "ROLE_USER",
      email: "",
      password: "",
      vpassword: "",
      successful: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeNom(e) {
    this.setState({
      nom: e.target.value,
    });
  }
  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value,
    });
  }
  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeVpassword(e) {
    this.setState({
      vpassword: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.nom,
        this.state.prenom,
        this.state.role,
        this.state.email,
        this.state.password
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
          });
        },
        (error) => {
          console.log(error);
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
    }
  }

  render() {
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
                      <Form
                        onSubmit={this.handleRegister}
                        ref={(c) => {
                          this.form = c;
                        }}
                      >
                        {!this.state.successful && (
                          <div>
                            <div className="form-group">
                              <label htmlFor="username">username</label>
                              <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required, username]}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="username">nom</label>
                              <Input
                                type="text"
                                className="form-control"
                                name="nom"
                                value={this.state.nom}
                                onChange={this.onChangeNom}
                                validations={[required, nom]}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="username">prenom</label>
                              <Input
                                type="text"
                                className="form-control"
                                name="prenom"
                                value={this.state.prenom}
                                onChange={this.onChangePrenom}
                                validations={[required, prenom]}
                              />
                            </div>

                            <div className="form-group">
                              <label>Role</label>
                              <select
                                class="form-control mb-3"
                                name="role"
                                onChange={this.onChangeRole}
                              >
                                <option value="ROLE_USER">Etudiant</option>
                                <option value="ROLE_PROF">Enseignant</option>
                              </select>
                            </div>

                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <Input
                                type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                validations={[required, email]}
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
                                validations={[required, password]}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="password">repeat password</label>
                              <Input
                                type="password"
                                className="form-control"
                                name="vpassword"
                                value={this.state.vpassword}
                                onChange={this.onChangeVpassword}
                                validations={[required, vpassword]}
                              />
                            </div>

                            <div className="form-group">
                              <button className="btn btn-primary btn-block">
                                Sign Up
                              </button>
                            </div>
                          </div>
                        )}

                        {this.state.message && (
                          <div className="form-group">
                            <div
                              className={
                                this.state.successful
                                  ? "alert alert-success"
                                  : "alert alert-danger"
                              }
                              role="alert"
                            >
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
  }
}
