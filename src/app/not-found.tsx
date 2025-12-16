import FormButtonPage from '@/components/FormButtonPage';

export default function NotFound() {
	return (
		<div className="relative flex flex-col justify-center items-center text-xl md:text-2xl p-3 h-2/3">
			<p className="text-gradient">Oops! This page doesn&rsquo;t exist!</p>
			<div className='mt-5 md:mt-8'>
				<FormButtonPage href="/">Back</FormButtonPage>
			</div>
		</div>
	);
}
