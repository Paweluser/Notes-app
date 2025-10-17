import { Folder } from './Folder';
import type { FolderTypes, OnDeleteFolder } from '@/types/FolderTypes';

export function FolderList({
	folders,
	onDelete,
}: {
	folders: FolderTypes[];
	onDelete: OnDeleteFolder;
}) {
	return (
		<div className="w-full">
			{folders.map((f) => (
				<Folder key={f.id} folder={f} onDelete={onDelete} />
			))}
		</div>
	);
}
