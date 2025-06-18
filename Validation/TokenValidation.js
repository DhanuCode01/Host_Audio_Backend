export function isToken(req,res){
if (req.user==null){           //if you have a token
    res.status(401).json({
        Message:"pleace login and Try again"   
    })
    return
}
}




export function isTokenCheck(req){
    let isToken=true;              //this Will change later
    if(req.user==null){     //If you are an customer
        isToken=false;
    }
    return isToken;
}
