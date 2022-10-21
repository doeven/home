## .Env
Both .env and .env.production should be placed in the root directory. Also, make sure to match your subdomain accordingly. Refer to Ghost Clan API for the backend and authentication

### .env file (for Local Host dev)

    REACT_APP_NAME_URL=localhost:5002
    REACT_APP_NAME_STANDARD="Local Test"
    PORT=8888
    REACT_APP_API_URL=http://localhost:8000
    REACT_APP_WEB_APP_URL=http://localhost:5002

### .env.production file (for Production server )

    REACT_APP_NAME_URL=doeveninvestments.com
    REACT_APP_NAME_STANDARD="Doeven Investment"

    REACT_APP_API_URL=https://api.doeveninvestments.com
    REACT_APP_WEB_APP_URL=https://app.doeveninvestments.com