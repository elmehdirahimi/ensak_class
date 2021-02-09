import React, { useCallback, useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import authService from "../services/auth.service";
import EtudiantService from "../services/EtudiantService";

const Absances = () => {
  const [absences, setabsences] = useState([]);
  const user = authService.getCurrentUser();

  const fetchData = useCallback(() => {
    EtudiantService.getEtudiantByEmail(user.email).then((response) => {
      setabsences(response.data.etudiant.absences);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  const getNbAbsence = (absences) => {
    var nbAbsences = [];
    absences.map((absence) => {
      nbAbsences.push(absence.nbAbsences);
    });
    return nbAbsences;
  };

  const getTitreModule = (absences) => {
    var titreModules = [];
    absences.map((absence) => {
        titreModules.push(absence.module.titreModule);
    });
    return titreModules;
  };

  const data = {
    labels: getTitreModule(absences),
    datasets: [
      {
        label: "absences",
        backgroundColor: "rgba(103,119,224,0.5)",
        borderWidth: 2,
        data: getNbAbsence(absences),
      },
    ],
  };
//   console.log(absences);

  return (
    <div className="col-xl-6 col-lg-6">
      <div className="card m-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h2 className="m-0 font-weight-bold text-primary">les absances</h2>
        </div>
        <div className="card-body">
          {/* <Line data={data} /> */}
          <Bar data={data}></Bar>
        </div>
      </div>
    </div>
  );
};

export default Absances;
