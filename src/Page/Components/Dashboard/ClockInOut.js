import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ClockInOut() {
  return (
    <Card className="p-3 text-center">
      <img src="https://via.placeholder.com/80" alt="Employee" className="rounded-circle mb-3" />
      <h5>Employee In</h5>
      <h3>09:11 AM</h3>
      <Button variant="success">Clock Out</Button>
    </Card>
  );
}

export default ClockInOut;
