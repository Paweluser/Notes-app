import { Plus } from 'lucide-react';

export default function AddButton({ onAdd }: { onAdd: () => void }) {
	return (
		<button
			onClick={onAdd}
			className="absolute right-3 text-[var(--third-color)] cursor-pointer text-5xl py-4 px-2 h-fit w-fit">
			<Plus className="notes-icon" />
		</button>
	);
}
