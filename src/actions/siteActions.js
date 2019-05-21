export const UPDATE_SITE_CONTENT     = 'UPDATE_SITE_CONTENT',
             UPDATE_SITE_ASSETS      = 'UPDATE_SITE_ASSETS',
             UPDATE_MEMBERS          = 'UPDATE_MEMBERS',
             UPDATE_BLOGS            = 'UPDATE_BLOGS',
             UPDATE_SITE_LOC         = 'UPDATE_SITE_LOC',
             UPDATE_PROJECTS         = 'UPDATE_PROJECTS',
             UPDATE_POI_DATA         = 'UPDATE_POI_DATA'
             
export const updateSiteContent = content => ({
    type: UPDATE_SITE_CONTENT,
    payload: content
})

export const updateSiteAssets = assets => ({
    type: UPDATE_SITE_ASSETS,
    payload: assets
})

export const updateMembers = members => ({
    type: UPDATE_MEMBERS,
    payload: members
})
export const updateBlogs = blogs => ({
    type: UPDATE_BLOGS,
    payload: blogs
})

export const updateSiteLocation = loc => ({
    type: UPDATE_SITE_LOC,
    payload: loc
})

export const updateProjects = projects => ({
    type: UPDATE_PROJECTS,
    payload: projects
})

export const updatePOIdata = data => ({
    type: UPDATE_POI_DATA,
    payload: data
})