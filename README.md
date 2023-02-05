# Leave a message...After The Beep
After The Beep is a simple concept with a twist. It's a message board where anyone can post a message and have it visible to the world. Visitors will see all of these messages, which are stored in the backend, when they go to the site. But of course, a situation like this can be very dangerous. Inappropriate content could compromise the integrity of the site. To help with this, After The Beep uses an ML model to detect inappropriate text. If the model determines that the text is inappropriate, the API will prevent the text from being stored in the backend.

# Usage
Just go to the website and use.

# SAFETY LIMITATIONS
Crucial

# Running Locally
    git clone https://github.com/cello-ben/afterthebeep.git
    cd afterthebeep
    npm install
    cd client
    npm install

Create a .env file in the root of the project containing a MONGO_URI and an ORIGIN. The former will allow you to connect to your own instance of MongoDB, and the latter will allow CORS from the React app to the API (http://localhost:3000 if running locally). 

In one terminal window:
    npm start

In another one:
    cd client && npm start

This will work locally. However, make sure to comment out this line in server.js:
    app.use(express.static('/client/build'));

In a future version, I will look into doing this dynamically, and also using concurrently to allow easy use of backend and frontend together in a development environment.

If you want to deploy, in the client directory, run:
    npm run build

If you have commented out the line mentioned previously, uncomment it so that you can access those static files that have been generated.