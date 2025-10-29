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

export type OnAddNote = (folderId: FolderTypes['id'], title: string, content: string) => void;

export type OnDeleteNote = (noteId: NoteTypes['id']) => void;

export type OnUpdateNote = (noteId: NoteTypes['id'], patch: Partial<Pick<NoteTypes,'title'|'content'>>) => void;

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

export type FolderListProps = Omit<FolderProps, 'folder' | 'isOpen'> & {
  folders: FolderTypes[];
  openFolderId: FolderTypes['id'] | null;
};

export type NoteEditorProps = {
  folderId: FolderTypes['id'];
  onAdd: OnAddNote;
};

export type NoteTypes = {
  id: string;
  folderId: FolderTypes['id'];
  title: string;
  content: string;
};

export type NoteListProps = {
  folderId: FolderTypes['id'];
  notes: NoteTypes[];
  onDelete: OnDeleteNote;
};