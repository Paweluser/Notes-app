import { NoteListProps } from '@/types/NotesTypes';

export function NoteList({ folderId, notes }: NoteListProps) {
	const filteredNotes = notes.filter((n) => n.folderId === folderId);

	if (filteredNotes.length === 0) {
		return <p className="text-[var(--third-color)] mt-2">No notes yet...</p>;
	}

	return (
		<ul className="flex flex-col gap-2 mt-3">
			{filteredNotes.map((note) => (
				<li
					key={note.id}
					className="p-3 bg-[var(--second-color)]/10 rounded-lg text-[var(--third-color)]">
					<h3 className="font-semibold text-lg">{note.title}</h3>
					<p className="text-sm opacity-80">{note.content}</p>
				</li>
			))}
		</ul>
	);
}
