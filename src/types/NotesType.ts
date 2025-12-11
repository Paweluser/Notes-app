import type { FolderTypes, FolderProps } from './FolderTypes';

export type NoteTypes = {
  id: string;
  folderId: FolderTypes['id'];
  title: string;
  content: string;
};

export type OnAddNote = (
  folderId: FolderTypes['id'],
  title: string,
  content: string
) => void;

export type OnDeleteNote = (noteId: NoteTypes['id']) => void;

export type OnUpdateNote = (
  noteId: NoteTypes['id'],
  patch: Partial<Pick<NoteTypes, 'title' | 'content'>>
) => void;

export type FolderListProps = Omit<FolderProps, 'folder' | 'isOpen'> & {
  folders: FolderTypes[];
  openFolderId: FolderTypes['id'] | null;
  notes: NoteTypes[];
  onDeleteNote: OnDeleteNote;
  onUpdateNote?: OnUpdateNote;
};

export type NoteEditorProps = {
  folderId: FolderTypes['id'];
  onAdd?: OnAddNote;
};

export type NoteListProps = {
  folderId: FolderTypes['id'];
  notes: NoteTypes[];
  onDeleteNote: OnDeleteNote;
  onUpdateNote?: OnUpdateNote;
};

export type NoteEditorDrawerProps = {
  open: boolean;
  folderId: FolderTypes['id'] | null;
  onClose: () => void;
  onAdd?: OnAddNote;
  mode?: 'create' | 'edit';
  noteId?: NoteTypes['id'];
  initialTitle?: NoteTypes['title'];
  initialContent?: NoteTypes['content'];
  onUpdate?: OnUpdateNote;
  submitLabel?: string;
  showHeader?: boolean;
};

export type OnEditNote = (noteId: NoteTypes['id']) => void;

export type OnRenameNoteConfirm = (
  noteId: NoteTypes['id'],
  patch: Partial<Pick<NoteTypes, 'title' | 'content'>>
) => void;