import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.any,
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`;

export default BlogPost;
