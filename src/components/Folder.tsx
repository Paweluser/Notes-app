import type { FolderProps } from '@/types/FolderTypes';

export function Folder({
	folder,
	onDelete,
	onStartRename,
	onRenameConfirm,
	onSelect,
	onToggle,
	onAddNoteClick,
	editingId,
	editedName,
	setEditedName,
	isOpen,
}: FolderProps) {
	const isEditing = editingId === folder.id;
	return (
		<>
			<div
				className="flex items-center gap-2 p-3 rounded-full m-3 mx-3 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer"
				onClick={() => {
					if (!isEditing) {
						onSelect(folder.id);
						onToggle(folder.id);
					}
				}}>
				<span className="text-2xl bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent md:text-3xl">
					📁
				</span>
				{isEditing ? (
					<input
						type="text"
						value={editedName}
						onChange={(e) => setEditedName(e.target.value)}
						onClick={(e) => e.stopPropagation()}
						className="
							bg-transparent border-b border-[var(--third-color)] 
							outline-none text-[var(--third-color)] flex-1 
							placeholder:text-gray-300
						"
						autoFocus
						placeholder="New folder name..."
					/>
				) : (
					<p className="text-[var(--third-color)] pt-1 md:text-xl">
						{folder.name}
					</p>
				)}
				<div className="flex items-center gap-3 ml-auto">
					{!isEditing ? (
						<button
							onClick={() => {
								onStartRename(folder.id, folder.name);
							}}
							className="cursor-pointer ml-auto mt-0.5">
							<span className="text-xl pt-1 bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent md:text-2xl">
								🖋️
							</span>
						</button>
					) : (
						<button
							onClick={() => {
								onRenameConfirm(folder.id);
							}}
							className="cursor-pointer ml-auto">
							<span className="text-xl bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent md:text-2xl">
								✔️
							</span>
						</button>
					)}
					<button
						onClick={() => onAddNoteClick(folder.id)}
						className="cursor-pointer ml-auto">
						<span className="text-xl bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent md:text-2xl">
							➕
						</span>
					</button>
					<button
						className="cursor-pointer ml-auto"
						onClick={() => {
							onDelete(folder.id);
						}}>
						<span className="text-xl bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent md:text-2xl">
							✖️
						</span>
					</button>
				</div>
			</div>
			<div
				className={`grid transition-[grid-template-rows] duration-300 ease-out
	                    ${
												isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
											} overflow-hidden`}>
				<div className="min-h-0"></div>
			</div>
		</>
	);
}
