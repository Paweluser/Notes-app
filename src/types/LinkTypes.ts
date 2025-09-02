import React from 'react';
import { UrlObject } from 'url';

type UrlLinkNextType = string | UrlObject;

export type NextLinkProps = {
	children: React.ReactNode;
	href: UrlLinkNextType;
};

export type HtmlLinkProps = {
	children: React.ReactNode;
	href: string;
} 