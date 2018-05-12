# Derive from node carbon image
FROM node:carbon

# Set working directory to /usr/src
WORKDIR /usr/src

# Copy all source files into container
COPY . .

# Make sure up to date deps are installed
RUN yarn install

# Set up postgres environment variables
ENV PGHOST=db
ENV PGUSER=postgres
ENV PGDATABASE=sampledb
ENV PORT=3001

# Start the server
CMD ["yarn", "run", "start"]