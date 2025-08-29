'use client';

import { useEffect, useState, useMemo } from 'react';
import Lottie from 'lottie-react';

type LottieAnimationData = Record<string, unknown>;

export default function BackgroundLottie() {
	const [data, setData] = useState<LottieAnimationData | null>(null);

	useEffect(() => {
		fetch('/animations/Animation1.json')
			.then((r) => r.json())
			.then(setData)
			.catch(console.error);
	}, []);

	const reduce = useMemo(
		() =>
			typeof window !== 'undefined' &&
			window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches,
		[]
	);

	if (!data || reduce) return null;

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
