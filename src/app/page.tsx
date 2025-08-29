export default function Home() {
	return (
		<>
			<div className="h-[100vh] flex flex-col justify-center">
				<div className="min-w-min p-4">
					<h1 className="text-center uppercase bg-linear-65 from-purple-500 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent text-3xl">
						Welcome to notes-app
					</h1>
				</div>
				<p className="text-[var(--second-color)] p-4 text-center">
					An app that lets you intuitively save all your notes in one place. Go
					to the login panel below to continue.
				</p>
			</div>
		</>
	);
}
