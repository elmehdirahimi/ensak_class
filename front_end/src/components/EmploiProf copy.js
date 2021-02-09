// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import React, { useCallback, useEffect, useState } from "react";
// import authService from "../services/auth.service";
// import EtudiantService from "../services/EtudiantService";
// import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// import timeGridPlugin from "@fullcalendar/timegrid";
// import SemestreService from "../services/SemestreService";

// const EmploiProf = (props) => {
//   const [curentSemestre, setcurentSemestre] = useState({});
//   const [title, settitle] = useState("");
//   const [daysOfWeek, setdaysOfWeek] = useState([]);
//   const [startTime, setstartTime] = useState("");
//   const [endTime, setendTime] = useState("");

//   const onChangeTitle = (e) => {
//     settitle(e.target.value);
//   };
//   const onChangeDaysOfWeek = (e) => {
//     setdaysOfWeek(e.target.value);
//   };
//   const onChangeStartTime = (e) => {
//     setstartTime(e.target.value);
//   };

//   const onChangeEndTime = (e) => {
//     setendTime(e.target.value);
//   };
//   const user = authService.getCurrentUser();

//   console.log(props);
//   const fetchData = useCallback(() => {
//     let semestreTitle = "semestre1";
//     if(props.semestre)
//     {
//       semestreTitle = props.semestre;
//     }
//     SemestreService.getSemestreByName(semestreTitle)
//       .then((response) => {
//         setcurentSemestre(response.data.semestre);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     curentSemestre.emplois.emploi_data.push({
//       title: title,
//       daysOfWeek: [daysOfWeek],
//       startTime: startTime,
//       endTime: endTime,
//     });
//     SemestreService.updateSemestre(curentSemestre);
//   };
//   return (
//     <div className="row">
//       <div className="col card m-4">
//         <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
//           <h2 className="m-0 font-weight-bold text-primary">emploi du temps</h2>
//         </div>
//         <div className="card-body">
//           {curentSemestre && curentSemestre.emplois && (
//             <FullCalendar
//               plugins={[timeGridPlugin]}
//               initialView="timeGridWeek"
//               events={curentSemestre.emplois.emploi_data}
//               allDaySlot={false}
//             />
//           )}
//           <div class="card-footer text-center">
//             <a class="m-0  text-primary card-link" target="_blank" href="/">
//               telecharger l'emploi du temps <i class="fas fa-chevron-right"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* sdsdsdsd */}
//       {user && !user.roles.includes("ROLE_USER") && (
//         <div className="col">
//           <div className="card m-4">
//             <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
//               <h2 className="m-0 font-weight-bold text-primary">
//                 {" "}
//                 nouvaux sceances
//               </h2>
//             </div>
//             <div className="card-body">
//               <form onSubmit={submitHandler}>
//                 <div className="form-group">
//                   <label>Titre</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="titre"
//                     onChange={onChangeTitle}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>L'houre de debut</label>
//                   <div className="input-group clockpicker">
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="12:30:00"
//                       onChange={onChangeStartTime}
//                     />
//                     <div className="input-group-append">
//                       <span className="input-group-text">
//                         <i className="fas fa-clock" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>L'houre de fine</label>
//                   <div className="input-group clockpicker">
//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="12:30:00"
//                       onChange={onChangeEndTime}
//                     />
//                     <div className="input-group-append">
//                       <span className="input-group-text">
//                         <i className="fas fa-clock" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>Jours</label>
//                   <select
//                     class="form-control mb-3"
//                     name="role"
//                     onChange={onChangeDaysOfWeek}
//                   >
//                     <option value="1">Lundi</option>
//                     <option value="2">Mardi</option>
//                     <option value="3">Mercredi</option>
//                     <option value="4">Jeudi</option>
//                     <option value="5">Vendredi</option>
//                     <option value="6">Samedi</option>
//                     <option value="7">Dimanche</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <button className="btn btn-primary btn-block">
//                     Enregistrer
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmploiProf;
