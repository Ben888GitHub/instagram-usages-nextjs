import { InstagramEmbed } from 'react-social-media-embed';

const SocMedEmbed = () => {
	// todo, put this in another page and be opened dynamically based on the permalink
	return (
		<div className="flex justify-center m-10">
			<InstagramEmbed
				url="https://www.instagram.com/p/Cu4arvyLHy5/"
				width="100%"
			/>
		</div>
	);
};

export default SocMedEmbed;
