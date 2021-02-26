import React from 'react';

import Layout from '../components/layout/Layout';
import NavBack from '../components/nav-back/NavBack';
import Card from '../components/ui/card/Card';

export default function portfolio() {
	const portfolios = [
		{
			title: 'Website To PDF',
			image: 'https://i.ibb.co/89wByMq/image.png',
			description:
				'This site can convert website to PDF. You just have to input the site url',
			details: [
				{
					title: 'Stack',
					value: 'NextJS, TailwindCSS, Puppeteer',
					url: null,
				},
				{
					title: 'URL',
					value: 'WebToPdf',
					url: 'https://webtopdf.vercel.app/',
				},
				{
					title: 'Github',
					value: 'Repository',
					url: 'https://github.com/frasnym/WebsiteToPDF',
				},
			],
		},
		{
			title: 'Emoji List',
			image: 'https://i.ibb.co/YtLqj2k/image.png',
			description:
				"Website full of emoji. This site help me to find emoji when I write when my platform doesn't support emoji finder",
			details: [
				{
					title: 'Stack',
					value:
						'NextJS, TailwindCSS, Puppeteer, Google SpreadSheets',
					url: null,
				},
				{
					title: 'URL',
					value: 'Emojilist',
					url: 'https://emojilist.vercel.app/',
				},
				{
					title: 'Github',
					value: 'Repository',
					url: 'https://github.com/frasnym/Emoji-List---NextJS',
				},
			],
		},
		{
			title: 'Udemy Free Course',
			image: 'https://i.ibb.co/0YCvk5M/image.png',
			description:
				'Website that provide free udemy course. The difference from others similar page is: we have coupon checker, no ads',
			details: [
				{
					title: 'Stack',
					value:
						'NextJS, TailwindCSS, Puppeteer, Google SpreadSheets',
					url: null,
				},
				{
					title: 'URL',
					value: 'Udemy Free Course',
					url: 'https://udemy-free-course-site.vercel.app/',
				},
				{
					title: 'Github',
					value: 'Repository',
					url: 'https://github.com/frasnym/Udemy-Free-Course-Site',
				},
			],
		},
	];

	return (
		<Layout title="Portfolio">
			<article className="text-white bg-gray-900 bg-opacity-90 p-5 rounded-3xl">
				<NavBack />
				<article>
					<header>
						<h1 className="text-3xl font-bold">
							Projects - FrasNym
						</h1>
						<hr className="my-5" />
					</header>
					<div className="flex flex-wrap">
						{portfolios.map((porto) => (
							<div
								key={porto.title}
								className="p-2 sm:w-full md:w-1/2 lg:w-1/3"
							>
								<Card header={porto.title}>
									<img
										className="rounded-lg mb-3"
										src={porto.image}
										alt={`Image to help visualize portfolio of ${porto.title} project`}
									/>
									<p className="text-xl mb-3">
										{porto.description}
									</p>
									<ul>
										{porto.details.map((item) => (
											<li key={item.value}>
												<strong>{item.title}:</strong>{' '}
												{item.url ? (
													<a
														className="text-purple-600 underline"
														href={item.url}
														target="_blank"
														rel="noreferrer"
													>
														{item.value}
													</a>
												) : (
													item.value
												)}
											</li>
										))}
									</ul>
								</Card>
							</div>
						))}
					</div>
				</article>
			</article>
		</Layout>
	);
}
