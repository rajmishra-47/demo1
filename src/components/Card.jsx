import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Card1(data) {
  return (
    <div>
     <Card style={{ width: 'auto',height:'auto' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {data.text}.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
