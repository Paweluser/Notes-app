'use client';
import { Pencil, X } from 'lucide-react';
import { useState } from 'react';
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

	const handleEdit = (id: string, title: string, content: string) => {
		setEditingId(id);
		setEditedTitle(title);
		setEditedContent(content);
	};

	const handleConfirm = (id: string) => {
		onUpdateNote?.(id, { title: editedTitle, content: editedContent });
		setEditingId(null);
		setEditedTitle('');
		setEditedContent('');
	};

	return (
		<div className="flex flex-col gap-3 mt-3">
			{notes
				.filter((n) => n.folderId === folderId)
				.map((note) => {
					const isEditing = editingId === note.id;
					return (
						<div
							key={note.id}
							className="bg-[var(--second-color)]/20 p-3 rounded-xl backdrop-blur-md transition-all">
							{isEditing ? (
								<div className="flex flex-col gap-2">
									<input
										value={editedTitle}
										onChange={(e) => setEditedTitle(e.target.value)}
										className="bg-transparent border-b border-[var(--third-color)] text-[var(--third-color)] outline-none"
									/>
									<textarea
										value={editedContent}
										onChange={(e) => setEditedContent(e.target.value)}
										className="bg-transparent border-b border-[var(--third-color)] text-[var(--third-color)] outline-none resize-none"
									/>
									<div className="flex gap-3 pt-2">
										<button
											onClick={() => handleConfirm(note.id)}
											className="text-[var(--third-color)] hover:text-[var(--main-color)]">
											Save
										</button>
										<button
											onClick={() => setEditingId(null)}
											className="text-[var(--third-color)] hover:text-[var(--main-color)]">
											Cancel
										</button>
									</div>
								</div>
							) : (
								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-semibold text-[var(--third-color)]">
											{note.title}
										</h3>
										<p className="text-[var(--third-color)]/80">
											{note.content}
										</p>
									</div>
									<div className="flex gap-3 ml-4">
										<button
											onClick={() =>
												handleEdit(note.id, note.title, note.content)
											}
											className="cursor-pointer hover:scale-110 transition-transform">
											<Pencil className="w-5 h-5 text-[var(--third-color)]" />
										</button>
										<button
											onClick={() => onDeleteNote(note.id)}
											className="cursor-pointer hover:scale-110 transition-transform">
											<X className="w-5 h-5 text-[var(--third-color)]" />
										</button>
									</div>
								</div>
							)}
						</div>
					);
				})}
		</div>
	);
}
