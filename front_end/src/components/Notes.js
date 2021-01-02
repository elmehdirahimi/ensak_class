import React from 'react';
import { Radar } from 'react-chartjs-2';

const Notes = () => {
    const notes = {
        labels: ['module 1', 'module 2', 'module 3', 'module 4', 'module 5', 'module 6'],
        datasets: [
            {
                label: 'note',
                backgroundColor: 'rgba(103,119,224,0.5)',
                borderColor: 'rgba(103,119,245,0.8)',
                pointBackgroundColor: 'rgba(103,119,245,1)',
                pointBorderColor: '#6777E',
                pointHoverBackgroundColor: '#6777E',
                pointHoverBorderColor: 'rgba(103,119,224,1)',
                data: [16, 12, 18, 16, 14, 17]
            },
        ]
    };
    return (
        <div className="col">
            <div className="card m-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h2 className="m-0 font-weight-bold text-primary">les notes</h2>
                </div>
                <div className="card-body">
                    <Radar data={notes} />
                </div>
            </div>
        </div>
    );
};

export default Notes;