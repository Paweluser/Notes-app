'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { LottieAnimationData } from '@/types/LottieTypes';

export default function BackgroundLottie() {
	const [data, setData] = useState<LottieAnimationData | null>(null);

	useEffect(() => {
		fetch('/animations/Animation1.json')
			.then((r) => r.json())
			.then(setData)
			.catch(console.error);
	}, []);

	if (!data) return null;

	return (
		<div className="fixed inset-0 -z-10 pointer-events-none">
			<Lottie
				animationData={data}
				loop
				autoplay
				rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
				style={{ width: '100vw', height: '100vh' }}
			/>
		</div>
	);
}
