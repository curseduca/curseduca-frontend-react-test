import React from 'react';
import Loading from './loading';
import ErrorMessage from './errorMessage';

const Status = ({ loading, error }) => {
  const loadingComponent = loading && <Loading />;
  const errorComponent = error && <ErrorMessage data={error} />;

  return (
    <>
      {loadingComponent}
      {errorComponent}
    </>
  );
};

export default Status;
