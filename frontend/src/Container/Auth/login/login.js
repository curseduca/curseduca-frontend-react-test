import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const Login = ({ setOptions }) => {
  const { control, handleSubmit, errors } = useForm();

  const submitHandler = (data) => {
    const req = {
      method: 'POST',
      url: 'auth/login',
      data
    };
    setOptions(req);
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Controller
          as={Form.Control}
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: /^\S+@\S+$/i }}
        />

        {errors.email?.type === 'required' && <Form.Text>Insira um email</Form.Text>}
        {errors.email?.type === 'pattern' && <Form.Text>Email inválido</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Controller
          as={Form.Control}
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
        />
        {errors.password?.type === 'required' && <Form.Text>Insira uma senha</Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default Login;
