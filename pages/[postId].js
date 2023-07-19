import axios from 'axios';
import Image from 'next/image';

const IgPost = ({ postId, data }) => {
	return (
		<main className="flex flex-col items-center justify-between p-16 ">
			<Image
				width={500}
				height={500}
				className=" h-auto max-w-full rounded-lg"
				alt={data?.caption}
				priority
				src={data?.media_url}
				quality={50}
			/>
			<p className="text-3xl">IgPost {postId}</p>
			<p className="text-xl">Caption: {data?.caption}</p>
			<p className="text-lg">Link: {data?.permalink}</p>
			<p className="text-lg">Date: {data?.timestamp}</p>
		</main>
	);
};

export default IgPost;

export const getStaticProps = async ({ params }) => {
	console.log(params);

	let singlePostProfile = `https://graph.instagram.com/${params.postId}?fields=id,media_type,media_url,username,timestamp,caption,permalink&access_token=${process.env.NEXT_APP_IG_ACCESS_TOKEN}`;

	const { data } = await axios.get(singlePostProfile);

	return {
		props: { postId: params.postId, data }
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};
