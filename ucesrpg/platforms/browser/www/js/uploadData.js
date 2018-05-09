function startDataUpload() {
//creates variables for all inputs by grabbing these inputs from the form
var Question = document.getElementById("Question").value;
var Answer1 = document.getElementById("Answer1").value;
var Answer2 = document.getElementById("Answer2").value;
var Answer3 = document.getElementById("Answer3").value;
var Answer4 = document.getElementById("Answer4").value;
var correct = document.getElementById("correct").value;
//creates an initial string from these values
var postString = "Question="+Question +"&Answer1="+Answer1+"&Answer2="+Answer2+"&Answer3="+Answer3+"&Answer4="+Answer4+"&correct="+correct;
var longitude = document.getElementById("longitude").value;
var latitude = document.getElementById("latitude").value;
//adds the latitude and longitude to the string
postString = postString + "&latitude=" + latitude + "&longitude=" +
longitude;
//posts the string to the database
processData(postString);
alert ("data uploaded");
location.reload();
}
//accesses the uploadData command created in the server file and uses it to post to the database
var client;
function processData(postString) {
 client = new XMLHttpRequest();
 client.open('POST','http://developer.cege.ucl.ac.uk:30286/uploadData',true);
 client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 client.onreadystatechange = dataUploaded;
 client.send(postString);
}

function dataUploaded() {
 // this function listens out for the server to say that the data is ready - i.e.
 if (client.readyState == 4) {
 // change the DIV to show the response
 document.getElementById("dataUploadResult").innerHTML = client.responseText;
 }
}
