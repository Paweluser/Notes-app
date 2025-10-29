import { useState } from 'react';
import type { NoteEditorProps } from '@/types/FolderTypes';

export function NoteEditor({ folderId, onAdd }: NoteEditorProps) {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	function submit(e: React.FormEvent) {
		e.preventDefault();
		onAdd(folderId, title, content);
		setTitle('');
		setContent('');
	}

	return (
		<form onSubmit={submit} className="mt-3 flex flex-col gap-2 p-3">
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
				className="p-2 bg-transparent border-b border-[var(--third-color)] text-[var(--third-color)] outline-none"
			/>
			<button type="submit" className="button-base button-add w-fit">
				Add note
			</button>
		</form>
	);
}
