import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

function HoursSpent() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Hours',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
        data: [50, 20, 45, 70, 30],
      },
    ],
  };

  return (
    <Card className="p-3">
      <h5>Hours Spent</h5>
      <Bar data={data} />
    </Card>
  );
}

export default HoursSpent;
