import React from 'react';
import FormButtonPage from './FormButtonPage';

export default function Form({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<form className="flex flex-col justify-center items-center mt-8 gap-4 mx-4 p-4 border-2 border-[var(--third-color)] rounded-2xl bg-[var(--main-color)] md:mx-6 md:p-6 lg:mx-10 xl:mx-[25%]">
			<div className="flex flex-col m-2 w-full md:w-3/4">
				<label
					htmlFor="email"
					className="text-xl text-[var(--second-color)] mb-2 md:text-2xl md:mb-3">
					E-mail:
				</label>
				<input
					type="email"
					name="email"
					id="email"
					autoComplete="username"
					placeholder="Enter your e-mail"
					className="bg-[var(--second-color)] rounded-2xl p-1.5 md:p-3"
				/>
			</div>
			<div className="flex flex-col m-2 w-full md:w-3/4">
				<label
					htmlFor="password"
					className="text-xl text-[var(--second-color)] mb-2 md:text-2xl md:mb-3">
					Password:
				</label>
				<input
					type="password"
					name="password"
					id="password"
					autoComplete="new-password"
					placeholder="Enter your password"
					className="bg-[var(--second-color)] rounded-2xl p-1.5 md:p-3"
				/>
			</div>
			{children}
			<div className="flex justify-around w-full text-xl text-[var(--second-color)] mt-6 md:text-2xl">
				<FormButtonPage href="/">Back</FormButtonPage>
				<button
					type="submit"
					className="border px-3 py-1 rounded-sm hover:text-[var(--main-color)] hover:bg-[var(--second-color)] transition-colors cursor-pointer">
					Sign up
				</button>
			</div>
		</form>
	);
}
