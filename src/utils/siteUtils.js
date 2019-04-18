import {fetchData, fetchAssets} from './fetchData';
import {updateSiteContent, updateSiteAssets, updateBlogs, updateMembers} from '../actions/siteActions';
import {updateDistricts} from '../actions/mapActions';
import fire from '../utils/firebase';
import store from '../store';

const firestore = fire.firestore();
const storageRef = fire.storage().ref();

const fetchSiteData = async () => {
    _loadDistricts();
    const data = await fetchData('siteContent');
    _processSiteContent(data);
    const blog = await fetchData('blog');
    _processBlogData(blog);
    const members = await fetchData('teamMember');
    _processTeamMembers(members);
    const assets = await fetchAssets();
    _processAssets(assets);
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

const _processAssets = data => {
      let siteAssets = {}
      data.map(i => {
        siteAssets[i.title] = `https:${i.file.url}`
      })
      store.dispatch(updateSiteAssets(siteAssets))
  }

const _processBlogData = data => {
    let blogs = []
    data.map(b => {
        blogs.push({
        title: b.title,
        author: b.author && b.author.split(","),
        intro: b.introContent,
        date: b.date && b.date.split('T').shift(),
        time: b.time && b.date.split('T').pop(),
        img: b.img && `https:${b.featuredImage.fields.file.url}`,
        content: b.blogContent
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

const _getColDocs = async (col) => {
  let results = []
  const collection = await firestore.collection(col).get()
  collection.docs.map(doc => {
    results.push(doc.data())
  });
  console.log(results)
}

export {
    fetchSiteData
}
