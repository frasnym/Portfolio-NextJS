import Typed from 'react-typed';
import Navigations from '../components/home-page/navigations/Navigations';
import SocialLinks from '../components/home-page/social-links/SocialLinks';
import Layout from '../components/layout/Layout';

export default function Home() {
	const roles = [
		'Developer',
		'Tech. Content Writer',
		'TypeScript',
		'NodeJS',
		'NextJS',
		'MongoDB',
		'PostgreSQL',
	];

	return (
		<Layout title="Portfolio of FrasNym">
			<img
				className="rounded-full max-w-xs max-h-xs mb-5"
				src="/images/avatar.jpg"
				alt="Photos of FrasNym"
			/>
			<article className="text-gray-300 text-left bg-gray-900 bg-opacity-90 p-5 rounded-3xl">
				<h1 className="text-white text-6xl">Hi, I'm Fras</h1>
				<hr className="my-4" />
				<p className="text-3xl mb-3">
					A <strong>Full-Stack Developer</strong> from Indonesia{' '}
					<img
						className="w-10 inline"
						src="images/flag-indonesia_1f1ee-1f1e9.png"
						alt="Flag of Indonesia Country"
					/>
				</p>
				<p className="text-2xl mb-3">
					Welcome to my portfolio website. Get informed, collaborate
					and discover projects I was working on through the years!
				</p>
				<div>
					<Typed
						className="text-xl font-bold space-y-1"
						strings={roles}
						typeSpeed={60}
						backSpeed={60}
						backDelay={1000}
						loop
					/>
				</div>
				<section className="mt-8">
					<SocialLinks />
				</section>
			</article>
			<Navigations />
		</Layout>
	);
}
