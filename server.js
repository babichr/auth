import express from "express";
import favicon from "serve-favicon";
import morgan  from "morgan";
import bodyParser from "body-parser";
import mongo from "mongo";
import mongodb from "mongodb";
import Promise from "mpromise";
import mongoose from "mongoose";
import path from "path";


// Webpack + Express
import webpack  from "webpack";
import { webpackConfig }  from "./webpack.config.js";
import webpackDevServer  from 'webpack-dev-server';
import webpackDevMiddleware  from "webpack-dev-middleware";
import webpackHotMiddleware  from "webpack-hot-middleware";

const app = express();
const compiler = webpack(webpackConfig);
const ObjectID = mongodb.ObjectID;
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));


//DB connection
mongoose.connect('mongodb://localhost:27017/calc');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {});
mongoose.Promise = global.Promise;

//Favicon
app.use(favicon(__dirname + '/static/favicon.ico'));

//Logger
app.use(morgan('combined'));

//Request data parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen('3000', () => {
	console.log('Express works on 3000 port');
});


app.get( "/error", ( req, res ) => {
    res.status(404).end();
});


// URLs
app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/index.html"));
});




