# business-contacts
An application serving up business contacts, via Node, Express, and React

## Getting Started
### Option 1 - Run in development (or just without docker)
Run two apps independently:
- Open 2 terminals
- In one terminal, run `npm run start-api` (runs in watch mode on port 3000)
- In the other terminal, run `npm run start-client` (runs in watch mode on port 1234)
- Visit the app at [localhost:1234](https://localhost:1234)

### Option 2 - Running with Docker
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
```sh 
# build the image
docker build . -t business-contacts
# run in a container
docker run -p 3000:3000 business-contacts
# list the running containers
docker ps
# stop a container
docker stop <container-id>
```

## Apps
- Node.js server
- React front end
