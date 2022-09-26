# Getting started

1. Install npm and node.js. I used Node v 14.17, but I expect any reasonably modern version would work just fine.
2. Clone the repo.
3. Install dependencies
```
npm i
```
4. Run the app.
```
npm start
```
Or
```
node bin/www
```

The app should now be running at `http://localhost:3000`

# API

## GET /address/search/street?lineOne=string&lineTwo=string
Search by street address. LineTwo is optional.

## GET /address/search/city?city=string
Search by city.

## GET /address/search/state?state=string
Search by state.

## GET /address/search/zip?zip=string
Search by zip code.

## GET /address/:id
Get a single address block by id.

## POST /address
Add an address to the list. The body is the address object as JSON.

## PUT /address/:id
Update the values of the address by id.

## DELETE /address/:id
Remote an address from the list by id.

