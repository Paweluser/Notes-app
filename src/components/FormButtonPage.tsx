import { NextLinkProps } from '@/types/LinkTypes';
import Link from 'next/link';
import React from 'react';

const FormButtonPage = ({ href, children }: NextLinkProps) => {
	return (
		<Link
			href={href}
			className="button-base">
			{children}
		</Link>
	);
};

export default FormButtonPage;
