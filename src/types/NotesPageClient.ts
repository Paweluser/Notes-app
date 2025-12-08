import { FolderTypes, NoteTypes } from "./FolderTypes";

export type NotesPageClientProps = {
    initialFolders: FolderTypes[];
    initialNotes: NoteTypes[];
};