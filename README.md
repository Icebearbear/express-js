flow :
1.  imports of express and setting up ports and listening to ports in server.js
2.  routes from index.js is imported in server.js by passing 'app' as parameter
3.  router library is imported in index.js, exports function is made by taking app as argument.
4.  a new folder called controller is created that consist of files with respective controllers(post,user)
5.  controllers is the one that consists all the logic. create the exports function with its name and logic
6.  import in the controllers into index.js and add the controller with the exports function name to its respective routes
7.  a folder called config that consist of db is created and imported in at controllers file

1. install yarn 

database:
1.  setup db config in config/db.js
2.  all the config is set into the db by sequelize in model/index.js
3.  connect server to db at server.js, the connection only be made once when the sever starts
4.  after the connection is established, db can be used in the controllers for all the logics by creating an object for the db
