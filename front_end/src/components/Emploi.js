import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { useCallback, useEffect, useState } from "react";
import authService from "../services/auth.service";
import EtudiantService from "../services/EtudiantService";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";

const Emploi = () => {
  const [emplois, setemplois] = useState([]);
  const user = authService.getCurrentUser();

  const fetchData = useCallback(() => {
    
    EtudiantService.getEtudiantByEmail(user.email).then((response) => {
      setemplois(response.data.etudiant.semestre.emploi.emploi_data)
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // const data = [
  //   {
  //     // "title": "moudule 1",
  //     // "daysOfWeek": ["1"],
  //     // "startTime": '10:45:00',
  //     // "endTime": '12:45:00'

  //     title: "Event 2",
  //     start: "2021-02-04T20:00:00",
  //     end: "2014-02-05T10:00:00",
  //   },
  //   {
  //     title: "moudule 2",
  //     daysOfWeek: ["2"],
  //     startTime: "10:45:00",
  //     endTime: "12:45:00",
  //   },
  //   {
  //     title: "moudule 3",
  //     daysOfWeek: ["3"],
  //     startTime: "10:45:00",
  //     endTime: "12:45:00",
  //   },
  // ];
  // const getNote = (emplois) => {
  //   var mynote = [];
  //   emplois.map((onote) => {
  //       mynote.push(onote.note);
  //       console.log(onote.note);
  //   });
  //   return mynote;
  // };

  // const getTitreModule = (emplois) => {
  //   var titreModules = [];
  //   emplois.map((note) => {
  //     titreModules.push(note.module.titreModule);
  //   });
  //   return titreModules;
  // };

  // const {emploi} = data;
  return (
    <div className="card m-4">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h2 className="m-0 font-weight-bold text-primary">emploi du temps</h2>
      </div>
      <div className="card-body">
        <FullCalendar
          // plugins={[dayGridPlugin]}
          // initialView="dayGridWeek"
      
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          events={emplois}
          allDaySlot={false}
        />
        <div class="card-footer text-center">
          <a class="m-0  text-primary card-link" target="_blank" href="/">
            telecharger l'emploi du temps <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Emploi;
