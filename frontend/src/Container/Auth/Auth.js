import React, { useState, useEffect } from 'react';

import * as S from './styles';
import Login from './login/login';
import Status from '../../components/UI/status/status';

import useRequest from '../../hooks/request';
import axios from '../../helpers/axios';

const Auth = () => {
  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options, axios);
  const { data, loading, error } = requestData;

  const optionsHandler = (opt) => setOptions(opt);

  return (
    <section>
      <Login setOptions={optionsHandler} />
      <Status loading={loading} error={error} />
    </section>
  );
};
export default Auth;
