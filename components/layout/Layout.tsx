import React, { ReactNode } from 'react';
import Head from 'next/head';
import { GA_TRACKING_ID } from '../../libs/gtag';

type Props = {
	children?: ReactNode;
	title?: string;
};

let gtag: ReactNode;
if (process.env.NODE_ENV === 'production') {
	gtag = (
		<>
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${GA_TRACKING_ID}', {
						page_path: window.location.pathname,
					});
			`,
				}}
			/>
		</>
	);
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
	<main className="bg-main-bg bg-cover bg-no-repeat bg-fixed bg-center h-full min-h-screen">
		<Head>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			{gtag}
			<title>{title} | FrasNym</title>
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<meta
				name="description"
				content={`My name is Nyoman Frastyawan 👋. I'm from Indonesia. I've been working in programming for more than 3 years now 🎉. I work with JavaScipt everyday, Backend with NodeJS & Frontend with NextJS.`}
			/>
			<meta
				name="keywords"
				content="nyoman frastyawan, frasnym, frasnym portfolio, frasnym developer, frasnym freelance"
			/>
			{/* Open Graph */}
			<meta
				property="og:title"
				content="Nyoman Frastyawan (FrasNym) - Programmer, Developer, Software Engineer"
			/>
			<meta property="og:locale" content="en_ID" />
			<meta property="og:locale:alternate" content="en_ID" />
			<meta property="og:type" content="website" />
			<meta
				property="og:description"
				content={`My name is Nyoman Frastyawan 👋. I work with JavaScipt everyday, Backend with NodeJS & Frontend with NextJS.`}
			/>
			<meta property="og:url" content="https://frasnym.tech/" />
			<meta
				property="og:image"
				content="https://frasnym.tech/images/avatar.jpg"
			/>
			{/* Twitter Open Graph */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@frasnym" />
			<meta name="twitter:creator" content="@frasnym" />
			<meta property="og:url" content="https://frasnym.tech/" />
			<meta
				property="og:title"
				content="Nyoman Frastyawan (FrasNym) - Programmer, Developer, Software Engineer"
			/>
			<meta
				property="og:description"
				content={`My name is Nyoman Frastyawan 👋. I work with JavaScipt everyday, Backend with NodeJS & Frontend with NextJS.`}
			/>
			<meta
				property="og:image"
				content="https://frasnym.tech/images/avatar.jpg"
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
