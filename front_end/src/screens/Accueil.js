import React from "react";
import data from "../constants/data";

const Accueil = () => {
  const { cours,notes,absances } = data;
  console.log(data);
  return (
    <div>
      {cours.map((cour) => (
        <div key={cour._id}>
          <div>{cour.title}</div>
          <div>{cour.description}</div>

          <a href={cour.path}>telecharger</a>
        </div>
      ))}

      {notes.map((note) => (
        <div key={note._id}>
          <div>{note.title}</div>
          <div>{note.description}</div>

          <a href={note.path}>telecharger</a>
        </div>
      ))}

      {absances.map((absance) => (
        <div key={absance._id}>
          <div>{absance.title}</div>
          <div>{absance.description}</div>

          <a href={absance.path}>telecharger</a>
        </div>
      ))}

    </div>
  );
};

export default Accueil;
