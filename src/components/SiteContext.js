import React, {Component} from 'react';
import {fetchData, fetchAssets} from '../utils/fetchData';

const SiteContext = React.createContext({
    siteContent: undefined,
    siteAssets: undefined
})

export const SiteConsumer = SiteContext.Consumer

export class SiteProvider extends Component {
  componentDidMount(){
    this._fetchSiteData();
    this._fetchAssets();
  }

  state = {
    siteContent: undefined,
    siteAssets: undefined
  }

  _fetchSiteData = async () => {
    const data = await fetchData('siteContent');
    this._processSiteContent(data);
  }

  _fetchAssets = async () => {
    const data = await fetchAssets();
    this._processAssets(data);
  }

  _processAssets = data => {
      let siteAssets = {}
      data.map(i => {
        siteAssets[i.title] = i.file.url
      })
      this.setState({siteAssets})
  }

  _processSiteContent = data => {
    let siteContent = {}
    data.map(obj => {
      siteContent[obj.name] = obj.content
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
            siteAssets: this.state.siteAssets
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}
