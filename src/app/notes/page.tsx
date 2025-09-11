import AddButton from '@/components/AddButton';
import Menu from '@/components/Menu';
import SearchEngine from '@/components/SearchEngine';

export default function NotesPage() {
	return (
		<div className="flex flex-col h-full p-4">
			<nav className="flex justify-between px-2 mb-3 xl:justify-around mt-3 lg:mt-5 xl:mt-14">
				<h2 className="text-center bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent text-4xl md:text-5xl">
					Notes
				</h2>
				<Menu />
			</nav>
			<SearchEngine />
			<div className="relative flex gap-2 w-full h-2/3 mt-3 xl:w-2/3 xl:mx-auto xl:mt-6 bg-[var(--second-color)]/20 backdrop-blur rounded-2xl shadow-2xl">
				<AddButton />
			</div>
		</div>
	);
}
