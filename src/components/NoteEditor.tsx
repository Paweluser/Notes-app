'use client';
import { useState } from 'react';
import type { NoteEditorDrawerProps } from '@/types/FolderTypes';

export default function NoteEditor({
	open,
	folderId,
	onClose,
	onAdd,
}: NoteEditorDrawerProps) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	function submit(e: React.FormEvent) {
		e.preventDefault();
		if (!open || !folderId) return;
		if (!title.trim() || !content.trim()) return;
		onAdd(folderId, title, content);
		setTitle('');
		setContent('');
		onClose();
	}

	return (
		<div
			className={`absolute inset-0 z-50 transition-opacity duration-200
                  ${
										open
											? 'opacity-100 pointer-events-auto'
											: 'opacity-0 pointer-events-none'
									}`}
			aria-hidden={!open}>
			<div className="absolute inset-0 w-full h-full bg-[var(--main-color)] rounded-2xl">
				<form onSubmit={submit} className="h-full p-4 flex flex-col gap-3">
					<div className="flex items-center justify-between">
						<h3 className="text-2xl text-[var(--third-color)]">New note</h3>
					</div>

					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Note title"
						className="p-2 bg-transparent border-b border-[var(--third-color)] text-[var(--third-color)] outline-none"
					/>

					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder="Note content"
						className="p-2 bg-transparent border-b border-[var(--third-color)] text-[var(--third-color)] outline-none resize-none grow"
					/>

					<div className="flex gap-2 pt-2">
						<button type="submit" className="button-base button-add">
							Add note
						</button>
						<button
							type="button"
							onClick={onClose}
							className="button-base button-cancel">
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
