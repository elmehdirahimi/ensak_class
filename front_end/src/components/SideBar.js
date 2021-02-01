import React, { Component, useCallback, useEffect, useState } from "react";
import data from "../constants/data";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import SemestreService from "../services/SemestreService";


const SideBar = () => {

  const [semestres, setsemestres] = useState([]);
 

  const fetchData = useCallback(() => {
  SemestreService.getSemestres().then((response) => {
      setsemestres(response.data.semestres)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

useEffect(() => {
    fetchData()
  }, [fetchData])

  let location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }
    
  return (
    <ul
      className="navbar-nav sidebar sidebar-light accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-text mx-3">Ensak Classroom</div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </a>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Les semestres</div>
      {semestres.map((semestre) => (
        <li className="nav-item" key={semestre.name}>
          <Link
            className="nav-link collapsed"
            href="/"
            data-toggle="collapse"
            data-target={"#" + semestre.name.replace(" ", "")}
            aria-expanded="true"
            aria-controls=""
          >
            <span className="nav-link">{semestre.name}</span>
          </Link>
          <div
            id={semestre.name.replace(" ", "")}
            className="collapse"
            aria-labelledby="headingBootstrap"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {semestre.modules.map((module) => (
                <Link
                  key={module}
                  className="collapse-item"
                  to={
                    "/cours/" +
                    semestre.name.replace(" ", "") +
                    "/" +
                    module.replace(" ", "")
                  }
                >
                  {module}
                </Link>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
