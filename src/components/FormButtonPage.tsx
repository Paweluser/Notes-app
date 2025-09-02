import { NextLinkProps } from '@/types/LinkTypes';
import Link from 'next/link';
import React from 'react';

const FormButtonPage = ({ href, children }: NextLinkProps) => {
	return (
		<Link
			href={href}
			className="border px-3 py-1 rounded-sm hover:text-[var(--main-color)] hover:bg-[var(--second-color)] transition-colors">
			{children}
		</Link>
	);
};

export default FormButtonPage;
