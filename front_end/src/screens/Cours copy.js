// import React, { useCallback, useEffect, useState } from "react";
// import data from "../constants/data";
// import CoursService from "../services/CoursService";
// import AuthService from "../services/auth.service";
// import { Redirect } from "react-router-dom";
// import FilesService from "../services/FilesService";

// const Cours = (props) => {
//   const module = props.match.params.module;
//   console.log(module);
//   const [cours, setcours] = useState({});

//   const [title, settitle] = useState("");
//   const [description, setdescription] = useState("");
//   const [path, setpath] = useState("");
//   const [file, setfile] = useState();

//   const fetchData = useCallback(() => {

//     CoursService.getCoursByTitre(module)
//       .then((response) => {
//         setcours(response.data.module);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const currentUser = AuthService.getCurrentUser();
//   if (!currentUser) {
//     return <Redirect to="/login" />;
//   }

//   const selectFile = (e) => {
//     // e.preventDefault();
//     setfile(e.target.files);
//     FilesService.uploadFile(e.target.files[0])
//     .then((response) => {
//       setpath(response.data.path);
//     });

//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
 
//     cours.cours.push({"title":title,"description":description,"path":path});
//     CoursService.createCours(cours, file);
//     // FilesService.getFile(path).then((response) => {
//     //   console.log(response.data);
//     // });
//   };
//   return (
//     <div className="">
//       <div className="card m-4">
//         <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
//           <h2 className="m-0 font-weight-bold text-primary">les cours</h2>
//           <button
//             type="button"
//             class="btn btn-primary"
//             data-toggle="modal"
//             data-target="#exampleModalCenter"
//             id="#modalCenter"
//           >
//             ajouter un cours
//           </button>
//         </div>
//         <div className="card-body">
//           <div className="">
//             <div className="row text-center text-lg-left">
//               <div className="">
//                 {cours && cours.cours && cours.cours.map((cour) => (
//                   <a
//                     key={cour.id}
//                     href={"http://localhost:8888/api/files/file/"+cour.path}
//                     target="_blank"
//                     className="document info "
//                     rel="noreferrer"
//                   >
//                     <div className="document-body ">
//                       <i className="fa fa-file-word text-info"></i>
//                     </div>
//                     <div className="document-footer">
//                       <span className="document-name">{cour.title}</span>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modal Center */}
//       <div
//         className="modal fade"
//         id="exampleModalCenter"
//         tabIndex={-1}
//         role="dialog"
//         aria-labelledby="exampleModalCenterTitle"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalCenterTitle">
//                 Modal Vertically Centered
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">×</span>
//               </button>
//             </div>
//             <form onSubmit={submitHandler}>
//               <div className="modal-body">
//                 <div className="form-group">
//                   <label htmlFor="exampleInputEmail1">
//                     Entrer le titre de cours
//                   </label>
//                   <input
//                     type="test"
//                     className="form-control"
//                     placeholder="ex : Chapitre 2"
//                     onChange={(e) => {
//                       settitle(e.target.value);
//                     }}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="exampleInputEmail1">Description</label>
//                   <input
//                     type="test"
//                     className="form-control"
//                     placeholder="ex : la deuxieme partie"
//                     onChange={(e) => {
//                       setdescription(e.target.value);
//                     }}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <div className="custom-file">
//                     <input
//                       type="file"
//                       className="custom-file-input"
//                       id="customFile"
//                       onChange={selectFile}
//                     />
//                     <label className="custom-file-label" htmlFor="customFile">
//                       Choisir le cours
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-outline-primary"
//                   data-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Enregistrer le modification
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cours;
