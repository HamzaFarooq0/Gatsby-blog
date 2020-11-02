import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About"/>
			<h2>About Page</h2>
			<p>This is About page section.</p>
			<p>
				Do you want any service? I can for sure hepl you <Link to="/contact">Leave a message for me.</Link>
			</p>
		</Layout>
	);
};

export default AboutPage;
