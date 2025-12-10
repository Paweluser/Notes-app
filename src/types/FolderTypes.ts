import { FolderListProps, NoteTypes, OnAddNote, OnDeleteNote } from "./NotesType";

export type FolderTypes = { id: string; name: string };

export type OnDeleteFolder = (id: FolderTypes['id']) => void;

export type OnAddFolder = () => void;

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

export type FolderListControllerProps = {
	openFolderId: string | null;
	onToggle: FolderListProps['onToggle'];
	onAddNoteClick: FolderListProps['onAddNoteClick'];
	notes: NoteTypes[];
	composerFor: string | null;
	onAddNote: OnAddNote;
	onDeleteNote: OnDeleteNote;
};