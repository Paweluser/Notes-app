import { FolderTypes } from "./FolderTypes";
import { NoteTypes } from "./NotesType";

export type NotesPageClientProps = {
    initialFolders: FolderTypes[];
    initialNotes: NoteTypes[];
};