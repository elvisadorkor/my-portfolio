// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

document.addEventListener('DOMContentLoaded', (event) => {
                getComments();
                });

//import comments to html page and print on console
function getComments() {
  fetch('/data').then(response => response.json()).then((comments) => {

    const commentsListElement = document.getElementById('comment-container');
    commentsListElement.innerHTML = '';
    var i = 0;
    for (i = 0; i < comments.length; i++){
        commentsListElement.appendChild(
        createListElement(comments[i].thought));
    }
  });
}

//create list element
function createListElement(comment) {
  const liElement = document.createElement('li');
  liElement.innerText = comment;
  return liElement;
}

var markers = [];
var map;
const cities = [
        ['Paris', {lat: 48.8566, lng: 2.3522}],
        ['London', {lat: 51.5074, lng: 0.1278}],
        ['Barcelona', {lng: 41.3851, lng: 2.1734}],
        ['Copenhagen', {lat: 55.6761, lng: 12.5683}],
        ['Santorini', {lat: 36.3932, lng: 25.4615}],
        ['Florence', {lat: 43.7696, lng: 11.2558}],
        ['Amsterdam', {lat: 52.3667, lng: 4.8945}],
        ['Prague', {lat: 50.0755, lng: 14.4378}]
];

function createMap() {
      map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 54.5260, lng: 15.2551}, 
      zoom: 4, 
      styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]});
}
    // var i = 0;
    // for(i = 0; i < cities.length; i++){
    //     var city = cities[i][0];
    //     var marker = new google.maps.Marker({
    //         position: {lat: cities[i][1], lng: cities[i][2]},
    //         map: map,
    //         animation: google.maps.Animation.BOUNCE,
    //         title: city
    //     });
    // }


   function addMarkerWithTimeout(position, timeout, label) {
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position,
            map: map,
            label: label,
            animation: google.maps.Animation.DROP
          }));
        }, timeout);
      }

 function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }

  function drop() {
        clearMarkers();
        for (var i = 0; i < cities.length; i++) {
          addMarkerWithTimeout(cities[i][1], i * 600, cities[i][0]);
    }
}