import { Folder } from './Folder';
import type { FolderListProps } from '@/types/FolderTypes';

export function FolderList({
	folders,
	onDelete,
	onStartRename,
	onRenameConfirm,
	editingId,
	editedName,
	setEditedName,
}: FolderListProps) {
	return (
		<div className="w-full">
			{folders.map((f) => (
				<Folder
					key={f.id}
					folder={f}
					onDelete={onDelete}
					onStartRename={onStartRename}
					onRenameConfirm={onRenameConfirm}
					editingId={editingId}
					editedName={editedName}
					setEditedName={setEditedName}
				/>
			))}
		</div>
	);
}
