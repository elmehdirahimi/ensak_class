import React, { Component, useCallback, useEffect, useState } from "react";
import data from "../constants/data";
import CoursService from "../services/CoursService";
import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";
import FilesService from "../services/FilesService";

class Cours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cours: [],
      title: "",
      description: "",
      path: "ROLE_USER",
      file: "",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const currentUser = AuthService.getCurrentUser();
    if (currentUser && currentUser.roles.includes("ROLE_USER")) {
      if (this.props.match) {
        CoursService.getCoursByTitre(this.props.match.params.module)
          .then((response) => {
            this.setState({
              cours: response.data.module,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        CoursService.getCoursByTitre("module1")
          .then((response) => {
            this.setState({
              cours: response.data.module,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    if (!currentUser || !currentUser.roles.includes("ROLE_USER")) {
      if (this.props.props.match.params.module) {
        CoursService.getCoursByTitre(this.props.props.match.params.module)
          .then((response) => {
            this.setState({
              cours: response.data.module,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        CoursService.getCoursByTitre("module1")
          .then((response) => {
            this.setState({
              cours: response.data.module,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser && currentUser.roles.includes("ROLE_USER")) {
      if (this.props.match) {
        CoursService.getCoursByTitre(this.props.match.params.module)
          .then((response) => {
            this.setState({
              cours: response.data.module,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        CoursService.getCoursByTitre("module1")
          .then((response) => {
            this.setState({
              cours: response.data.module,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    if (!currentUser || !currentUser.roles.includes("ROLE_USER")) {
      if (this.props.props.match.params.module) {
        CoursService.getCoursByTitre(this.props.props.match.params.module)
          .then((response) => {
            this.setState({
              cours: response.data.module,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        CoursService.getCoursByTitre("module1")
          .then((response) => {
            this.setState({
              cours: response.data.module,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
   
  }
  render() {
    const currentUser = AuthService.getCurrentUser();
    const selectFile = (e) => {
      // e.preventDefault();
      this.setState({
        file: e.target.files,
      });
      FilesService.uploadFile(e.target.files[0]).then((response) => {
        this.setState({
          path: response.data.path,
        });
      });
    };

    const submitHandler = (e) => {
      e.preventDefault();

      this.state.cours.cours.push({
        title: this.state.title,
        description: this.state.description,
        path: this.state.path,
      });
      CoursService.createCours(this.state.cours, this.state.file);
    };
    return (
      <div className="">
        <div className="card m-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h2 className="m-0 font-weight-bold text-primary">les Cours</h2>
            {currentUser &&
              (currentUser.roles.includes("ROLE_PROF") ||
                currentUser.roles.includes("ROLE_PROF")) && (
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  id="#modalCenter"
                >
                  Ajouter un cours
                </button>
              )}
          </div>
          <div className="card-body">
            <div className="">
              <div className="row text-center text-lg-left">
                <div className="">
                  {this.state.cours &&
                    this.state.cours.cours &&
                    this.state.cours.cours.map((cour) => (
                      <a
                        key={cour.id}
                        href={
                          "http://localhost:8888/api/files/file/" + cour.path
                        }
                        target="_blank"
                        className="document info "
                        rel="noreferrer"
                      >
                        <div className="document-body ">
                          <i className="fa fa-file-word text-info"></i>
                        </div>
                        <div className="document-footer">
                          <span className="document-name">{cour.title}</span>
                          <div>sdsdsdsds</div>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Center */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                 Ajouter un nouveau cours
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form onSubmit={submitHandler}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Entrer le titre de cours
                    </label>
                    <input
                      type="test"
                      className="form-control"
                      placeholder="ex : Chapitre 2"
                      onChange={(e) => {
                        this.setState({
                          title: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Description</label>
                    <input
                      type="test"
                      className="form-control"
                      placeholder="ex : la deuxieme partie"
                      onChange={(e) => {
                        this.setState({ description: e.target.value });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={selectFile}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Choisir le cours
                      </label>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Enregistrer le modification
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cours;
