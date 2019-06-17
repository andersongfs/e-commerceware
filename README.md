# e-commerceware
Challenge proposed by siteware aiming to build a simplified ecommerce.

### Getting Started

Follow these instruction in order to have the project up and running on your local machine.

## Backend
---
#### Prerequisites
* Node 11.13.0;
* Yarn 1.15.2;
---
#### Install the dependencies:
```
cd commerceware-backend
yarn install
```
---
#### Setup database

```
The database is working as service. It's necessary to set an environment variable DATABASE_URI.
```
---
#### Running in development

```
yarn start
```
---
#### Running tests

```
yarn test-integration
```
---
#### Environment Variables

The environment variables imported into the project are saved in the `.env` file to facilitate the development
```
NODE_ENV=development
PORT=PORT=3333

DATABASE_URI=mongodb+srv://<db_app>:<db_app_pass>@cluster-zastd.mongodb.net/test?retryWrites=true&w=majority
DATABASE_TEST_URI=mongodb+srv://<db_app>:<db_app_pass>@cluster-otvlq.mongodb.net/test?retryWrites=true&w=majority
```
---
#### Docs

- [Postman Collection](https://documenter.getpostman.com/view/2610877/S1ZxbV9u)

## Frontend
---
#### Prerequisites

* Node 11.13.0;
* Yarn 1.15.2;
---
#### Installing

Installing the modules.

```
cd commerceware-frontend
yarn install
```
---
#### Running in development

Run Application on [localHost](http://localhost:3000/).

```
yarn start
```
---
#### Environment Variables

The environment variables imported into the project are saved in the `.env` file to facilitate the development
```
REACT_APP_BACKEND_HOST="http://localhost:3333"
```
