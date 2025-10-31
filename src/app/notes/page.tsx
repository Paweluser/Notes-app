'use client';

import AddButton from '@/components/AddButton';
import { FolderList } from '@/components/FolderList';
import MenuButton from '@/components/MenuButton';
import NoteEditor from '@/components/NoteEditor';
import SearchBar from '@/components/SearchBar';
import {
	FolderTypes,
	NoteTypes,
	OnAddNote,
	OnAddNoteClick,
	OnDeleteNote,
	OnSelectFolder,
	OnToggleFolder,
} from '@/types/FolderTypes';
import { useState } from 'react';

export default function NotesPage() {
	const [folders, setFolders] = useState<FolderTypes[]>([]);
	const [notes, setNotes] = useState<NoteTypes[]>([]);
	const [openFolderId, setOpenFolderId] = useState<FolderTypes['id'] | null>(
		null
	);
	const [composerOpen, setComposerOpen] = useState(false);
	const [composerFor, setComposerFor] = useState<FolderTypes['id'] | null>(
		null
	);
	const [showInput, setShowInput] = useState<boolean>(false);
	const [newFolderName, setNewFolderName] = useState<FolderTypes['name']>('');
	const [editingId, setEditingId] = useState<FolderTypes['id'] | null>(null);
	const [editedName, setEditedName] = useState<FolderTypes['name']>('');

	const handleSelectFolder: OnSelectFolder = (id) => {
		console.log(id);
	};

	const handleToggleFolder: OnToggleFolder = (id) =>
		setOpenFolderId((prev) => (prev === id ? null : id));

	const handleAddNoteClick: OnAddNoteClick = (folderId) => {
		setComposerFor(folderId);
		setComposerOpen(true);
	};

	const handleAddNote: OnAddNote = (folderId, title, content) => {
		setNotes((prev) => [
			...prev,
			{ id: crypto.randomUUID(), folderId, title, content },
		]);
	};

	const handleDeleteNote: OnDeleteNote = (noteId) => {
		setNotes((prev) => prev.filter((n) => n.id !== noteId));
	};

	function handleAddClick() {
		setShowInput(true);
		setNewFolderName('');
	}

	function handleAddConfirm() {
		if (!newFolderName.trim()) return;
		setFolders((prev) => [
			{ id: crypto.randomUUID(), name: newFolderName },
			...prev,
		]);
		setNewFolderName('');
		setShowInput(false);
	}

	function handleDelete(id: FolderTypes['id']) {
		setFolders((prev) => prev.filter((f) => f.id !== id));
	}

	function handleRename(id: FolderTypes['id']) {
		setFolders((prev) =>
			prev.map((f) => (f.id === id ? { ...f, name: editedName || f.name } : f))
		);
		setEditingId(null);
		setEditedName('');
	}

	return (
		<div className="flex flex-col h-full p-4">
			<nav className="flex justify-between px-2 mb-3 xl:justify-around mt-3 lg:mt-5 xl:mt-14">
				<h2 className="text-gradient">Notes</h2>
				<MenuButton />
			</nav>
			<SearchBar />
			<div className="relative flex flex-col gap-2 w-full h-2/3 mt-3 xl:w-2/3 xl:mx-auto xl:mt-6 bg-[var(--second-color)]/20 backdrop-blur rounded-2xl shadow-2xl">
				{!showInput && <AddButton onAdd={handleAddClick} />}
				{showInput && (
					<div className="flex flex-wrap items-center gap-2 mt-2 mx-2 z-10 md:mx-28 md:mt-4 2xl:mx-40">
						<input
							type="text"
							value={newFolderName}
							onChange={(e) => setNewFolderName(e.target.value)}
							placeholder="Enter folder name..."
							className="flex-1 px-3 py-2 bg-white/10 text-[var(--third-color)] rounded-xl outline-none backdrop-blur-md placeholder:text-gray-300"
						/>
						<button onClick={handleAddConfirm} className="button-base">
							Add
						</button>
						<button onClick={() => setShowInput(false)} className="button-base">
							Cancel
						</button>
					</div>
				)}
				<div
					className={`overflow-y-auto ${
						showInput ? 'md:mt-1' : 'mt-10 md:mt-12'
					}`}>
					<FolderList
						folders={folders}
						openFolderId={openFolderId}
						onToggle={handleToggleFolder}
						onAddNoteClick={handleAddNoteClick}
						notes={notes}
						composerFor={composerFor}
						onAddNote={handleAddNote}
						onDeleteNote={handleDeleteNote}
						onDelete={handleDelete}
						onStartRename={(id, name) => {
							setEditedName(name);
							setEditingId(id);
						}}
						editingId={editingId}
						onRenameConfirm={handleRename}
						editedName={editedName}
						setEditedName={setEditedName}
						onSelect={handleSelectFolder}
					/>
					<NoteEditor
						open={composerOpen}
						folderId={composerFor}
						onClose={() => setComposerOpen(false)}
						onAdd={handleAddNote}
					/>
				</div>
			</div>
		</div>
	);
}
