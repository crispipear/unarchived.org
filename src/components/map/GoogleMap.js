import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {SiteConsumer} from '../SiteContext';

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
    defaultZoom={8}
    defaultCenter={{ lat: 47.608461, lng: -122.342365 }}
    defaultOptions={{
      fullscreenControl:false,
      zoomControl:false,
      styles: props.mapStyles
    }}
  />
)

class MapContainer extends React.Component {
  render() {
    return (
      <MapComponent
        mapStyles={this.props.siteContent.mapStyles}
      />
    )
  }
}

export default () => (
  <SiteConsumer>
    {({siteContent}) => (
      <MapContainer siteContent={siteContent}/>
    )}
  </SiteConsumer>
)
