import Menu from '@/components/Menu';
import SearchEngine from '@/components/SearchEngine';

export default function NotesPage() {
	return (
		<div className="relative flex h-full w-full bg-[var(--main-color)] p-4">
			<nav className="fixed top-5 flex flex-row justify-between px-2 w-[90%] md:w-[95%] md:top-10">
				<h2 className="text-center bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent text-4xl md:text-5xl">
					Notes
				</h2>
				<Menu />
			</nav>
			<div className="fixed top-20 px-2 w-[90%] md:w-[95%] md:top-35">
				<SearchEngine />
			</div>
		</div>
	);
}
