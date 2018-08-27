export const ADD_WORKS = 'acions/add_works';

export default (works) => ({
	type: ADD_WORKS,
	payload: {
		works
	}
});