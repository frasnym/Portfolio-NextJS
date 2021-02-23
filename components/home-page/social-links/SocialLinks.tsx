import React from 'react';
import {
	FaTwitter,
	FaFacebookF,
	FaInstagram,
	FaGithub,
	FaLinkedinIn,
	FaGooglePlay,
	FaRegEnvelope,
	FaDev,
} from 'react-icons/fa';

export default function SocialLinks() {
	const anchorIcons = [
		{
			href: 'https://www.linkedin.com/in/frasnym/',
			icon: <FaLinkedinIn className="inline-block mr-6" />,
		},
		{
			href: 'https://github.com/frasnym',
			icon: <FaGithub className="inline-block mr-6" />,
		},
		{
			href: 'https://twitter.com/frasnym',
			icon: <FaTwitter className="inline-block mr-6" />,
		},
		{
			href: 'https://dev.to/frasnym/',
			icon: <FaDev className="inline-block mr-6" />,
		},
		{
			href: 'https://www.facebook.com/frasnym',
			icon: <FaFacebookF className="inline-block mr-6" />,
		},
		{
			href: 'https://www.instagram.com/frasnym',
			icon: <FaInstagram className="inline-block mr-6" />,
		},
		{
			href:
				'https://play.google.com/store/apps/developer?id=FrastyawanNym',
			icon: <FaGooglePlay className="inline-block mr-6" />,
		},
		{
			href: 'mailto:frastyawan.nym@gmail.com',
			icon: <FaRegEnvelope className="inline-block mr-6" />,
		},
	];
	return (
		<>
			{anchorIcons.map((aIcon) => {
				return (
					<a
						className="text-white text-3xl inline"
						key={aIcon.href}
						href={aIcon.href}
						target="_blank"
						rel="noreferrer"
					>
						{aIcon.icon}
					</a>
				);
			})}
		</>
	);
}
