import React from "react";

const Registere = () => {
  return (
    <form type="POST" action="">
      <div>
        <div>nom</div>
        <input type="string" name="nom" />
      </div>

      <div>
        <div>prenom</div>
        <input type="email" name="prenom" />
      </div>

      <div>
        <div>role</div>
        <select name="role">
          <option value="etudiant">etudiant</option>
          <option value="enseignant">enseignant</option>
        </select>
      </div>
      <div>
        <div>email</div>
        <input type="email" name="email" />
      </div>

      <div>
        <div>nouveau mot de passe</div>
        <input type="password" name="nvpassword" />
      </div>

      <div>
        <div>confirmer le mot de passe</div>
        <input type="password" name="confpassword" />
      </div>

      <button type="submit">s'inscrire</button>
    </form>
  );
};

export default Registere;
