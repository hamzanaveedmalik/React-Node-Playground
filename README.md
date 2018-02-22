

#### The app
The app allows the user to generate which engineers will cover support today. In a real use case, the user would be restricted to generating this only once per day but I've left it open so that you can check that the functionality works as expected.


#### Stack

| Frontend      | Backend       | Database   |
| ------------- |:-------------:| ----------:|
| React         | Express       | postgresql |
| Tachyons      | Node          |            |


## Running the project
Follow these steps to get the project running on your local machine
```
git clone https://github.com/jessicasalmon/support-wheel-of-fate.git
cd support-wheel-of-fate
npm i
npm run dev-start // starts the app
npm test // runs the tests
```
## Set up the database
1) create a database called `support-wheel-of-fate`

2) create a config-test.env file and put the following key in there

```
export DATABASE_URL='postgres://yourusername:@localhost:5432/support-wheel-of-fate'
```

3) build the database
```
npm run build-local-db
```

## Roadmap
Some ideas for how I'd extend the project if building out into a product

- Rota: set support shifts in advance
- Swap shifts: not a good day to be on support? Or perhaps you're sick. No worries, swap your shift with a friendly co-worker :smile:
- Future/past views: different views for people: working today, this whole week, next two weeks and the past


View the live site [here](https://which-engineer-is-it-anyway.herokuapp.com/).
