import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import { object, string, number, date } from 'yup';

function Forms2() {
  // State to track form values
  const [formData, setFormData] = useState({
    name: '',
    numb: '',
    email: '',
    website: '',
  });

  // Define validation schema
  let userSchema = object({
    name: string().required("This is a required field"),
    numb: number().required("This is a required field"),
    email: string().email("Invalid email format"),
    website: string().url("Invalid URL format").nullable(),
    createdOn: date().default(() => new Date()),
  });

  // Handle form submission
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data
      await userSchema.validate(formData, { abortEarly: false });
      alert("Validation successful!");
    } catch (err) {
      console.log("Validation errors:", err.inner);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="number"
          name="numb"
          value={formData.numb}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicWebsite">
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms2;
