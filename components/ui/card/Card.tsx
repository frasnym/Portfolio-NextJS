import React from 'react';

type Props = {
	header?: string;
	subtitle?: string;
	footer?: any;
	children: any;
	className?: string;
};

export default function Card(props: Props) {
	let cardSubtitle: any;
	if (props.subtitle) {
		cardSubtitle = (
			<h6 className="font-normal text-xl text-gray-400">
				{props.subtitle}
			</h6>
		);
	}

	let cardHeader: any;
	if (props.header) {
		cardHeader = (
			<div className="px-4 py-2 mb-0 bg-opacity-30 font-bold text-3xl border-b-2">
				<h5>{props.header}</h5>
				{cardSubtitle}
			</div>
		);
	}

	let cardFooter: any;
	if (props.footer) {
		cardFooter = <div className="border-t-2">{props.footer}</div>;
	}

	return (
		<div
			className={`relative flex flex-col min-w-0 break-words bg-clip-border border border-solid rounded-md border-opacity-25 ${props.className}`}
		>
			{cardHeader}
			<div className="flex-grow flex-shrink p-4">{props.children}</div>
			{cardFooter}
		</div>
	);
}
