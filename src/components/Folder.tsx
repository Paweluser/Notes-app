import type { FolderTypes, OnDeleteFolder } from '@/types/FolderTypes';

export function Folder({
	folder,
	onDelete,
}: {
	folder: FolderTypes;
	onDelete: OnDeleteFolder;
}) {
	return (
		<div className="flex items-center gap-2 p-3 rounded-full m-3 mx-3 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer">
			<span className="text-2xl bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent md:text-3xl">
				📁
			</span>
			<p className="text-[var(--third-color)] pt-1 md:text-xl">{folder.name}</p>
			<button
				className="text-xl pt-1 text-[var(--third-color)] ml-auto cursor-pointer"
				onClick={() => onDelete(folder.id)}>
				X
			</button>
		</div>
	);
}
