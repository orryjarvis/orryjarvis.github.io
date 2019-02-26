import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hello!</h1>
    <p>
      I&#39;m a software engineering and computer science graduate from
      Rose-Hulman interested in continued learning! Currently I am deeply
      interested in all things cloud architecture, devops, modern web
      development (especially React), and developer experience. I am also fond
      of discrete math, formal logic, statics, analytics, and machine learning—
      having dabbled with the fields a decent amount in undergrad and intership
      positions. I am working to learn more about i18n, a11y, and general UX as
      software needs to become available to more people!
    </p>
    <p>
      I have a wife, no kids, and a dog named Apollo! Follow me on social media
      to stay in touch and maybe see the occasional dog photo.
    </p>
    <hr />
  </Layout>
);

export default About;
