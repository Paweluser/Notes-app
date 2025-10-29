import { Folder } from './Folder';
import { NoteEditor } from './NoteEditor';
import { NoteList } from './NoteList';
import type {
	FolderListProps,
	NoteTypes,
	OnAddNote,
	OnDeleteNote,
} from '@/types/FolderTypes';

type Extra = {
	openFolderId: string | null;
	onToggle: FolderListProps['onToggle'];
	onAddNoteClick: FolderListProps['onAddNoteClick'];
	notes: NoteTypes[];
	composerFor: string | null;
	onAddNote: OnAddNote;
	onDeleteNote: OnDeleteNote;
};

export function FolderList({
	folders,
	openFolderId,
	onToggle,
	onAddNoteClick,
	notes,
	composerFor,
	onAddNote,
	onDeleteNote,
	...rest
}: FolderListProps & Extra) {
	return (
		<div className="w-full">
			{folders.map((f) => {
				const isOpen = openFolderId === f.id;

				return (
					<div key={f.id}>
						<Folder
							folder={f}
							isOpen={isOpen}
							onToggle={onToggle}
							onAddNoteClick={onAddNoteClick}
							{...rest}
						/>

						<div
							className={`grid transition-[grid-template-rows] duration-300 ease-out
                          ${
														isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
													} overflow-hidden`}>
							<div className="min-h-0">
								{composerFor === f.id && (
									<NoteEditor folderId={f.id} onAdd={onAddNote} />
								)}
								<NoteList
									folderId={f.id}
									notes={notes}
									onDelete={onDeleteNote}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
