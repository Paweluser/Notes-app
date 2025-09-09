'use client';
import { useState } from 'react';

export default function Menu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleToggleMenu() {
		setIsOpen((prev) => !prev);
	}

	return (
		<button
			className="flex flex-col justify-center items-end gap-2 px-4 py-2 cursor-pointer md:px-5 md:py-3 md:gap-3"
			type="button"
			onClick={handleToggleMenu}
			data-open={isOpen}>
			<span className="block h-[2px] w-[25px] md:w-[35px] bg-[var(--second-color)] rounded-full"></span>
			<span className="block h-[2px] w-[20px] md:w-[30px] bg-[var(--second-color)] rounded-full"></span>
			<span className="block h-[2px] w-[15px] md:w-[25px] bg-[var(--second-color)] rounded-full"></span>
		</button>
	);
}
