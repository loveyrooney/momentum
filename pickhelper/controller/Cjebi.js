exports.jebi_home = (req,res) => {
    res.render('jebi', {count:0, content:0, array:0, validation:0});
}

exports.jebi_make = (req,res) => {
    console.log(req.query);
    let count = parseInt(req.query.count);
    let customArr = req.query.custom.split(',');
    if( count == customArr.length && req.query.content !== 'custom')
        res.render('jebi', {count:count, content:4, array:customArr, validation:4041});
    else if(customArr.length !== count && req.query.content == 'custom') 
        res.render('jebi', {count:count, content:4, validation:4042});
    else {
        if(req.query.content == 'number') {
            let numArr = [];
            for (i=1; i<count+1; i++) {
                numArr.push(i);
            }
            numArr.sort(() => Math.random() - 0.5);
            console.log('numarr:',numArr);
            res.render('jebi',{count:count, content:2, array:numArr, validation:0});
        } 
        else if (req.query.content == 'king') {
            let kingArr = [];
            for (j=1; j<count; j++) {
                kingArr.push('국민');
            }
            kingArr.push('왕');
            kingArr.sort(() => Math.random() - 0.5);
            console.log('kingarr:',kingArr);
            res.render('jebi',{count:count, content:3, array:kingArr, validation:0});
        } 
        else {
        console.log('customarr:',customArr);
        customArr.sort(() => Math.random() - 0.5);
        res.render('jebi',{count:count, content:4, array:customArr, validation:0});
        }
    }
}

