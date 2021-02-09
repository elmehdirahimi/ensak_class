import React, { useCallback, useEffect, useState } from "react";
import EtudiantService from "../services/EtudiantService";

export default function EtudiantDetails(props) {
  const [myEtudiant, setmyEtudiant] = useState({});

  const fetchData = useCallback(() => {
    EtudiantService.getEtudiantByEmail(props.location.email).then(
      (response) => {
        setmyEtudiant(response.data.etudiant);
      }
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

//   console.log(myEtudiant);
  const [noteModule1, setnoteModule1] = useState("");
  const [noteModule2, setnoteModule2] = useState("");
  // const [noteModule3, setnoteModule3] = useState("");
  // const [noteModule4, setnoteModule4] = useState("");
  // const [noteModule5, setnoteModule5] = useState("");
  // const [noteModule6, setnoteModule6] = useState("");

  // const [nbAbsencesModule1, setnbAbsencesModule1] = useState("");
  // const [nbAbsencesModule2, setnbAbsencesModule2] = useState("");
  // const [nbAbsencesModule3, setnbAbsencesModule3] = useState("");
  // const [nbAbsencesModule4, setnbAbsencesModule4] = useState("");
  // const [nbAbsencesModule5, setnbAbsencesModule5] = useState("");
  // const [nbAbsencesModule6, setnbAbsencesModule6] = useState("");

  // const onChangeNoteModule1 = (e) =>{setnoteModule1(e.target.value)}
  // const onChangeNoteModule2 = (e) =>{setnoteModule2(e.target.value)}
  // const onChangeNoteModule3 = (e) =>{setnoteModule3(e.target.value)}
  // const onChangeNoteModule4 = (e) =>{setnoteModule4(e.target.value)}
  // const onChangeNoteModule5 = (e) =>{setnoteModule5(e.target.value)}
  // const onChangeNoteModule6 = (e) =>{setnoteModule6(e.target.value)}

  // const onChangeNbAbsences1 = (e) =>{setnbAbsencesModule1(e.target.value)}
  // const onChangeNbAbsences2 = (e) =>{setnbAbsencesModule2(e.target.value)}
  // const onChangeNbAbsences3 = (e) =>{setnbAbsencesModule3(e.target.value)}
  // const onChangeNbAbsences4 = (e) =>{setnbAbsencesModule4(e.target.value)}
  // const onChangeNbAbsences5 = (e) =>{setnbAbsencesModule5(e.target.value)}
  // const onChangeNbAbsences6 = (e) =>{setnbAbsencesModule6(e.target.value)}

  const submitHandler = (e) => {
    e.preventDefault();
    // alert("Dfd");
    // myEtudiant.notes[0].note = 0;
    EtudiantService.updateEtudiant(myEtudiant);
    // console.log(myEtudiant);
  };
  return (
    <div className="card mb-4 m-3">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">
          Donnee de l'etudiant
        </h6>
      </div>
      <div className="card-body">
        <form onSubmit={submitHandler} >
           {myEtudiant &&  myEtudiant.notes && myEtudiant.notes.map((onote) => (

            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
                {onote.module.titreModule}
              </label>
              <div className="col-sm-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="note"
                  value = {onote.note}
                  onChange={(e) => {setmyEtudiant((prevEtudiant) =>{
                      let newEtudiant = Object.assign({}, prevEtudiant);
                      newEtudiant.notes[newEtudiant.notes.indexOf(onote)].note = e.target.value;
                      return newEtudiant;
                  }
                  )}} />
              </div>
              <div className="col-sm-3">
              
                <input
                  type="number"
                  className="form-control"
                  placeholder="note"
                  value = {myEtudiant.absences[myEtudiant.notes.indexOf(onote)].nbAbsences}

                  onChange={(e) => {setmyEtudiant((prevEtudiant) =>{
                      let newEtudiant = Object.assign({}, prevEtudiant);
                      newEtudiant.absences[newEtudiant.notes.indexOf(onote)].nbAbsences = e.target.value;
                      return newEtudiant;
                  }
                  )}} />
                
              </div>
            </div>
          ))} 

          <div className="form-group row">
            <div className="col-sm-10">
              <button  type="submit" className="btn btn-primary">
                Enregistrer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
// 6015d644890ed70bf933dea0
// 6015d69e890ed70bf933dea2
// 6015d6ac890ed70bf933dea3
// 6015d6d4890ed70bf933dea7
// 6015d6e0890ed70bf933dea8
