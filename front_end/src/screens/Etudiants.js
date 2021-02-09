import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EtudiantService from "../services/EtudiantService";

export default function Etudiants() {
 const [myEtudiant, setmyEtudiant] = useState([]);
  const fetchData = useCallback(() => {
    EtudiantService.getEtudiants().then((response) => {
        setmyEtudiant(response.data.etudiants)
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

 console.log(myEtudiant);
  return (
    <div className="container-fluid" id="container-wrapper">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Liste des etudiants</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="./">Home</a>
          </li>
          <li className="breadcrumb-item">Liste des etudiants</li>
        </ol>
      </div>
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="card">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Liste des etudiants
              </h6>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
    
                    <tr>
                      <th>username</th>
                      <th>nom</th>
                      <th>Prenom</th>
                      <th>email</th>
                      <th>Action</th>
                    </tr>
                
                </thead>
                <tbody>

                  {myEtudiant &&  myEtudiant.map((etudiant) =>
                     
                      <tr>
                        <td>{etudiant.username}</td>
                        <td>{etudiant.nom}</td>
                        <td>{etudiant.prenom}</td>
                        <td>{etudiant.email}</td>
                        <td>
                          <Link to={{ pathname:'/etudiant/', email:etudiant.email}} className="btn btn-sm btn-primary">
                            Detail
                          </Link>
                        </td>
                      </tr>
                    
                  
                  )}
                </tbody>
              </table>
            </div>
            <div className="card-footer" />
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabelLogout"
        aria-hidden="true"
      >
      </div>
    </div>
  );
}
