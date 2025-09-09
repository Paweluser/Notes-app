'use client';
import { Search } from 'lucide-react';

export default function SearchEngine() {
	return (
		<div className="relative rounded-full bg-[var(--main-color)] py-4 px-2">
			<Search className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none h-6 w-6 text-[var(--dark-color)]" />
			<input
				type="search"
				placeholder="Search your notes"
				className="w-full pl-12 pr-12 py-3 placeholder:text-[var(--dark-color)] text-[var(--dark-color)] bg-[var(--second-color)] rounded-full"
			/>
		</div>
	);
}
