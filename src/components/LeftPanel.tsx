'use client';

import Image from 'next/image';
import { LeftPanelProps } from '@/types/LeftPanelProps';

export function LeftPanel({
	userName,
	avatarUrl,
	onLogout,
	onBack,
	open,
}: LeftPanelProps) {
	return (
		<div
			className={[
				'fixed inset-0 z-50 h-full w-full bg-[var(--main-color)] text-[var(--second-color)] flex flex-col justify-center',
				'transform-gpu will-change-transform transition-transform duration-300 ease-out',
				open ? 'translate-x-0' : '-translate-x-full',
			].join(' ')}>
			<section className="flex flex-col items-center justify-center gap-4 mb-10">
				<div className="relative h-48 w-48 rounded-full overflow-hidden md:h-72 md:w-72">
					<Image
						src={avatarUrl}
						alt={userName}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 112px, 288px"
					/>
				</div>
				<h3 className="text-3xl md:text-5xl text-[var(--second-color)] mt-3">
					{userName}
				</h3>
			</section>
			<span className="block h-px w-2/3 max-w-[420px] mx-auto bg-white" />
			<section className="flex flex-col items-center justify-start gap-3 mt-6">
				<button
					type="button"
					onClick={onLogout}
					className="text-[var(--second-color)] border px-3 py-1 rounded-sm hover:text-[var(--main-color)] hover:bg-[var(--second-color)] transition-colors text-xl mt-3 md:text-2xl">
					Log out
				</button>
				<button
					type="button"
					onClick={onBack}
					className="text-[var(--second-color)] border px-3 py-1 rounded-sm hover:text-[var(--main-color)] hover:bg-[var(--second-color)] transition-colors text-xl mt-3 md:text-2xl md:mt-5">
					Back
				</button>
			</section>
		</div>
	);
}
