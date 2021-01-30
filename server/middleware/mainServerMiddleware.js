export default (req, res, next) => {
    // A simple one coded redirect
    if(req.path == "/equipment"){
        res.redirect(301, "/");
        return;
    }
    if(req.path == "/gallery"){
        res.redirect(301, "/");
        return;
    }

    //if you redirect you shouldn't run next()!
    next(); 
};