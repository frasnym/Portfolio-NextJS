import React from 'react';

import Layout from '../components/layout/Layout';
import NavBack from '../components/nav-back/NavBack';
import Card from '../components/ui/card/Card';

export default function education() {
	return (
		<Layout title="Education">
			<article className="text-white bg-gray-900 bg-opacity-90 p-5 rounded-3xl">
				<NavBack />
				<article>
					<header>
						<h1 className="text-3xl font-bold">
							Education History - FrasNym
						</h1>
						<hr className="my-5" />
					</header>
					<div className="flex flex-wrap">
						<div className="p-2 w-full">
							<Card
								header="Institute Of Business And Informatics Stikom Surabaya"
								subtitle="Years Period: 2011 - 2016"
							>
								<p className="text-xl mb-3">
									Bachelor degree Information Systems
									Department with GPA <strong>3.57</strong>
								</p>
								<ul className="text-xl mb-3 pl-8">
									<li className="list-disc">
										Studied about software programming
									</li>
									<li className="list-disc">
										Developing interest on world of
										technology
									</li>
									<li className="list-disc">
										Creating "job fair" website as thesis
									</li>
									<li className="list-disc">
										Stack: HTML, PHP, JavaScript, CSS, MySQL
									</li>
								</ul>
							</Card>
						</div>
					</div>
				</article>
			</article>
		</Layout>
	);
}
