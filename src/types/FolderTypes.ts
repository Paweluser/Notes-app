export type FolderTypes = { id: string; name: string };

export type OnDeleteFolder = (id: FolderTypes['id']) => void;

export type OnStartRename = (
  id: FolderTypes['id'],
  currentName: FolderTypes['name']
) => void;

export type OnRenameConfirm = (id: FolderTypes['id']) => void;

export type OnSelectFolder = (id: FolderTypes['id']) => void;

export type OnToggleFolder = (id: FolderTypes['id']) => void;

export type OnAddNoteClick = (folderId: FolderTypes['id']) => void;

export type FolderProps = {
  folder: FolderTypes;
  onDelete: OnDeleteFolder;
  onStartRename: OnStartRename;
  onRenameConfirm: OnRenameConfirm;
  onSelect: OnSelectFolder;
  onToggle: OnToggleFolder;
  onAddNoteClick: OnAddNoteClick;
  editingId: FolderTypes['id'] | null;
  editedName: FolderTypes['name'];
  setEditedName: (name: FolderTypes['name']) => void;
  isOpen: boolean;
};
