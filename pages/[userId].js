const IgUser = ({ key }) => {
	return <p className="text-3xl">IgUser {key}</p>;
};

export default IgUser;

export const getStaticProps = async ({ params }) => {
	return {
		props: { key: params }
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: true
	};
};
