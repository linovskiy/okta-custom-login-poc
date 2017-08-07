# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:latest

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Use "docker-compose build --build-arg NODE_ENV=production frontend" to build production code
ARG NODE_ENV
# Pass build arg as environement for build and running
ENV NODE_ENV=${NODE_ENV}

# Prepare app directory
RUN mkdir -p /app
WORKDIR /app

RUN useradd --home-dir /app app
RUN chown -R app:app /app
USER app

#COPY package.json /app/

# Copy all local files into the image.
COPY . /app/

# Install all dependencies of the current project.
RUN npm install

CMD npm start 
EXPOSE 8000
