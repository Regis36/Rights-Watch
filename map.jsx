import React,{Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup,GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet's CSS is included
import Countries from "../Data/countries"
import "./map.css"; 


class VectorMap {
// export default function VectorMap () {
    
    state = {} ; 

    componentDidMount(){
        console.log(Countries)
    }

    countryStyle = {
        fillColor: "brown", 
        fillOpacity: 1,
        color:"#FFF", 
        weight: 2,
        // dashArray: 5, 

    };
    //refactoring code 
    onCountryHover= (event) => {
        console.log("Hovered") ; 
    };

    onCountryClick = (event) => {
        //console.log(event);
        event.target.setStyle(
            {
                color: "yellow",
                fillColor: "green", 
            }
        ) ;
    };

    onEachState = (state, layer ) => {
        const CountryName = state.properties.name ;
        const CountryPopulation = state.properties.ratification ;// we want to replace the density data with the mass murder number for each state... for now we let it rock 
        console.log(CountryName) ; 
        
        //display a popup which uses the state objects geometry. It'll rep the actual states drawn 
        // layer.bindPopup( "Name:"+ CountryName + "\n" + "Population:" +CountryPopulation ) ; 
        layer.bindPopup(`${CountryName}:` + ` # of Ratifications:${CountryPopulation}`)
        // layer.bindPopup(`Population:${CountryPopulation}`)

        //layer.bindPopup(stateDensity);
        //event 
        layer.on({
            mouseover : this.onCountryclick,
            click : this.onCountryhover 
        });

    };

    render(){
        return(
            <div className='mapContainer'>
                <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '75vh', width: '95%', paddingLeft:'20px' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {/* <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker> */}
                    <GeoJSON style= {this.countryStyle} data = {Countries.features} 
                            onEachFeature = {this.onEachState}
                        />
                </MapContainer>
            </div>
            
        )
        
    }
        
     
};

export default VectorMap