import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
	<main className="bg-main-bg bg-cover bg-no-repeat bg-fixed bg-center h-full min-h-screen">
		<Head>
			<title>{title} - FrasNym</title>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<link rel="shortcut icon" href="/favicon.ico" />
		</Head>
		<div className="w-full flex content-center items-center">
			<div className="m-auto shadow-lg sm:rounded-3xl p-3 mb-5 sm:py-20 sm:px-10 lg:w-4/5">
				{children}
			</div>
		</div>
	</main>
);

export default Layout;
