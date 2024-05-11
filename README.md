THE CHAT ROOMS By Engr. Christian Padilla  May 2024
Features:
- make register user 
- make login user 
- create multiple chat room 
- join chat room 
- send and receip messages
- search for message by chat room filter 
- testing UnitTest module 


How To? 
First you need configure MongoDB string connection, with your own MongoDB server
1- Go to .env file on /back-master and page/replace DATABASE= value

Install 
1- Go to /back-master directory and run this command: 
npm i

2- now run:
npm start 

the back will start and give you a message if you MongoDB connection succed. 

3- Go to /front-master directory and run this command: 
npm i

FAQ AND CAMMON ISSUES - NOTE NOTE NOTE 
if you have ssl error on console, please run this command
npm update

now in the frontend folder path run this command
set NODE_OPTIONS=--openssl-legacy-provider

4- now run on /front-master:
npm start 

this command will take you to the web app on your browser.

""""" READY LET'S CHAT """"""
Note: Performance and UX is only optimiced for web version on pc, laptops and desktop.


TESTING 
just run next command on respective folder 
npm test

BUILD FOR PERFORMANCE
you can run the project on the folder for maximize performance, justo run 
npm run build

All righs reserved @2024 
THE CHAT ROOMS By Engr. Christian Padilla  May 2024