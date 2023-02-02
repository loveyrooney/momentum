const jebi = [
    {
        id: 0,
        comment: 'hello, jebicomment0!'
    },
    {
        id: 1,
        comment: 'hello, jebicomment1!'
    },
    {
        id: 2,
        comment: 'hello, jebicomment2!'
    }
] 
    


exports.jebiRender = (req,res)=> {
    res.send(jebi);
}

exports.jebiCreate = (req,res)=> {
    let jebicopy = jebi.concat({
        id:jebi[jebi.length-1].id+1, 
        comment:req.body.comment
    });
    res.send(jebicopy);
}

exports.jebiDelete = (req,res)=> {
    console.log(req.body);
}