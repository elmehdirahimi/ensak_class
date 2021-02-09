import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { Component, useCallback, useEffect, useState } from "react";
import authService from "../services/auth.service";
import EtudiantService from "../services/EtudiantService";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import SemestreService from "../services/SemestreService";
import { render } from "@testing-library/react";

class EmploiProf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curentSemestre: {},
      title: "",
      daysOfWeek: 1,
      startTime: "8:30:00",
      endTime: "12:30:00",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let semestreTitle = "semestre1";
    if (this.props.semestre) {
      semestreTitle = this.props.semestre;
    }
    SemestreService.getSemestreByName(semestreTitle)
      .then((response) => {
        this.setState({ curentSemestre: response.data.semestre });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    let semestreTitle = "semestre1";
    if (this.props.semestre) {
      semestreTitle = this.props.semestre;
    }
    SemestreService.getSemestreByName(semestreTitle)
      .then((response) => {
        this.setState({ curentSemestre: response.data.semestre });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const onChangeTitle = (e) => {
      this.setState({ title: e.target.value });
    };
    const onChangeDaysOfWeek = (e) => {
      this.setState({ daysOfWeek: e.target.value });
    };
    const onChangeStartTime = (e) => {
      this.setState({ startTime: e.target.value });
    };

    const onChangeEndTime = (e) => {
      this.setState({ endTime: e.target.value });
    };
    const user = authService.getCurrentUser();

    const submitHandler = (e) => {
      e.preventDefault();

      // this.setState({
      //   curentSemestre: (prevSemestre) => {
      //     let newSemestre = Object.assign({}, prevSemestre);
      //     newSemestre.emploi.emploi_data.push({
      //       title: this.state.title,
      //       daysOfWeek: this.state.daysOfWeek,
      //       startTime: this.state.startTime,
      //       endTime: this.state.endTime,
      //     });

      //     return newSemestre;
      //   },
      // });

      this.state.curentSemestre.emploi.emploi_data.push({
        title: this.state.title,
        daysOfWeek: this.state.daysOfWeek,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
      });

      console.log(this.state.curentSemestre.emploi.emploi_data);
      SemestreService.updateSemestre(this.state.curentSemestre)
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <div className="row">
        <div className="col card m-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h2 className="m-0 font-weight-bold text-primary">
              emploi du temps
            </h2>
          </div>
          <div className="card-body">
            {this.state.curentSemestre && this.state.curentSemestre.emploi && (
              <FullCalendar
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
                events={this.state.curentSemestre.emploi.emploi_data}
                allDaySlot={false}
              />
            )}
            <div class="card-footer text-center">
              <a class="m-0  text-primary card-link" target="_blank" href="/">
                telecharger l'emploi du temps{" "}
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* sdsdsdsd */}
        {user && !user.roles.includes("ROLE_USER") && (
          <div className="col">
            <div className="card m-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h2 className="m-0 font-weight-bold text-primary">
                  nouvelle sceance
                </h2>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label>Titre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="titre"
                      onChange={onChangeTitle}
                    />
                  </div>

                  <div className="form-group">
                    <label>L'heure de debut</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="8:30:00"
                        onChange={onChangeStartTime}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-clock" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>L'heure de fin</label>
                    <div className="input-group clockpicker">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="12:30:00"
                        onChange={onChangeEndTime}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-clock" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Jours</label>
                    <select
                      class="form-control mb-3"
                      name="role"
                      onChange={onChangeDaysOfWeek}
                    >
                      <option value="1">Lundi</option>
                      <option value="2">Mardi</option>
                      <option value="3">Mercredi</option>
                      <option value="4">Jeudi</option>
                      <option value="5">Vendredi</option>
                      <option value="6">Samedi</option>
                      <option value="7">Dimanche</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block">
                      Enregistrer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EmploiProf;
