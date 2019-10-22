import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ReactComponent as LEFT} from '../../assets/left.svg';
import {ReactComponent as RIGHT} from '../../assets/right.svg';

export class POIGallery extends Component {

    handleClick = index => {
        let i = index
        if (i > this.props.images.length-1){
            i = this.props.images.length-1
        }else if (i < 0){
            i = 0
        }
        this.props.updateIndex(i)
    }
    
    render() {
        return (
            <div className='poiInfo-images'>
                <LEFT style={{position: 'absolute', left: 0, opacity: this.props.images.length > 2 ? 1 : 0}}
                      onClick={() => this.handleClick(this.props.index - 1 )}
                />
                <div className='image'>
                    {
                        this.props.images.map((i, key)=>
                            <img src={i} key={key} style={{opacity: this.props.index == key ? 1 : 0}}
                                 onClick={this.props.toggleModal}
                            />
                        )
                    }
                </div>
                <RIGHT style={{position: 'absolute', right: 0, opacity: this.props.images.length > 2 ? 1 : 0}}
                       onClick={() => this.handleClick(this.props.index + 1)}
                />
                <div className='imgCount' style={{opacity: this.props.images.length > 2 ? 1 : 0}}>
                    {
                        this.props.images.map((i, key) =>
                            <div key={key}
                                onClick={() => this.handleClick(key)}
                                style={{
                                    background: this.props.index == key ? '#3A6FD3' : '#DCE2EA'
                                }}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(POIGallery)
