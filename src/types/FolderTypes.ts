export type FolderTypes = { id: string; name: string };

export type OnDeleteFolder = (id: string) => void;

export type OnStartRename = (
	id: FolderTypes['id'],
	currentName: FolderTypes['name']
) => void;

export type OnRenameConfirm = (id: FolderTypes['id']) => void;

export type FolderProps = {
	folder: FolderTypes;
	onDelete: OnDeleteFolder;
	onStartRename: OnStartRename;
	onRenameConfirm: OnRenameConfirm;
	editingId: FolderTypes['id'] | null;
	editedName: FolderTypes['name'];
	setEditedName: (name: FolderTypes['name']) => void;
};

export type FolderListProps = Omit<FolderProps, 'folder'> & {
	folders: FolderTypes[];
};
