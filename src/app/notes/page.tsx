'use client';

import AddButton from '@/components/AddButton';
import { FolderList } from '@/components/FolderList';
import MenuButton from '@/components/MenuButton';
import SearchBar from '@/components/SearchBar';
import { FolderTypes } from '@/types/FolderTypes';
import { useState } from 'react';

export default function NotesPage() {
	const [folders, setFolders] = useState<FolderTypes[]>([
		{ id: 1, name: 'Folder 1' },
	]);

	function handleAddClick() {
		setFolders((prev) => [
			{ id: prev.length + 1, name: `Folder ${prev.length + 1}` },
			...prev,
		]);
	}

	return (
		<div className="flex flex-col h-full p-4">
			<nav className="flex justify-between px-2 mb-3 xl:justify-around mt-3 lg:mt-5 xl:mt-14">
				<h2 className="text-center bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent text-4xl md:text-5xl">
					Notes
				</h2>
				<MenuButton />
			</nav>
			<SearchBar />
			<div className="relative flex flex-col gap-2 w-full h-2/3 mt-3 xl:w-2/3 xl:mx-auto xl:mt-6 bg-[var(--second-color)]/20 backdrop-blur rounded-2xl shadow-2xl">
				<AddButton onAdd={handleAddClick} />
				<div className="mt-12">
					<FolderList folders={folders} />
				</div>
			</div>
		</div>
	);
}
