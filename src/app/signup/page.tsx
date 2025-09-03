import FormButtonPage from '@/components/FormButtonPage';

export default function Signup() {
	return (
		<>
			<h2 className="text-center uppercase bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent text-4xl mt-12 md:text-5xl">
				Sign up
			</h2>
			<form className="flex flex-col justify-center items-center mt-8 gap-4 mx-4 p-4 border rounded-2xl bg-[var(--main-color)]">
				<div className="flex flex-col m-2">
					<label
						htmlFor="email"
						className="text-xl text-[var(--second-color)] mb-2">
						E-mail:
					</label>
					<input
						type="text"
						name="email"
						id="email"
                        autoComplete='username'
                        placeholder='Enter your e-mail'
						className="bg-[var(--second-color)] rounded-2xl p-1.5"
					/>
				</div>
				<div className="flex flex-col m-2">
					<label
						htmlFor="password"
						className="text-xl text-[var(--second-color)] mb-2">
						Password:
					</label>
					<input
						type="password"
						name="password"
						id="password"
                        autoComplete='new-password'
                        placeholder='Enter your password'
						className="bg-[var(--second-color)] rounded-2xl p-1.5"
					/>
				</div>
				<p className="text-xl text-[var(--second-color)] mt-4">
					Do you have an account?
				</p>
				<FormButtonPage href='/login'>Log in</FormButtonPage>
				<div className="flex justify-around w-full text-xl text-[var(--second-color)] mt-6">
					<FormButtonPage href='/'>Back</FormButtonPage>
					<button type="submit">Sign up</button>
				</div>
			</form>
		</>
	);
}
