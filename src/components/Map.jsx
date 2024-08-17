
import GoogleMapReact from "google-map-react"
import LocationMarker from "./LocationMarker"

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map(ev => {
    if (ev.categories[0].id === 8) {
      return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
    }
    return null
  }
  )
  return (
    <div className="map">
      <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyAx2pxq0J7kKp4HMD-HQR7Yj3GrG43A-14' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}

      </GoogleMapReact>
    </div>
  )
}
Map.defaultProps = {
  center: {
    lat: 28.7041,
    lng: 77.1025,
  },
  zoom: 6,
}

export default Map
