import React from 'react'
import Form from "react-bootstrap/Form";

const UserLogin = () => {
  return (
    <div>
          <Form>
        <Form.Group className="mb-3" controlId="fromGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fromGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Your password" />
        </Form.Group>
        <Form.Group>
            <button className="btn btn-success mx-5">Sign in</button>
            <button className="btn btn-danger mx-5">Sign up</button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default UserLogin