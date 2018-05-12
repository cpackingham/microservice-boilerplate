# Derive from node carbon image
FROM node:carbon

# Set working directory to /usr/src
WORKDIR /usr/src

# Copy all source files into container
COPY . .

# Make sure up to date deps are installed
RUN yarn install

# Start the server
CMD ["yarn", "run", "start"]