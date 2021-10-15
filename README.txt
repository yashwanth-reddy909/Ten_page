Task 2
Front-end replica of TEN website

First Unzip the whole folder that you have downloaded and go to the Terminal of your window and type 

cd <Your directory to the downloaded folder>	
(eg: cd C:\Users\John\Downloads\ten_react_frontend\ten_react_frontend> )
press enter

and then type    
npm install 
press enter it hardly takes few mins to install the packages require for this project (package.json file) 

now time to run the application enter this command below
npm start
it will take you to the browser where this appliaction runs


for Veryfing code :-

go to the src/App.js (Home page of this application) in there I used React-router-dom to implement various end points to this application
In src/Components where all the components lies for this application

http://localhost:3000/          home page
http://localhost:3000/courses   where all the courses lies 
http://localhost:3000/cart      cart items are present here if you add any courses to cart
You can check the total price of your cartitems in checkout div  and you can even delete the cart items there.
 