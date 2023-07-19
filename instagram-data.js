import axios from 'axios';

export const getUserProfileAndMedia = async (userProfile, userMedia) => {
	try {
		const profileData = axios.get(userProfile);
		const mediaData = axios.get(userMedia);

		const [profileResult, mediaResult] = await Promise.all([
			profileData,
			mediaData
		]);

		// console.log(data);
		console.log(userProfile);
		return { profileResult: profileResult.data, mediaResult: mediaResult.data };

		// return { profileResult, mediaResult };
	} catch (err) {
		// console.log(err.message);
		return err.message;
	}
};
