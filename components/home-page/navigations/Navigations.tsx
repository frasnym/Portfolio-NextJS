import Link from 'next/link';
import React from 'react';

export default function Navigations() {
	const navs = [
		{ url: '/about', text: 'About Me' },
		{
			url: '/potency',
			text: 'Potency',
		},
		{
			url: '/career',
			text: 'Career',
		},
		{
			url: '/portfolio',
			text: 'Portfolio',
		},
		{
			url: '/education',
			text: 'Education',
		},
		{
			url: '/language',
			text: 'Language Skill',
		},
	];
	return (
		<nav className="mt-5">
			{navs.map((nav) => {
				return (
					<Link key={nav.url} href={nav.url}>
						<a className="mr-3 mt-3 inline-block font-normal text-center whitespace-nowrap align-middle border-solid border px-3 py-2 text-2xl rounded-lg border-gray-500 text-gray-100 transition-colors bg-gray-800 bg-opacity-30 hover:bg-gray-800">
							{nav.text}
						</a>
					</Link>
				);
			})}
		</nav>
	);
}
