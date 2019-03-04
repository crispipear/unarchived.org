import {UPDATE_SITE_CONTENT, UPDATE_SITE_ASSETS, 
        UPDATE_MEMBERS, UPDATE_BLOGS, UPDATE_SITE_LOC} from '../actions/siteActions';

const initState = {
    siteContent: {},
    siteAssets: {},
    members: [],
    blogs: [],
    siteLoc: window.location.hash.replace("#", "")
}

export default function(state=initState, action){
    switch(action.type){
        case UPDATE_SITE_CONTENT:
            return{
                ...state,
                siteContent: action.payload
            }
        case UPDATE_SITE_ASSETS:
            return{
                ...state,
                siteAssets: action.payload
            }
        case UPDATE_MEMBERS:
            return{
                ...state,
                members: action.payload
            }
        case UPDATE_BLOGS:
            return{
                ...state,
                blogs: action.payload
            }
        case UPDATE_SITE_LOC:
            return{
                ...state,
                siteLoc: action.payload
            }
        default:
            return state
    }
}