'use client';
import { useState } from 'react';

export default function Menu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleToggleMenu() {
		setIsOpen((prev) => !prev);
	}

	return (
		<button
			className="flex flex-col justify-center gap-2 px-4 py-2 cursor-pointer"
			type="button"
			onClick={handleToggleMenu}
			data-open={isOpen}>
			<span className="block h-[2px] w-[25px] bg-[var(--second-color)] rounded-full"></span>
			<span className="block h-[2px] w-[20px] bg-[var(--second-color)] rounded-full"></span>
			<span className="block h-[2px] w-[15px] bg-[var(--second-color)] rounded-full"></span>
		</button>
	);
}
