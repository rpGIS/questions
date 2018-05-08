var quiz_array = []
function getQuestions() {
  client = new XMLHttpRequest();

client.open('GET','http://developer.cege.ucl.ac.uk:30286/getGeoJSON/quiz/geom');
  client.onreadystatechange = questionResponse;
  // note don't use questionResponse() with brackets as that doesn't work
  client.send();
}
// create the code to wait for the response from the data server, and process the response once it is received
function questionResponse() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
  // once the data is ready, process the data
  var questiondata = client.responseText;
  loadquestionlayer(questiondata);
  }
}

// convert the received data - which is text - to JSON format and add it to the map
function loadquestionlayer(questiondata) {
  // convert the text received from the server to JSON
  var questionjson = JSON.parse(questiondata );
  // load the geoJSON layer
  var questionlayer = L.geoJson(questionjson,
  {
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.question+'<br> <form> <input type="radio" name="answer", id="1", value="Answer1">'+feature.properties.answer1+ '<br> <input type="radio" name="answer", id="2" value="Answer2">'+feature.properties.answer2+ '<br> <input type="radio" name="answer", id="3", value="Answer3">'+feature.properties.answer3+ '<br> <input type="radio" name="answer", id="4", value="Answer4">' + feature.properties.answer4 +'<br> </form>');
          },

    // use point to layer to create the points
    pointToLayer: function (feature, latlng) {


        question_point = L.marker(latlng, {icon:testMarkerRed});
        quiz_array.push(question_point);
        return question_point

    },
  }).addTo(mymap);
mymap.fitBounds(questionlayer.getBounds());
}
