# WHAT'S INCLUDED?
 - Client: create-react-app, redux, bootstrap, react-router
 - Server: pg, express
 - Db: postgres 10.3

# GET STARTED
 - First time running? Run `docker-compose up --build`
 - Otherwise, run `docker-compose up`

# USEFUL COMMANDS
 - To clean up old resources: `docker system prune`
 - To run all services: `docker-compose up`
 - To re-build all containers and run: `docker-compose up --build`

# USEFUL NOTES
  - If packages aren't installing, make sure you're in the service's directory!
  - If docker freaks out about network errors, make sure you aren't running any other
    docker containers on your computer. If it's still freaking out after shutting
    those off, run `docker system prune`.
  - The client is proxying any non-html requests to server.
  
# DEPLOYING