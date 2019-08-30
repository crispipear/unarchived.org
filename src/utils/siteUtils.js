import {fetchData, fetchAssets} from './fetchData';
import {updateSiteContent, updateSiteAssets, updateBlogs, updateMembers, updateProjects,updatePOIdata} from '../actions/siteActions';
import {updateDistricts} from '../actions/mapActions';
import fire from '../utils/firebase';
import store from '../store';

const firestore = fire.firestore();
const storageRef = fire.storage().ref();

const fetchSiteData = async () => {
    // _loadDistricts();
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
    const districts = await fetchData('districts');
    const poi = await fetchData('poi');
    _processPOI(districts, poi);
}

const _processPOI = (districts, poiData) => {
  let data = {}
  districts.map(district => {
    let districtObj = {...district}
    districtObj.image = `https:${district.image.fields.file.url}`
    let pois = poiData.filter(poi => poi.districtId == district.districtId)
    pois.map(poi => {
      let images = []
      poi.images.map(image =>{
        images.push(`https:${image.fields.file.url}`)
      })
      poi.images = images
      poi.posterImage = poi.posterImage && `https:${poi.posterImage.fields.file.url}`
    })
    districtObj.poi = pois
    districtObj.poi.sort(comparePOI)
    function comparePOI(a, b){
      if(a.order < b.order) return -1
      if(a.order > b.order) return 1
      return 0
    }
    data[district.districtId] = districtObj
  })
  store.dispatch(updatePOIdata(data)) 
}

const _processTeamMembers = data => {
    let members = []
    data.map(i => {
      let member = Object.assign({}, i)
      if (member.hasOwnProperty('portrait')){
        member.portrait = `https:${i.portrait[0].fields.file.url}`
        member.portraitAlt = `https:${i.portrait[1].fields.file.url}`
      }
      if (member.hasOwnProperty('startDate')){
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        let start = monthNames[new Date(member.startDate).getMonth()] + ' ' + new Date(member.startDate).getFullYear()
        let end = member.endDate
                  ? monthNames[new Date(member.endDate).getMonth()] + ' ' + new Date(member.endDate).getFullYear()
                  : 'present'
        member.duration = start + ' - ' + end
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
    data.map(b => {
        let date = new Date(b.createdAt).toLocaleString("en", {month: 'long', year: 'numeric', day: 'numeric'});
        blogs.push({
          title: b.title,
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
