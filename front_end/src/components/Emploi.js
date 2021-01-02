import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import data from '../constants/data';

const Emploi = () => {
const {emploi} = data;
    return (
        <div className="card m-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h2 className="m-0 font-weight-bold text-primary">emploi du temps</h2>
        </div>
        <div className="card-body">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={emploi}
          />
          <div class="card-footer text-center">
                  <a class="m-0 small text-primary card-link" target="_blank" href="/">telecharge l'emploi du temps <i
                      class="fas fa-chevron-right"></i></a>
            </div>
        </div>
      </div>
    );
};

export default Emploi;