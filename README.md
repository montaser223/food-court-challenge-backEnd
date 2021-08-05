# Food Court

Simple CRUD operation using **Angular**, **Express**, **MongoDB**.

## Deployment

---

http://food-court.s3-website.us-east-2.amazonaws.com/

## Table of Contents

---

<!-- TOC -->

- [Getting Started](#getting-started)
  - [Setup Your Environment](#setup-your-environment)
- [API Endpoints](#Endpoints)
- [Dependencies](#dependencies)
  <!-- /TOC -->

---

## Getting Started

---

Before executing the following commands, please install npm as stated in the following setup

#### Setup Your Environment

---

1. Install the latest version of NodeJS, npm and MongoDB You can download them at https://nodejs.org/en/download/ and https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

2. clone both fornt end repo from https://github.com/montaser223/food-court-challenge-frontEnd.git and back end repo from https://github.com/montaser223/food-court-challenge-backEnd and follow setup steps for each.

3. Navigate to the project direcotry

4. Type npm install to install required npm packages.

```bash
npm install
```

5. Run server using

```bash
npm start
```

6. Go to the browser and go to the following url: **http://localhost:4200**

## Endpoints

---

**Get all stores**

GET stores/

Result: return all food stoers

**Get a single store**

GET stores/:id

Result: return matched stoers or 404

**Create a store**

POST stores/

Result: return created store

**Update a store**

PUT stores/:id

Result: return updated store

**Delete a store**

DELETE stores/:id

Result: return deleted store

## Dependencies

---

- [Node] (https://nodejs.org/en/download/)
- [npm] (https://nodejs.org/en/download/)
- [MongoDB] (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu)
