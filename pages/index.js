import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";

const Index = () => {
  return (
    <div>
      <Layout active="home" title="Home Page">
        <Main />
      </Layout>
    </div>
  );
};

export default Index;
