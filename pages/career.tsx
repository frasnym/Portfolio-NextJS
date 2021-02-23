import React from 'react';

import Layout from '../components/layout/Layout';
import NavBack from '../components/nav-back/NavBack';
import Card from '../components/ui/card/Card';

export default function career() {
	const nowDate = new Date();
	const careers = [
		{
			title: 'Backend Developer',
			company: 'Nityo Infotech',
			start: new Date(2021, 0, 1),
			end: nowDate,
			descriptions: [
				'Remote working on Sinarmas Mining Project',
				'Stack: JavaScript, NodeJS, KoaJS, MySQL, Firebase',
			],
		},
		{
			title: 'Fullstack Developer',
			company: 'Freelance',
			start: new Date(2020, 2, 1),
			end: nowDate,
			descriptions: [
				'I work on several different projects',
				'Some are Back-End Developers, some are Full-Stack Developers',
				'The stack that I use is also very varied',
				'Mostly is JavaScript: NodeJS with NextJS',
			],
		},
		{
			title: 'Fullstack Developer',
			company: 'PT. Eklanku Indonesia Cemerlang',
			start: new Date(2017, 9, 1),
			end: new Date(2020, 11, 1),
			descriptions: [
				'Developing, deploying, maintaining company profile, customer area and admin panel site',
				'Supporting Finance and Travel mobile apps by providing API',
				'Designing database structure using SQL database: PostgreSQL, MySQL',
				'Integrating payment service using Payment Gateway: Xendit, DOKU, Faspay, Asiapay',
				'Stack: Codeigniter 3, HTML CSS, Bootstrap, jQuery, Firebase',
			],
		},
		{
			title: 'Finance Administrator',
			company: 'PT. Surya Madistrindo',
			start: new Date(2016, 9, 1),
			end: new Date(2017, 0, 1),
			descriptions: [
				'Record and make financial reports. Daily, weekly, monthly and yearly',
				'Responsible for daily cash for sales position',
				'Responsible for the payment of the division requirements',
			],
		},
	];

	const convertDate = (date: Date) => {
		if (date === nowDate) {
			return 'Present';
		}

		return `${date.toLocaleString('default', {
			month: 'long',
		})} ${date.getFullYear()}`;
	};

	return (
		<Layout title="Career">
			<article className="text-white bg-gray-900 bg-opacity-90 p-5 rounded-3xl">
				<NavBack />
				<article>
					<header>
						<h1 className="text-3xl font-bold">
							Working Experience - FrasNym
						</h1>
						<hr className="my-5" />
					</header>
					<div className="flex flex-wrap">
						{careers.map((carr) => (
							<div key={carr.company} className="p-2 w-full">
								<Card
									header={`${carr.title} at ${carr.company}`}
									subtitle={`${convertDate(
										carr.start
									)} - ${convertDate(carr.end)}`}
								>
									<ul className="text-xl mb-3 pl-8">
										{carr.descriptions.map((item) => (
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
