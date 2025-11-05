'use client';
import { FileText, X } from 'lucide-react';
import { useState } from 'react';
import NoteEditor from '@/components/NoteEditor';
import type { NoteListProps } from '@/types/FolderTypes';

export function NoteList({
	folderId,
	notes,
	onDeleteNote,
	onUpdateNote,
}: NoteListProps) {
	const [editingId, setEditingId] = useState<string | null>(null);
	const [editedTitle, setEditedTitle] = useState('');
	const [editedContent, setEditedContent] = useState('');

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
							className="p-3 mx-5 rounded-xl transition-colors duration-300 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<FileText className="w-6 h-6 text-[var(--third-color)]" />
									<div>
										<h3 className="font-semibold text-[var(--third-color)]">
											{note.title}
										</h3>
									</div>
								</div>

								<div className="flex gap-3 ml-4">
									<button
										onClick={() => onDeleteNote(note.id)}
										className="cursor-pointer hover:scale-110 transition-transform">
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
