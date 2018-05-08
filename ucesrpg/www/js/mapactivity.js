// load the map
      var mymap = L.map('mapid').setView([51.5245, -0.1339], 18);
      // load the tiles
      L.tileLayer('https://api.mapbox.com/styles/v1/rpgis/cjdg3ldlug2552skafmvwpmoh/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnBnaXMiLCJhIjoiY2pkZzNqNnFpMGV2dDMzcmw5dmdxZWJvdCJ9.ma-X-QU8z-LjUdLr1mMqQw', {maxZoom: 18,attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,'
        +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets'

  }).addTo(mymap);

  var marker = L.marker([51.5245, -0.1339], {
    draggable:true
});

marker.addTo(mymap);

marker.on('dragend', function (e) {
  document.getElementById('latitude').value = marker.getLatLng().lat;
  document.getElementById('longitude').value = marker.getLatLng().lng;
});
