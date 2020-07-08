import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles';

const Auth = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <section>
      <S.FormWrapper>
        <S.Title>Área de Login</S.Title>
        <S.Form onSubmit={handleSubmit(submitHandler)}>
          <S.InputWrapper icon="\f1fa">
            <S.Input
              ref={register}
              type="email"
              name="email"
              placeholder="email"
            />
          </S.InputWrapper>
          <S.InputWrapper icon="\f084">
            <S.Input
              ref={register}
              type="password"
              name="password"
              placeholder="senha"
            />
          </S.InputWrapper>
          <S.Input type="submit" name="button" value="Login" />
          <S.Input type="submit" name="button" value="Esqueci a senha" />
        </S.Form>
      </S.FormWrapper>
    </section>
  );
};
export default Auth;
