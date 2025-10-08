import { Folder } from './Folder';
import type { FolderTypes } from '@/types/FolderTypes';

export function FolderList({ folders }: { folders: FolderTypes[] }) {
	return (
		<div className='w-full'>
			{folders.map((f) => (
				<Folder key={f.id} folder={f} />
			))}
		</div>
	);
}
