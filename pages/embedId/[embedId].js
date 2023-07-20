import { useRouter } from 'next/router';
import { InstagramEmbed } from 'react-social-media-embed';

const IgEmbed = () => {
	const router = useRouter();

	return (
		<main className="flex flex-col items-center justify-between p-16">
			<div className="flex justify-center m-10">
				<InstagramEmbed
					url={`https://www.instagram.com/p/${router.query.embedId}/`}
					width="100%"
				/>
			</div>
		</main>
	);
};

export default IgEmbed;
