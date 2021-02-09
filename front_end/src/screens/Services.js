import React, { useCallback, useEffect, useState } from 'react'
import authService from '../services/auth.service';
import ServicesService from '../services/ServicesService';

export default function Services() {


    const [myservices, setmyServices] = useState([]);

    const fetchData = useCallback(() => {
        ServicesService.getServices().then(
          (response) => {
            setmyServices(response.data.services);
          }
        );
      }, []);
    
      useEffect(() => {
        fetchData();
      }, [fetchData]);
    const currentUser = authService.getCurrentUser();
    
    return (
        <div className="">
        <div className="card m-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h2 className="m-0 font-weight-bold text-primary">les Services</h2>
            {currentUser &&
              (currentUser.roles.includes("ROLE_PROF") ||
                currentUser.roles.includes("ROLE_USER")
                ||
                currentUser.roles.includes("ROLE_ADMIN")

                ) && (
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  id="#modalCenter"
                >
                  Demander un service
                </button>
              )}



              {/* {currentUser &&
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
              )} */}
          </div>
          <div className="card-body">
            <div className="">
              <div className="row text-center text-lg-left">
                <div className="">
                  {myservices &&
                    
                    myservices.map((myservice) => (
                      <a
                        key={myservice.id}
                        href={
                          "http://localhost:8888/api/files/file/" + myservice.path
                        }
                        target="_blank"
                        className="document info "
                        rel="noreferrer"
                      >
                        <div className="document-body ">
                          <i className="fa fa-file-word text-info"></i>
                        </div>
                        <div className="document-footer">
                          <span className="document-name">{myservice.title}</span>
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
                 Demander un service
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
              {/* <form onSubmit={submitHandler}>
               */}
               <form>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Entrer le nom de service
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ex : Fiche Evaluation"
                  
                    />
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
                    Demander
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}
