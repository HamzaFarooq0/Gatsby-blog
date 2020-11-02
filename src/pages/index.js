import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head'

const HomePage = () => {
	return (
		<Layout>
			<Head title="Home"/>
			<h2>Hello, This is My Blog!</h2>
			<p>Welcome to my Blog, here you'll learn all about future updates and other stuff.</p>
			<p>Need a Developer? <Link to="/contact">Contact me.</Link></p>
		</Layout>
	);
};

export default HomePage;
