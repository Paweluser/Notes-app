import { Folder } from './Folder';
import { NoteList } from './NoteList';
import { FolderListProps } from '@/types/NotesType';
import { FolderListControllerProps } from '@/types/FolderTypes';

export function FolderList({
	folders,
	openFolderId,
	onToggle,
	onAddNoteClick,
	notes,
	onDeleteNote,
	onUpdateNote,
	...rest
}: FolderListProps & FolderListControllerProps) {
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
							className={`grid transition-[grid-template-rows] duration-300 ease-out ${
								isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
							} overflow-hidden`}>
							<div className="min-h-0">
								<NoteList
									folderId={f.id}
									notes={notes}
									onDeleteNote={onDeleteNote}
									onUpdateNote={onUpdateNote}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
