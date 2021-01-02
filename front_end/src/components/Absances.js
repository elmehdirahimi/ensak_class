import React from 'react';
import { Line } from 'react-chartjs-2';

const Absances = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(103,119,224,0.5)',
                borderColor: 'rgba(103,119,245,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(103,119,245,1)',
                pointBackgroundColor: '#6777E',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(103,119,245,1))',
                pointHoverBorderColor: 'rgba(103,119,245,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [4, 2, 3, 5, 0, 2, 40]
            }
        ]
    };

    return (

        <div className="col-xl-6 col-lg-6">
            <div className="card m-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h2 className="m-0 font-weight-bold text-primary">les absances</h2>
                </div>
                <div className="card-body">
                    <Line data={data} />
                </div>
            </div>
            </div>
    );
};

export default Absances;