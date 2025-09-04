import Form from '@/components/Form';
import FormButtonPage from '@/components/FormButtonPage';

export default function LogIn() {
	return (
		<>
			<div className="flex flex-col justify-center w-full h-screen lg:h-3/4">
				<h2 className="text-center uppercase bg-linear-65 from-purple-400 to-pink-200 bg-clip-text [-webkit-background-clip:text] text-transparent text-4xl mt-12 2xs:mt-6 md:text-5xl">
					Log in
				</h2>
				<Form>
					<p className="text-xl text-[var(--second-color)] mt-4 md:text-2xl md:mt-8">
						Don&rsquo;t have an account?
					</p>
					<div className="text-xl md:text-2xl md:mt-6">
						<FormButtonPage href="/signup">Sign up</FormButtonPage>
					</div>
				</Form>
			</div>
		</>
	);
}
