const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

const coookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

//authorization, protecting endpoints
passport.use(new JwtStrategy({
    jwtFromRequest : coookieExtractor,
    secretOrKey : "Bryce Nguyen"
},(payload,done)=>{
    User.findById({_id : payload.sub},(err,user)=>{
        if(err)
            return done(err,false);
        if(user)
            return done(null,user);
        else   
            return done(null,false);
    })
}));

//when we try to sign in, authentication using username and password
passport.use(new LocalStrategy((username,password,done)=>{
    User.findOne({username},(err,user)=>{
        //error with database
        if(err)
            return done(err);
        //if no user exists
        if(!user)
            return done(null,false);
        //check if password is correct
        user.comparePassword(password,done);
        
    })
}));