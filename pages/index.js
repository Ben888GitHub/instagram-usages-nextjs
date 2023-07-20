import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getUserProfileAndMedia } from '@/instagram-data';
import Link from 'next/link';
import SocMedEmbed from '@/components/SocMedEmbed';

const inter = Inter({ subsets: ['latin'] });

const regex = '//p/([a-zA-Z0-9-_]+)//';

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
				{mediaResult?.data.map(({ caption, id, media_url, permalink }, idx) => (
					<div key={idx}>
						<Image
							width={500}
							height={500}
							className=" max-w-full rounded-lg"
							alt={caption}
							priority
							// loading="lazy"
							// placeholder="empty"
							src={media_url}
							quality={50}
						/>
						<div>
							<Link href={id} className="text-lg underline text-blue-600">
								Open {caption} in new Page
							</Link>
							<br />
							<Link
								href={`embedId/${id}`}
								className="text-lg underline text-blue-600"
							>
								Open {caption} in new Embed
							</Link>
						</div>
						<p className="text-xl">{id}</p>
					</div>
				))}
			</div>
			{/* <SocMedEmbed /> */}
		</main>
	);
}

export const getStaticProps = async () => {
	let userProfile = `https://graph.instagram.com/${process.env.NEXT_APP_USER_ID}?fields=id,username&access_token=${process.env.NEXT_APP_IG_ACCESS_TOKEN}`;
	let userMedia = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${process.env.NEXT_APP_IG_ACCESS_TOKEN}`;

	const { profileResult, mediaResult } = await getUserProfileAndMedia(
		userProfile,
		userMedia
	);

	// console.log(profileResult);

	return {
		props: { profileResult, mediaResult }
	};
};
