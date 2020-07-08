import React from 'react';
import { useForm } from 'react-hook-form';

const Auth = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1>Auth</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input ref={register} type="email" name="email" />
        <input ref={register} type="password" name="password" />
        <input type="submit" name="button" value="Submit" />
      </form>
    </section>
  );
};
export default Auth;
