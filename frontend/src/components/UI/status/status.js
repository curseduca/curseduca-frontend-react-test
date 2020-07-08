/* eslint-disable camelcase */
import React from 'react';
import Loading from '../loadBar/loadBar';

const Status = ({ loading, error }) => {
  const loadingComponent = loading && (
    <Loading />
  );

  const errorComponent = error && (
    <div type="danger">
      <p>Algo não está certo.</p>
      <br />
      <p>{error?.error_message}</p>
    </div>
  );

  return (
    <>
      {loadingComponent}
      {errorComponent}
    </>
  );
};

export default Status;
