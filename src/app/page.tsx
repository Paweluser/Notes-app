import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
	return (
		<>
			<div className="h-[40vh] lg:h-[50vh] flex flex-col justify-center">
				<div className="min-w-min p-4">
					<h1 className="text-center uppercase bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent text-4xl md:text-5xl">
						Welcome to notes-app
					</h1>
				</div>
				<div className="flex items-center justify-center text-[var(--second-color)] space-x-4 mt-5 text-xl md:mt-8 md:text-2xl">
					<Link
						href="/login"
						className="border px-3 py-1 rounded-sm hover:text-[var(--main-color)] hover:bg-[var(--second-color)] transition-colors">
						Log in
					</Link>
					<span className="h-full w-px bg-white" />
					<Link
						href="/signup"
						className="border px-3 py-1 rounded-sm hover:text-[var(--main-color)] hover:bg-[var(--second-color)] transition-colors">
						Sign up
					</Link>
				</div>
			</div>
			<p className="text-[var(--second-color)] text-xl md:text-2xl text-center">
				Check my profiles:
			</p>
			<div className="flex justify-center mt-7 gap-10 md:mt-10 md:gap-14">
				<a
					href="https://github.com/Paweluser"
					target="_blank"
					rel="noopener noreferrer"
					className="">
					<FaGithub className="h-18 w-18 md:h-20 md:w-20 text-[var(--third-color)] hover:scale-110 transition-transform" />
				</a>
				<a
					href="https://github.com/Paweluser"
					target="_blank"
					rel="noopener noreferrer">
					<FaLinkedin className="h-18 w-18 md:h-20 md:w-20 text-[var(--third-color)] hover:scale-110 transition-transform" />
				</a>
			</div>
		</>
	);
}
