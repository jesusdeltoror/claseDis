mapboxgl.accessToken = 'pk.eyJ1IjoiamVzdXNkZWx0b3JvciIsImEiOiJjanhhbmxmbXcwMm9zM3hwZGFlcG5mM2ZwIn0.8bGV51PvN4q5zroithEkow';
const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 1 // starting zoom
});