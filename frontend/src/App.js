import React from 'react';
// import Auth from './Container/Auth/Auth';
import Feed from './Container/Feed/Feed';
import Layout from './Container/Layout/Layout';

function App() {
  return (
    <Layout>
      <div>
        {/* <Auth /> */}
        <Feed />
      </div>
    </Layout>
  );
}

export default App;
