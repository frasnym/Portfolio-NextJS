import React from 'react';

type Props = {
	header: string;
	footer?: any;
	children: any;
	className?: string;
};

export default function Card(props: Props) {
	let cardHeader: any;
	if (props.header) {
		cardHeader = (
			<div className="px-4 py-2 mb-0 bg-opacity-30 font-bold text-3xl border-b-2">
				{props.header}
			</div>
		);
	}

	let cardFooter: any;
	if (props.footer) {
		cardFooter = <div className="border-t-2">{props.footer}</div>;
	}

	return (
		<div
			className={`relative flex flex-col min-w-0 break-words bg-clip-border border border-solid rounded-md border-opacity-25 pt-4 px-1 ${props.className}`}
		>
			{cardHeader}
			<div className="flex-grow flex-shrink p-4">{props.children}</div>
			{cardFooter}
		</div>
	);
}
