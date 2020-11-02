import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import blogStyles from './blog.module.css';
import Head from '../components/head'

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Blog"/>
			<h1>Blog</h1>
			<ol className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map((edge, index) => {
					return (
						<li className={blogStyles.post} key={index}>
							<Link to={`/blog/${edge.node.slug}`}>
								<h2>{edge.node.title}</h2>
								<p>{edge.node.publishedDate}</p>
							</Link>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogPage;