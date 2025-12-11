'use client';
import { FileText, X } from 'lucide-react';
import { useState } from 'react';
import NoteEditor from '@/components/NoteEditor';
import type { NoteListProps, NoteTypes } from '@/types/NotesType';

export function NoteList({
	folderId,
	notes,
	onDeleteNote,
	onUpdateNote,
}: NoteListProps) {
	const [editingId, setEditingId] = useState<NoteTypes['id'] | null>(null);
	const [editedTitle, setEditedTitle] = useState<NoteTypes['title']>('');
	const [editedContent, setEditedContent] = useState<NoteTypes['content']>('');

	const startEdit = (id: string, title: string, content: string) => {
		setEditingId(id);
		setEditedTitle(title);
		setEditedContent(content);
	};

	const closeEdit = () => {
		setEditingId(null);
		setEditedTitle('');
		setEditedContent('');
	};

	return (
		<div className="flex flex-wrap gap-3 mt-3">
			{notes
				.filter((n) => n.folderId === folderId)
				.map((note) => {
					const isEditing = editingId === note.id;

					return (
						<div
							key={note.id}
							onClick={() => startEdit(note.id, note.title, note.content)}
							className="p-3 md:mx-5 rounded-xl transition-colors duration-300 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer max-[600px]:mx-3">
							<div className="flex items-center gap-1">
								<div className="flex items-center gap-3 flex-1 min-w-0">
									<FileText className="w-6 h-6 flex-shrink-0 text-[var(--third-color)]" />
									<h3 className="font-semibold text-[var(--third-color)] break-all">
										{note.title}
									</h3>
								</div>
								<div className="flex gap-3 flex-shrink-0 ml-1">
									<button
										onClick={() => onDeleteNote(note.id)}
										className="cursor-pointer transition-transform">
										<X className="notes-icon" />
									</button>
								</div>
							</div>

							{isEditing && (
								<NoteEditor
									open={true}
									folderId={folderId}
									onClose={closeEdit}
									mode="edit"
									noteId={note.id}
									initialTitle={editedTitle}
									initialContent={editedContent}
									onUpdate={onUpdateNote}
									submitLabel="Save changes"
									showHeader={false}
								/>
							)}
						</div>
					);
				})}
		</div>
	);
}
