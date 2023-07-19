import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getUserProfileAndMedia } from '@/instagram-data';
import axios from 'axios';
const inter = Inter({ subsets: ['latin'] });

export default function Home({ profileResult, mediaResult }) {
	return (
		<main
			className={`flex flex-col items-center justify-between p-16 ${inter.className}`}
		>
			<p className="text-4xl">Instagram Usages NextJS</p>
			<div className="m-10">
				<p className="text-3xl">Hello, {profileResult.username}</p>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
				{mediaResult.data.map(({ caption, id, media_url }, idx) => (
					<div key={idx}>
						<Image
							width={500}
							height={500}
							// className=" h-auto  max-w-full rounded-lg"
							alt={caption}
							priority
							// loading="lazy"
							// placeholder="empty"
							src={media_url}
							quality={50}
						/>
						<p className="text-2xl">{caption}</p>
						<p className="text-xl">{id}</p>
					</div>
				))}
			</div>
		</main>
	);
}

export const getStaticProps = async () => {
	let userProfile = `https://graph.instagram.com/${process.env.NEXT_APP_USER_ID}?fields=id,username&access_token=${process.env.NEXT_APP_IG_ACCESS_TOKEN}`;
	let userMedia = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${process.env.NEXT_APP_IG_ACCESS_TOKEN}`;

	const { profileResult, mediaResult } = await getUserProfileAndMedia(
		userProfile,
		userMedia
	);

	// console.log(profileResult);

	return {
		props: { profileResult, mediaResult }
	};
};
