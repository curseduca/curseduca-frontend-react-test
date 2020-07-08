import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles';

import useRequest from '../../hooks/request';
import axios from '../../helpers/axios';

const Auth = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options, axios);
  const { data, loading, error } = requestData;

  const submitHandler = (data) => {
    const req = {
      method: 'POST',
      url: '/users',
      data
    };

    setOptions(req);
  };

  useEffect(() => {
    console.log(data);
    console.log(loading);
    console.log(error);
  }, [data, error, loading]);

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
