import express from "express";
import favicon from "serve-favicon";
import morgan  from "morgan";
import bodyParser from "body-parser";
import mongodb from "mongodb";
import Promise from "mpromise";
import mongoose from "mongoose";
import path from "path";
import jwt from "jsonwebtoken";
import { User } from "../models/models";
import config from "./config";

// Webpack + Express
import webpack  from "webpack";
import { webpackConfig }  from "../webpack.config.js";
import webpackDevMiddleware  from "webpack-dev-middleware";
import webpackHotMiddleware  from "webpack-hot-middleware";


const app = express();
const compiler = webpack(webpackConfig);
const ObjectID = mongodb.ObjectID;
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));



//DB connection
mongoose.connect(config.database);
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {});
mongoose.Promise = global.Promise;

//Favicon
app.use(favicon(__dirname + '/../static/favicon.ico'));
//Auth token
app.set('token', config.token);

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
//API

app.post( "/api/user-registration", (req, res) => {
    let login = req.body.login;
    let email = req.body.email;
    let password = req.body.password;
    const newUser = new User({
        login: login,
        email: email,
        password: password,
        date: new Date()
    });

    newUser.save( (err) => {
        if (!err) {
            res.send({ type: "alert-success" , message: `Thank you for registration `, valid: true });
        }else {
            res.send({ type: "alert-danger", message:`Login or email is already used`, valid: false });
        }
    });
    res.status(200);
});


app.use( "/api/user-login",  ( req, res ) => {


    let login = req.body.login;
    let password = req.body.password;
    db.collection("users").findOne({ login: login },
        (err, user) => {
            if (!err){
                let token = jwt.sign(user, app.get("token"), {
                    expiresIn: 10
                });
                res.json({
                    token: token,
                    user: user,
                });
            }else{
                res.status(500).end();
            }
        }
    )
});

app.use("/api/user/:id", (req, res) => {
    let id = req.params.id;
    // let token = req;
    console.log( req.body.token );
    db.collection("users").findOne({ _id : new ObjectID(id) }, ( err, user ) => {
        if ( err ){
            console.log("error: " + err);
            res.send(err);
        }else{
            res.status(200).json(user)
        }
    })
});

// URLs
app.get('*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/../index.html"));
});




