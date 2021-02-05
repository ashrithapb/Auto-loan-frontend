How to run the project?
This project depends on backend application. So, first run the backend application as mentioned below and then run frontend application.

Backend Communication API of the project: (node.js)
    1.	Download and extract the backend(node.js) code from my GitHub link: https://github.com/ashrithapb/Auto-loan-backend 
    2.	Open the terminal/command prompt and go to the path of the extracted folder (Example: Downloads\Auto-loan-backend-master\Auto-loan-backend-master)
    3.	In the terminal, run the command: npm install
    Once the necessary node_modules are installed, then run the command: node server.js
    4.	If the above procedure is followed, then in the terminal if you see: “port 3200 “ then backend application is working as expected.
    
Frontend (react-redux-typescript)
    1.	Download and extract the backend(node.js) code from my GitHub link: https://github.com/ashrithapb/Auto-loan-frontend 
    2.	Open the terminal/command prompt and go to the path of the extracted folder (example: Downloads\Auto-loan-frontend-master\Auto-loan-frontend-master)
    3.	In the terminal run the command: npm install
    4.	Once the necessary node_modules are installed, then run the command : npm start
    5.	Make sure backend server is running in another terminal. 
    6.	In the browser check http://localhost:3000/ to see the output
    
Application note:
    	The application is made screen responsive.
    	Tested in different browsers such as chrome, safari, Microsoft edge.
    	Following Form field validation is implemented:
        o	All form fields are required for the submission.
        o	Auto price and yearly income are in currency format.
        o	Credit score should be between 300 to 850.
        o	Username should be email id.
        o	Password should be greater than or equal to 8 characters.
        o	Password and confirm password values must be same.
    	If the auto price is above $1,000,000 then custom message is displayed to the user in the landing page based on “bad request” response from the api.
