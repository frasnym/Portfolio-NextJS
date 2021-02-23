import React from 'react';

import Layout from '../components/layout/Layout';
import NavBack from '../components/nav-back/NavBack';
import Emoji from '../components/ui/emoji/Emoji';

export default function about() {
	return (
		<Layout title="About">
			<article className="text-white bg-gray-900 bg-opacity-90 p-5 rounded-3xl">
				<NavBack />
				<header>
					<h1 className="text-3xl font-bold">About Me - FrasNym</h1>
					<hr className="my-5" />
				</header>
				<p className="text-xl mb-3">
					My full name is Nyoman Frastyawan <Emoji symbol="👋" />. I'm
					from Indonesia{' '}
					<img
						className="w-5 inline"
						src="images/flag-indonesia_1f1ee-1f1e9.png"
						alt="Flag of Indonesia Country"
					/>
					. Currently I'm live in Denpasar, Bali a beautiful place to
					travel I would say <Emoji symbol="🏖" />.
				</p>
				<p className="text-xl mb-3">
					I've been working in programming for more than{' '}
					<strong>3 years</strong> now <Emoji symbol="🎉" />. I have
					started my career as Fullstack PHP Developer and changing
					stack on the way.
					<br className="mb-2" />
					Now I work with JavaScipt everyday, Backend with NodeJS
					{' & '}Frontend with NextJS.
				</p>
				<p className="text-xl mb-3">
					On daily basis, I work remotely as Back-End Developer right
					now <Emoji symbol="👨‍💻" />. I work on a company that engaged
					in natural resources in Jakarta, Indonesia.
				</p>
				<p className="text-xl mb-3">
					Besides of my daily work, usually I use my time with this
					kind of activity:
				</p>
				<ul className="text-xl mb-3 pl-8">
					<li className="list-disc">
						Learn new thing(s) about programming technology 🤓
					</li>
					<li className="list-disc">
						Building new project (web or mobile) that helped me do
						my daily things
					</li>
					<li className="list-disc">
						Writing tech article on blog 📝
					</li>
					<li className="list-disc">
						Traveling with my family <Emoji symbol="👪" />
					</li>
					<li className="list-disc">
						A bit of jogging exercise outside to improve my stamina{' '}
						<Emoji symbol="🏃" />
					</li>
					<li className="list-disc">
						And more... that I can't remember right now{' '}
						<Emoji symbol="🤭" />
					</li>
				</ul>
				<p className="text-xl mb-3">
					Maybe that's all I can say. Lastly, I'm always open to new
					connection, so please add me in my social media{' '}
					<Emoji symbol="😊" />.
				</p>
			</article>
		</Layout>
	);
}
