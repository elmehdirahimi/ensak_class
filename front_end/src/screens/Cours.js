import React from "react";
import data from "../constants/data";

const Cours = (props) => {
  //   const semestre = props.match.params.semestre;
  //   const module = props.match.params.module;
  const { cours } = data;
const  cour="dfdfd";
  return (
    <div className="">
      <div className="card m-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h2 className="m-0 font-weight-bold text-primary">les cours</h2>
        </div>
        <div className="card-body">
          <div className="">
            <div className="row text-center text-lg-left">
              <div className="">
                {cours.map((cour) => (
                  <a
                    key={cour.id}
                    href={cour.path}
                    target="_blank"
                    className="document info "
                    rel="noreferrer"
                  >
                    <div className="document-body ">
                      <i className="fa fa-file-word text-info"></i>
                    </div>
                    <div className="document-footer">
                      <span className="document-name">{cour.title}</span>
                    </div>
                  </a>

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;
