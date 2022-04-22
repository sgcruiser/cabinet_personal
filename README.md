# cabinet_personal

## About this application

- It was created using the React UI framework.
- It allows creating and storing phone numbers of the user's contacts.

- [How To Install App](#install)
- [Rest Api](#rest-api)
- [User Routes](#user)
  - [Registration](#user-registration)
  - [Login](#user-login)
  - [Logout](#user-logout)
  - [Current user](#get-current-user)
- [Contacts Routes](#contacts)
  - [List of contacts](#get-list-of-contacts)
  - [Create](#create-contact)
  - [Delete](#delete-contact)

## Install

    npm install

## Run the app in production mode

    npm start

## Rest Api

A ready-to-use live backend with documentation was used
[по ссылке](https://connections-api.herokuapp.com/docs/).

The REST API to the example app is described below.

## User

## User Registration

### Request

'POST /users/signup'

        Body: {
            "name": string,
            "email" : string,
            "password": string
        }

### Response

        HTTP/1.1 201 Created
        Content-Type: application/json

        Body: {
           "user": {
                "name": string,
                "email": string
                  },
           "token":string
        }

## User Login

### Request

'POST /users/login'

        Body: {
            "email" : string,
            "password": string
        }

### Response

        HTTP/1.1 200 Ok
        Content-Type: application/json

        Body: {
           "user": {
                "name": string,
                "email": string
                  },
           "token":string
        }

## User Logout

### Request

'POST /users/logout'

        Authorization: Bearer

### Response

        HTTP/1.1 200 Ok
        Content-Type: application/json

        Body: {
            "message": string
        }

## Get Current User

### Request

'GET /users/current'

        Authorization: Bearer

### Response

        HTTP/1.1 200 Ok
        Content-Type: application/json

        Body: {
           "user": {
               "name": string,
               "email": string
                  }
        }

## Contacts

## Get List OF Contacts

### Request

'GET /contacts'

        Authorization: Bearer

### Response

        HTTP/1.1 200 Ok
        Content-Type: application/json

        Body: {
            {
                "id": string,
                "name": string,
                "number": string
            },
        }

## Create Contact

### Request

'POST /contacts'

        Authorization: Bearer
        Body: {
            "name": string,
            "number": string
        }

### Response

        HTTP/1.1 201 Ok
        Content-Type: application/json

        Body: {
            {
                "id": string,
                "name": string,
                "number": string
            },
        }

## Delete Contact

### Request

'DELETE /contacts/{contactId}'

        Authorization: Bearer
        contactId = "contact identifier"

### Response

        HTTP/1.1 200 Ok
        Status: contact deleted
        Content-Type: application/json

        Body: {}
