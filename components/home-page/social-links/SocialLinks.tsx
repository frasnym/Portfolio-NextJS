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
		// 		box-sizing border-box
		// color rgb(255, 255, 255)
		// cursor pointer
		// display inline
		// font-family "Sulphur Point", sans-serif
		// font-size 28px
		// font-weight 300
		// height 24px
		// line-height 43.4px
		// margin-right 25px
		// text-decoration-color rgb(255, 255, 255)
		// text-decoration-line underline
		// text-decoration-style solid
		// text-decoration-thickness auto
		// text-size-adjust 100%
		// width 24px
		// -webkit-font-smoothing antialiased
		// -webkit-tap-highlight-color rgba(0, 0, 0, 0)
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
