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

# Tradeoffs, In no particular order:

* There is no data store. The repository pattern would make it *fairly* painless to replace the simple memory store with a persistent database. Or at least the API probably wouldn't need to change.
* I didn't write any tests. Normally I would, but it's been more than 2 hours already. I'm not in the habit of setting up projects from scratch.
* Route handlers can be injected, but Express doesn't make that straightforward to do. On a large project, it's very worth doing, anyway.
* There are no error handlers. There really should be.
* A real operational app should provide better observability than just the basic logging this does.
* It's nice to have babel transpilation for some of Node's missing ES6 features. I especially prefer to use module imports over node require, but it's too much extra complication for an interview project.
* There is no validation, and there really should be. Some would be provided by an RDBMS, but ideally the app would do its own validation first.
* Ideally the app would expose an OpenAPI spec and live UI, but again that is a bit of extra work to set up on Express.
* Functionally, it would be reasonable to search by multiple fields. City + state , or Street address + city, for example. This would require a more complicated search function.
* If the data store backing this is an RDBMS, then configuring indexes to make these searches perform reasonably well would be complicated. Currently every field is searchable, but indexing every field is likely to give the same or worse performance as having no indexes at all.
* There's no IAM mechanism here, and a client's identity should be considered when doing these searches and crud operations.
