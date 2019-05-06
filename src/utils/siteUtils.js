import {fetchData, fetchAssets} from './fetchData';
import {updateSiteContent, updateSiteAssets, updateBlogs, updateMembers, updateProjects} from '../actions/siteActions';
import {updateDistricts} from '../actions/mapActions';
import fire from '../utils/firebase';
import store from '../store';

const firestore = fire.firestore();
const storageRef = fire.storage().ref();

const fetchSiteData = async () => {
    _loadDistricts();
    const data = await fetchData('siteContent');
    _processSiteContent(data);
    const members = await fetchData('teamMember');
    _processTeamMembers(members);
    const assets = await fetchAssets();
    _processAssets(assets);
    const blog = await fetchData('blog');
    _processBlogData(blog);
    const projects = await fetchData('projects');
    _processProjectsData(projects);
}
const _processTeamMembers = data => {
    let members = []
    data.map(i => {
      let member = Object.assign({}, i)
      if (member.hasOwnProperty('portrait')){
        member.portrait = `https:${i.portrait[0].fields.file.url}`
        member.portraitAlt = `https:${i.portrait[1].fields.file.url}`
      }
      members.push(member)
    })
    members.sort(compare)
    function compare(a, b){
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
      return 0
    }

    store.dispatch(updateMembers(members))
  }

const _processProjectsData = data => {
    let projects = []
    data.map(i => {
      let project = Object.assign({}, i)
      if(project.hasOwnProperty('titleImage')){
        project.titleImage = `https:${i.titleImage.fields.file.url}`
      }
      projects.push(project)
    })
    store.dispatch(updateProjects(projects))
}

const _processAssets = data => {
      let siteAssets = {}
      data.map(i => {
        siteAssets[i.title] = `https:${i.file.url}`
      })
      store.dispatch(updateSiteAssets(siteAssets))
  }

const _processBlogData = data => {
    data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
    let blogs = []
    let members = store.getState().site.members
    data.map(b => {
        let author = {}
        if (b.author){
          author = {
            name: b.author,
            portrait: members.find(member => member.name == b.author).portrait
          }
        }
        let date = new Date(b.createdAt).toLocaleString().replace(/:\d{2}\s/,' ').replace(',',' ');
        blogs.push({
          title: b.title,
          author: author,
          intro: b.introContent,
          content: b.blogContent,
          date,
          img: b.featuredImage && `https:${b.featuredImage.fields.file.url}`
        })
    })
    store.dispatch(updateBlogs(blogs))
}

const _processSiteContent = data => {
    let siteContent = {}
    data.map(obj => {
        if(obj.jsonData){
        siteContent[obj.contentId] = obj.jsonData
        }else if(obj.content){
        siteContent[obj.contentId] = obj.content
        }
    })
    
    store.dispatch(updateSiteContent(siteContent))
    document.title = siteContent.site_title
}

const _loadDistricts = async () => {
  let districts = {}
  const collection = await firestore.collection('districts').get()
  collection.docs.map(doc => {
    districts[`${doc.data().collectionId}`] = doc.data()
  })

  for (let d in districts){
    storageRef.child(districts[d]['thumbnail']).getDownloadURL()
    .then(url => {
      districts[d]['thumbnail'] = url
    })
  }

  store.dispatch(updateDistricts(districts))
}

export {
    fetchSiteData
}
