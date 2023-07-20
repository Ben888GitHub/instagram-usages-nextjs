import { InstagramEmbed } from 'react-social-media-embed';
import axios from 'axios';
function getLastPart(url) {
	const parts = url.split('/');
	// console.log(parts.at(-2));
	return parts.at(-2);
}

const IgEmbed = ({ permalink }) => {
	// console.log(permalink);
	const splitVal = getLastPart(permalink);
	// console.log(splitVal);
	return (
		<main className="flex flex-col items-center justify-between p-16">
			<div className="flex justify-center m-10">
				{permalink && (
					<InstagramEmbed
						url={`https://www.instagram.com/p/${splitVal}/`}
						width="100%"
					/>
				)}
			</div>
		</main>
	);
};

export default IgEmbed;

export const getStaticProps = async ({ params }) => {
	console.log(params);

	let singlePostProfile = `https://graph.instagram.com/${params.embedId}?fields=id,media_type,media_url,username,timestamp,caption,permalink&access_token=${process.env.NEXT_APP_IG_ACCESS_TOKEN}`;

	const { data } = await axios.get(singlePostProfile);

	console.log(data);

	return {
		props: { permalink: data.permalink }
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};
