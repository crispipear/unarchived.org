/*global google*/
import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateCurDistrict, toggleDistrictInfo, updateMapCenter, updateMapZoom} from '../../actions/mapActions';
import ANCHOR from '../../assets/anchor.png';

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqd6BXsxIeE_hMFo581Mf7CR8CmA3L0G4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ width: `100%`, height: `100%` }} />,
    containerElement: <div style={{ 
      width: `45%`, 
      height: `100vh`,
      position: 'fixed',
      right: 0,
      top: 0 
    }} />,
    mapElement: <div style={{ width: `100%`, height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    zoom={props.zoom}
    center={props.center}
    defaultOptions={{
      showsBuildings: false,
      fullscreenControl:false,
      zoomControl:false,
      mapTypeControl: false,
      streetViewControl: false,
      styles: props.mapStyles
    }}
  >
    {/* {
      props.districts.map((d, key) => 
        <Polygon 
          key={key}
          onClick={() => props.districtClick(d.name, d.center)}
          options={{
              fillColor: "#000",
              fillOpacity: 0.25,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1
          }}
          path={d.coords}
        />
      )
    } */}
    {
      props.poiData.map((poi, key) =>
      <Marker
        key={key}
        position={{ lat: poi.location.lat, lng: poi.location.lon}}
        icon={{
          url: ANCHOR,
          scaledSize: new google.maps.Size(25, 34)
        }}
      />
      )
    }
  </GoogleMap>
)

class MapContainer extends React.Component {
  state = {
    districts: []
  }
  componentDidMount(){
    // this.setState({
    //   districts: this._getDistricts()
    // })
    console.log(this.props.poiData)
  }
  _getDistricts = () => {
    let results = []
    for (let d in this.props.districts){
      let item = {coords: [], name: ""}
      item.name = this.props.districts[d].collectionId
      item.center = {
        lat: parseFloat(this.props.districts[d].centerCoords._lat),
        lng: parseFloat(this.props.districts[d].centerCoords._long)
      }
      this.props.districts[d].borderCoords.map(c => {
        item.coords.push({
          lat: parseFloat(c._lat),
          lng: parseFloat(c._long)
        })
      })
      results.push(item)
    }
    return results
  }
  districtClick = (name, coords) => {
    this.props.updateCurDistrict(name)
    this.props.updateMapCenter(coords)
    this.props.toggleDistrictInfo(true)
    this.props.updateMapZoom(18)
  }
  render() {
    return (
      <MapComponent
        mapStyles={this.props.mapStyles}
        districts={this.state.districts}
        districtClick={this.districtClick}
        poiData={this.props.poiData}
        center={this.props.mapCenter}
        zoom={this.props.zoom}
      />
    )
  }
}

const mapStateToProps = state => ({
  mapStyles: state.site.siteContent.mapStyles,
  districts: state.map.districts,
  mapCenter: state.map.mapCenter,
  zoom: state.map.zoom,
  poiData: state.site.poiData[state.map.curDistrict].poi
})

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateCurDistrict,
    toggleDistrictInfo,
    updateMapCenter,
    updateMapZoom
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)