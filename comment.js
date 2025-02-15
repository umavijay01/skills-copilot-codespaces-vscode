//Create Web Server to handle incoming requests
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const comment = require('./comment.js');

const hostname = '