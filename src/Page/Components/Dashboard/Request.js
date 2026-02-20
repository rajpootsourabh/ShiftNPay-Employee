import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Request() {
  return (
    <Card className="p-3">
      <h5>Employee Self Service Request</h5>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <i className="bi bi-calendar-check"></i> Leave Request
        </ListGroup.Item>
        <ListGroup.Item>
          <i className="bi bi-clock"></i> Time Off Request
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Request;
