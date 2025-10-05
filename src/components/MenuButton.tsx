'use client';
import { useState } from 'react';
import { LeftPanel } from './LeftPanel';

export default function MenuButton() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleToggleMenu() {
		setIsOpen((prev) => !prev);
	}

	return (
		<>
			<button
				className="flex flex-col justify-center items-end gap-2 px-4 py-2 cursor-pointer group md:px-5 md:py-3 md:gap-3"
				type="button"
				onClick={handleToggleMenu}
				data-open={isOpen}>
				<span className="block h-[2px] w-[25px] md:w-[35px] bg-[var(--second-color)] rounded-full"></span>
				<span className="block h-[2px] w-[25px] md:w-[35px] bg-[var(--second-color)] rounded-full transition-transform duration-300 scale-x-80 group-hover:scale-x-100 origin-right"></span>
				<span className="block h-[2px] w-[25px] md:w-[35px] bg-[var(--second-color)] rounded-full transition-transform duration-300 scale-x-60 group-hover:scale-x-100 origin-right"></span>
			</button>
			<LeftPanel
				avatarUrl="/Avatar.jpg"
				userName="User"
				onBack={() => setIsOpen(false)}
				onLogout={() => setIsOpen(false)}
				open={isOpen}
			/>
		</>
	);
}
