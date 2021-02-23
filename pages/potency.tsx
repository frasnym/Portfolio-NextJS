import React from 'react';

import Layout from '../components/layout/Layout';
import NavBack from '../components/nav-back/NavBack';
import Card from '../components/ui/card/Card';

export default function potency() {
	const potency = [
		{
			title: 'Backend',
			items: [
				'JavaScipt/TypeScript',
				'NodeJS (Express, Koa)',
				'PHP (Codeigniter 3, Lumen)',
			],
		},
		{
			title: 'Frontend Web',
			items: [
				'HTML',
				'CSS (TailwindCSS, Bootstrap)',
				'JavaScipt/TypeScript (ReactJS, NextJS)',
				'PHP (Codeigniter 3)',
			],
		},
		{
			title: 'Frontend Mobile',
			items: ['Flutter - Dart'],
		},
		{
			title: 'Database',
			items: ['MongoDB', 'PostgreSQL', 'MySQL'],
		},
		{
			title: 'Other',
			items: [
				'MVC architecture',
				'Source control (Git)',
				'Firebase',
				'Docker',
				'Testing',
			],
		},
	];
	return (
		<Layout title="Potency">
			<article className="text-white bg-gray-900 bg-opacity-90 p-5 rounded-3xl">
				<NavBack />
				<article>
					<header>
						<h1 className="text-3xl font-bold">
							My potency - FrasNym
						</h1>
						<hr className="my-3" />
					</header>
					<div className="flex flex-wrap">
						{potency.map((pot) => (
							<div className="p-2 sm:w-full md:w-1/2 lg:w-1/3">
								<Card key={pot.title} header={pot.title}>
									<ul className="text-xl mb-3 pl-8">
										{pot.items.map((item) => (
											<li
												key={item}
												className="list-disc"
											>
												{item}
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
