import { FolderTypes } from '@/types/FolderTypes';
import { NoteTypes } from '@/types/NotesType';

export function applySearch(
	folders: FolderTypes[],
	notes: NoteTypes[],
	query: string
) {
	const q = query.trim().toLowerCase();
	if (!q) return { folders, notes };

	const matches = (text: string) => text.toLowerCase().includes(q);

	const foldersWithMatchingNotes = new Set<FolderTypes['id']>();

	const filteredNotes = notes.filter((note) => {
		const folder = folders.find((f) => f.id === note.folderId);
		const folderMatches = folder ? matches(folder.name) : false;
		const noteMatches = matches(note.title) || matches(note.content);

		if (noteMatches || folderMatches) {
			if (folder) foldersWithMatchingNotes.add(folder.id);
			return true;
		}
		return false;
	});

	const filteredFolders = folders.filter(
		(folder) => matches(folder.name) || foldersWithMatchingNotes.has(folder.id)
	);

	return { folders: filteredFolders, notes: filteredNotes };
}
