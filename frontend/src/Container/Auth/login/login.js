import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons';

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
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faAt} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Controller
            as={Form.Control}
            name="email"
            type="email"
            control={control}
            defaultValue=""
            placeholder="Email"
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
          />
        </InputGroup>

        {errors.email?.type === 'required' && <Form.Text>Insira um email</Form.Text>}
        {errors.email?.type === 'pattern' && <Form.Text>Email inválido</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faKey} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Controller
            as={Form.Control}
            name="password"
            type="password"
            control={control}
            defaultValue=""
            placeholder="Password"
            rules={{ required: true }}
          />
        </InputGroup>
        {errors.password?.type === 'required' && <Form.Text>Insira uma senha</Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default Login;
