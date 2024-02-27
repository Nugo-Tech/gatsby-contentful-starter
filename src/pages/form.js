import React from "react";
import FormEditor from "../components/Forms/FormEditor";
import Layout from "../components/Layout";

const IndexPage = ({ pageContext: { id, form } }) => {
  console.log("form", form);
  return (
    <Layout>
      View Form
      {/* Add your content here */}
    </Layout>
  );
};

export default IndexPage;
