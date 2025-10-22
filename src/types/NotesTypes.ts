import { FolderTypes } from "./FolderTypes";

export type NoteTypes = {
	id: string;
	folderId: FolderTypes['id'];
	title: string;
	content: string;
};