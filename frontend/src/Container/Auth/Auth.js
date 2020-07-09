import React, { useState, useEffect } from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../store/userActions';

import Login from './login/login';
import Status from '../../components/UI/status/status';

import useRequest from '../../hooks/request';
import axios from '../../helpers/axios';

const Auth = () => {
  const [options, setOptions] = useState(null);
  const [requestData] = useRequest(options, axios);
  const { data, loading, error } = requestData;
  const dispatch = useDispatch();

  const optionsHandler = (opt) => setOptions(opt);

  useEffect(() => {
    if (data) {
      const { access_token: accessToken } = data;
      const decodedData = jwt_decode(accessToken);

      const user = {
        accessToken,
        email: decodedData.email
      };

      dispatch({ type: actionTypes.SET_USER_DATA, user });
    }
  }, [dispatch, data]);

  return (
    <>
      <Login setOptions={optionsHandler} />
      <Status loading={loading} error={error} />
    </>
  );
};
export default Auth;
