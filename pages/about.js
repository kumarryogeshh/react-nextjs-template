import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <div>
      <Layout active="about" title="About Page">
        <p className="lead">About Page</p>
        <hr className="my-4" />
      </Layout>
    </div>
  );
};

export default About;
