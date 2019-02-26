import React from 'react';

import Layout from '../components/layout';
import Icon from '../components/svg/icon';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome</h1>
    <p>Website under construction! I wouldn&#39;t ship this..</p>
    <div
      style={{
        maxWidth: `300px`,
        margin: `0 auto 1.45rem auto`,
      }}
    >
      <Icon />
    </div>
    <hr />
  </Layout>
);

export default IndexPage;
