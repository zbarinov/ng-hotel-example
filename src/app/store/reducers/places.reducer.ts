import {PlacesAction, GET_PLACES_ERROR, GET_PLACES_SUCCESS, GetPlacesSuccess, SELECT_PLACE, SelectPlace} from '../actions/places.action';

const intialState: IRelaxDestination[] = [];

export function placesReducer(state: IRelaxDestination[] = intialState, action: PlacesAction) {
    switch (action.type) {
        case GET_PLACES_SUCCESS:
            return  (action as GetPlacesSuccess).payload;
        case GET_PLACES_ERROR:
            return state;
        default:
            return state;
    }
}

export function selectPlaceReducer(state: IRelaxDestination, action: SelectPlace) {
    return action.payload;
}
