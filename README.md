# Adopt-A-Pal

Required Dependencies:
Google CLI https://cloud.google.com/sdk/docs/install
Node.js https://nodejs.org/en
Flask: pip install flask

--- Get latest dependencies ---
    npm install


Before Starting, run latest build.
to create latest build (use win if on windows, unix for unix systems): 
    yarn create-app-win
    or
    yarn create-app-unix


----- Run on Unix -----
    to start just front-end:
        yarn start

    to start just back-end:
        navigate to api folder,
        activate virtual environment 
            cd api
            source env/bin/activate
            pip install -r requirements.txt
            cd ..
            yarn start-api

    to start server:
        cd api
        source env/bin/activate
        pip install -r requirements.txt
        cd ..
        gunicorn -b :5000 api.main:app



----- Run on Windows -----
    to start just front-end:
        yarn start

    to start just back-end:
        navigate to api folder,
        activate virtual environment 
            cd api
            .\env\Scripts\activate
            pip install -r requirements.txt
            cd ..
            yarn start-api

    to start server:
        cd api
        .\env\Scripts\activate
        pip install -r requirements.txt
        cd ..
        waitress-serve --listen=*:5000 api.main:app



To run a virtual environment so you can install packages without affecting other projects or your global Python installation:
run:
    .\env\Scripts\activate
    pip install google-cloud-storage

If you want to stop using the virtual environment and go back to your global Python, you can deactivate it:
    deactivate