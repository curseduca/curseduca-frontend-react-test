import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from '../styles';
import { Title, ErrorMessage } from '../../../generalStyles';

const Login = ({ setOptions }) => {
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (data) => {
    const req = {
      method: 'POST',
      url: 'auth/login',
      data
    };
    setOptions(req);
  };

  return (
    <S.FormWrapper>
      <Title>Área de Login</Title>
      <S.Form onSubmit={handleSubmit(submitHandler)}>
        <S.InputWrapper icon="\f1fa">
          <S.Input
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            name="email"
            placeholder="email"
          />
        </S.InputWrapper>
        {errors.email?.type === 'required' && <ErrorMessage>Insira um email</ErrorMessage>}
        {errors.email?.type === 'pattern' && <ErrorMessage>Formato de email inválido</ErrorMessage>}
        <S.InputWrapper icon="\f084">
          <S.Input
            ref={register({ required: true })}
            type="password"
            name="password"
            placeholder="senha"
          />
        </S.InputWrapper>
        {errors.password?.type === 'required' && <ErrorMessage>Insira uma senha</ErrorMessage>}
        <S.Input type="submit" name="button" value="Login" />
        <S.Input type="submit" name="button" value="Esqueci a senha" />
      </S.Form>
    </S.FormWrapper>
  );
};
export default Login;
