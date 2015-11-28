This repository contains examples for how to use the [bolus](https://github.com/dtjohnson/bolus) dependency injection module for Node.js. There are currently two examples:

1. **basic** - This example demonstrates very basic usage of the module including unit testing.
2. **express** - This example demonstrates how the module can be used to build an [Express](http://expressjs.com/) web server with [Sequelize](http://docs.sequelizejs.com/en/latest/) for persistence.

To run the examples, you first need clone the repository locally. Then, open a command prompt in the desired example directory and install the npm modules:
    
    $ npm install
    
Then run the example with:

    $ npm start
    
To run the [Jasmine](http://jasmine.github.io/) unit tests, run:

    $ npm test
