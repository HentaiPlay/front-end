export default function(ctx){
    if(ctx.route.fullPath == "/equipment") ctx.redirect(301, "/");
    if(ctx.route.fullPath == "/gallery") ctx.redirect(301, "/");
}