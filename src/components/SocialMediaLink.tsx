import { HtmlLinkProps } from '@/types/LinkTypes';
import React from 'react';

export default function SocialMediaLink({ children, href }: HtmlLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer">
			{children}
		</a>
	);
}
