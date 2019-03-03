import React, {Component} from 'react';
import {fetchData, fetchAssets} from '../utils/fetchData';
import fire from '../utils/firebase';

const SiteContext = React.createContext({
    siteContent: {},
    siteAssets: {},
    blogs: [],
    members: []
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  componentDidMount(){
    this._fetchSiteData();
    this._fetchAssets();
    this.firestore = fire.firestore()
    // this._getMarkers('central-district')
  }

  state = {
    siteContent: {},
    siteAssets: {},
    blogs: [],
    members: []
  }

  _getMarkers = async colName => {
    const results = []
    const snapshot = await this.firestore.collection(colName).get()
    snapshot.docs.map(doc => {
      results.push(doc.data())
    });
    // console.log(results)
  }

  _fetchSiteData = async () => {
    const data = await fetchData('siteContent');
    this._processSiteContent(data);
    const blog = await fetchData('blog');
    this._processBlogData(blog);
    const members = await fetchData('teamMember');
    this._processTeamMembers(members);
  }

  _fetchAssets = async () => {
    const data = await fetchAssets();
    this._processAssets(data);
  }

  _processTeamMembers = data => {
    let members = []
    data.map(i => {
      let member = Object.assign({}, i)
      member.portrait = `https:${i.portrait[0].fields.file.url}`
      member.portraitAlt = `https:${i.portrait[1].fields.file.url}`
      members.push(member)
    })
    members.sort(compare)
    this.setState({
      members
    })
    function compare(a, b){
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
  
      return 0
    }
  }

  _processAssets = data => {
      let siteAssets = {}
      data.map(i => {
        siteAssets[i.title] = `https:${i.file.url}`
      })
      this.setState({siteAssets})
  }

  _processBlogData = data => {
    let blogs = []
    data.map(b => {
      let content = []
      b.blogContent.content.map(c => {content.push(c.content[0].value)})
      blogs.push({
        title: b.title,
        author: b.author,
        date: b.date.split('T').shift(),
        time: b.date.split('T').pop(),
        img: `https:${b.featuredImage.fields.file.url}`,
        content: content
      })
    })
    this.setState({blogs})
  }

  _processSiteContent = data => {
    let siteContent = {}
    data.map(obj => {
      if(obj.jsonData){
        siteContent[obj.contentId] = obj.jsonData
      }else if(obj.content){
        siteContent[obj.contentId] = obj.content
      }
    })
    this.setState({
      siteContent
    })
    document.title = this.state.siteContent.site_title
  }
  render(){
    return(
      <SiteContext.Provider
        value={{
            siteContent: this.state.siteContent,
            siteAssets: this.state.siteAssets,
            blogs: this.state.blogs,
            members: this.state.members
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
