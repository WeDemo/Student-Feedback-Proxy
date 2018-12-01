// require('../client/header-sidebar-service/server/index.js');
// require('../client/instructors-service/server/index.js');
// require('../client/Student-Feedback/server/index.js');
// require('../client/students-also-bought-service/server/server.js');
const nr = require('newrelic');
// var cluster = require('cluster');

// if (cluster.isMaster) {

//   var cpuCount = require('os').cpus().length;

//     // Create a worker for each CPU
//     for (var i = 0; i < cpuCount; i += 1) {
//         cluster.fork();
//     }

// // Code to run if we're in a worker process
// } else {

// }

const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');


const PORT = 3000;
const app = express();
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public')));

app.get('/courses/:courseId/header', proxy('http://ec2-34-201-82-146.compute-1.amazonaws.com:3003/'));
app.get('/courses/:courseId/recommendedCourses', proxy('http://ec2-52-53-187-75.us-west-1.compute.amazonaws.com:3008'));
app.get('/:Id/instructors', proxy('http://54.183.145.251'));
app.get('/:courseId/reviews', proxy('http://ec2-35-153-179-188.compute-1.amazonaws.com:3002'));
