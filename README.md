
## What is it?
An app to assign engineers to support roles and see who's on support today.

#### The rules
- [x] an engineer can work a maximum of 1 half day shift per day
- [x] an engineer can not work shifts on consecutive days
- [x] an engineer must complete 2 shifts in a two-week period
- [x] must have an api and a presentational frontend

#### The app
The app allows the user to generate which engineers will cover support today. In a real use case, the user would be restricted to generating this only once per day but I've left it open so that you can check that the functionality works as expected.


#### Stack

| Frontend      | Backend       | Database   |
| ------------- |:-------------:| ----------:|
| React         | Node          | PostgreSQL |
|               | Express       |            |


## Running the project
Follow these steps to get the project running on your local machine
```
git clone https://github.com/hamzanaveedmalik/React-Node-Playground.git
cd React-Node-Playground
npm i
npm run dev-start
npm test
```
## Set up the database
1) create a database called `//NameOfDB`

2) create a config-test.env file and put the following key in there

```
export DATABASE_URL='postgres://yourusername:@localhost:5432/NameOfDB'
```

3) build the database
```
npm run build-local-db
```


View the live site [here](https://boiling-ravine-73195.herokuapp.com/).
