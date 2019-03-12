import {UPDATE_DISTRICTS, UPDATE_CUR_DISTRICT, TOGGLE_DISTRICT_INFO, UPDATE_MAP_CENTER, UPDATE_MAP_ZOOM} from '../actions/mapActions';

const initState = {
    districts: {},
    curDistrict: "",
    districtInfo: false,
    mapCenter: {lat: 47.6062, lng: -122.3321},
    zoom: 13
}

export default function(state=initState, action){
    switch(action.type){
        case UPDATE_DISTRICTS:
            return{
                ...state,
                districts: action.payload
            }
        case UPDATE_CUR_DISTRICT:
            return{
                ...state,
                curDistrict: action.payload
            }
        case TOGGLE_DISTRICT_INFO:
            return{
                ...state,
                districtInfo: action.payload
            }
        case UPDATE_MAP_CENTER:
            return{
                ...state,
                mapCenter: action.payload
            }
        case UPDATE_MAP_ZOOM:
            return{
                ...state,
                zoom: action.payload
            }
        default:
            return state
    }
}