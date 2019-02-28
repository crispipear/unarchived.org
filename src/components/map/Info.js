import React, { Component } from 'react';
import {SiteConsumer} from '../SiteContext';
import Belltown from '../../assets/belltown.png';
import Georgetown from '../../assets/georgetown.png';
import LakeUnion from '../../assets/lakeunion.png'

const neighborhoods = [
  {
    name: 'Belltown',
    img: Belltown
  },
  {
    name: 'Georgetown',
    img: Georgetown
  },
  {
    name: 'Lake Union',
    img: LakeUnion
  }
]

class Map extends Component {
  _handleClick = () => {
    alert("feature still under development")
  }
  render() {
    return (
      <div className='info'>
        {
          neighborhoods.map((n, key) => 
            <div key={key}
                 className = 'neighborhood_card' style={{backgroundImage: `url(${n.img})`}}
                 onClick={this._handleClick}
            >
              <h1>{n.name}</h1>
            </div>
          )
        }
      </div>  
    );
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent}) => (
      <Map siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
