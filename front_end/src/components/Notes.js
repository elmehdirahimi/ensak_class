import React, { useCallback, useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import authService from "../services/auth.service";
import EtudiantService from "../services/EtudiantService";

const Notes = () => {
 const [notes, setnotes] = useState([]);
  const user = authService.getCurrentUser();

  const fetchData = useCallback(() => {
    EtudiantService.getEtudiantByEmail(user.email).then((response) => {
        setnotes(response.data.etudiant.notes)
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getNote = (notes) => {
    var mynote = [];
    notes.map((onote) => {
        mynote.push(onote.note);
        console.log(onote.note);
    });
    return mynote;
  };

  const getTitreModule = (notes) => {
    var titreModules = [];
    notes.map((note) => {
      titreModules.push(note.module.titreModule);
    });
    return titreModules;
  };

  const data = {
    labels: getTitreModule(notes),
    datasets: [
      {
        label: "note",
        backgroundColor: "rgba(103,119,224,0.5)",
        borderColor: "rgba(103,119,245,0.8)",
        pointBackgroundColor: "rgba(103,119,245,1)",
        pointBorderColor: "#6777E",
        pointHoverBackgroundColor: "#6777E",
        pointHoverBorderColor: "rgba(103,119,224,1)",
        data: getNote(notes),
      },
    ],
  };
  return (
    <div className="col-xl-6 col-lg-6">
      <div className="card m-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h2 className="m-0 font-weight-bold text-primary">les notes</h2>
        </div>
        <div className="card-body">
          <Radar data={data} />
        </div>
      </div>
    </div>
  );
};

export default Notes;
