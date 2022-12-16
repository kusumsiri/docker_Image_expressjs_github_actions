# CI/CD Pipeline with NodeJS Express application
An application that demonstrates how to use a CI/CD pipeline to automate the Docker image build process.

### Introduction
A [CI/CD pipeline](https://www.redhat.com/en/topics/devops/what-cicd-pipeline) is a series of steps that must be taken to deliver a new version of software. In this demonstration, a very simple NodeJS Express file is used as the software source.

### Install
If you intend to run the source code before building the docker image, the following commands can be used.
> Note: This requires your computer to have a [Git client](https://git-scm.com/downloads/guis) and [NodeJS](https://nodejs.org/en/) installed.
```
git clone https://github.com/kusumsiri/ExpressJS_CICD.git
cd ExpressJS_CICD/
npm install
npm start
```
Then visit http://localhost:3000 to test it.

### Building the Docker image
This [Dockerfile](./Dockerfile) contains instructions for build the image. It uses the node:current-alpine image as the base. After that it will copy *.json files, install the packages, copy the source code, set the port and finally copy the run command.
If you intend to build the docker image locally, the following commands can be used.
> Note: This requires your computer to have [Docker](https://www.docker.com/) installed.
```
docker build -t node-js .
```
This command will create a docker image and name it as `node-js:latest`. To check its name run following command.
```
docker images
```
Then execute the following command to run the container.
```
docker run --rm -p 3000:3000 node-js
```
Then visit http://localhost:3000 to test it.

> Note: All these steps must be performed manually when the Docker container needs to be created. But we can automate the process by using a CI/CD pipeline.

### CI/CD Pipeline
The [main.yml](/.github/workflows/main.yml) file that handles the CI/CD process. It `checkout` the source code from GitHub repository, `builds` the image according to the Dockerfile and finally `push` the image to [docker hub](https://hub.docker.com/repository/docker/kusumsiri/expressjs)

Now anyone can go to [Docker Hub](https://hub.docker.com/repository/docker/kusumsiri/expressjs) and `pull` the image and `run` it easily.
