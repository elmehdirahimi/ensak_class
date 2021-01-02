import React from "react";

const Authentification = () => {
  return (
    <div>
      <form type="POST" action="">
        <div>
          <div>email</div>
          <input type="email" name="email" />
        </div>
        <div>
          <div>mot de passe</div>
          <input type="password" name="password" />
        </div>

        <button type="submit">se connecter</button>
      </form>
      <a href="/regestre">s'inscrire</a>
    </div>
  );
};

export default Authentification;
