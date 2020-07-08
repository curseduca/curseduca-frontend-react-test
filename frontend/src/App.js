import React from 'react';
import Auth from './Container/Auth/Auth';
import Layout from './Container/Layout/Layout';

function App() {
  return (
    <Layout>
      <div>
        <Auth />
      </div>
    </Layout>
  );
}

export default App;
