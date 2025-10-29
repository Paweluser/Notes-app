import type { NoteListProps } from '@/types/FolderTypes';

export function NoteList({ folderId, notes, onDelete }: NoteListProps) {
	const list = notes.filter((n) => n.folderId === folderId);

	if (list.length === 0) {
		return (
			<p className="text-[var(--third-color)] italic px-3 pb-3">
				No notes yet…
			</p>
		);
	}

	return (
		<ul className="flex flex-col gap-2 mt-2 px-3 pb-3">
			{list.map((n) => (
				<li
					key={n.id}
					className="p-3 bg-white/10 rounded-lg text-[var(--third-color)]">
					<h3 className="font-semibold">{n.title}</h3>
					<p className="opacity-80 text-sm whitespace-pre-wrap">{n.content}</p>
					<button
						className="mt-2 text-sm opacity-70 hover:opacity-100"
						onClick={() => onDelete(n.id)}>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
}
