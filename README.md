# webapp
This app provides an input form to be used from a computer-based browser. The forms input will be uploaded to a database on submission. The web app can be accessed through the use of the ucesrpg folder in this repository, combined with the httpServer file in the server repository.
# Loading the app
In order to load up the app go to the server folder provided in the server repository and node it. This must be done from a UCL network or UCL VPN connection. Here is the commands needed in BitVise.
```
cd server
node httpServer.js &
```
Once you have done this, go to the questions folder and use the phonegap serve command to serve the app to the server:
```
cd ..
cd questions
phonegap serve
```
# Using the app
go to http://developer.cege.ucl.ac.uk:31286/ to view the app
The app is split into two areas. On the left side is a leaflet map containing a draggable marker. This must be dragged from its orginal position to a position of your choice, at which point it will update the coordinate boxes to the right.
The right side is where a question and four potential answers is enterred. All areas must be filled in before submitting.
You must also select the correct answer from the drop down menu (the default is the first answer) 
The page also has two links at the top right, the github logo takes you to my github repository, while the help button accesses a user guide.
