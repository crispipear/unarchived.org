import {UPDATE_SITE_CONTENT, UPDATE_SITE_ASSETS, 
        UPDATE_MEMBERS, UPDATE_BLOGS, UPDATE_SITE_LOC,
        UPDATE_PROJECTS, UPDATE_POI_DATA, TOGGLE_VIDEO,
        UPDATE_VIEW
    } from '../actions/siteActions';

const initState = {
    siteContent: {},
    siteAssets: {},
    members: [],
    blogs: [],
    siteLoc: window.location.hash.replace("#", ""),
    projects: [],
    poiData: {},
    video: false,
    view: 1 //web = 1, mobile = 2
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
        case UPDATE_PROJECTS:
            return{
                ...state,
                projects: action.payload
            }
        case UPDATE_POI_DATA:
            return{
                ...state,
                poiData: action.payload
            }
        case TOGGLE_VIDEO:
            return{
                ...state,
                video: action.payload
            }
        case UPDATE_VIEW:
            return{
                ...state,
                view: action.payload
            }
        default:
            return state
    }
}