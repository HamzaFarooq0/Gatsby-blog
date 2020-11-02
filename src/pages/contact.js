import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head'

const ContactPage = () => {
	return (
		<Layout>
			<Head title="Contact"/>
			<h2>Contact Page</h2>
			<p>This is contact page section.</p>
			<p>
				Here is my <Link to="https://github.com/HamzaFarooq0/" target="_blank">Github Profile</Link>
			</p>
		</Layout>
	);
};

export default ContactPage;
