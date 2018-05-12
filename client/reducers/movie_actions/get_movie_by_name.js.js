import { GET_MOVIE_BY_NAME } from '../../actions/actions';

export default function getMovieByName (state = {}, action) {
	switch (action.type) {
		case GET_MOVIE_BY_NAME:
			return action.payload;
	}
	return state;
}
