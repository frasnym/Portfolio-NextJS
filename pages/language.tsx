import React from 'react';

import Layout from '../components/layout/Layout';
import NavBack from '../components/nav-back/NavBack';
import Card from '../components/ui/card/Card';

export default function education() {
	return (
		<Layout title="Language">
			<article className="text-white bg-gray-900 bg-opacity-90 p-5 rounded-3xl">
				<NavBack />
				<article>
					<header>
						<h1 className="text-3xl font-bold">
							Language Skill - FrasNym
						</h1>
						<hr className="my-5" />
					</header>
					<div className="flex flex-wrap">
						<div className="p-2 w-full">
							<Card header="Language Skill">
								<ul className="text-xl mb-3 pl-8">
									<li className="list-disc">
										Indonesia (Bahasa) - native speaker
									</li>
									<li className="list-disc">
										English - basic communication skill
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
