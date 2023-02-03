const {guest} = require("../model");
const { QueryTypes } = require("sequelize"); 
const db = require("../model");
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
    


exports.jebiRender = async (req,res)=> {
    let findjebi = await guest.findAll({where: {game:'jebi'}});
    res.send(findjebi);
}

exports.rouletteRender = async (req,res)=> {
    let findroulette = await guest.findAll({where: {game:'roulette'}});
    res.send(findroulette);
}

exports.dungleRender = async (req,res)=> {
    let finddungle = await guest.findAll({where: {game:'dungle'}});
    res.send(finddungle);
}

exports.tournamentRender = async (req,res)=> {
    let findtournament = await guest.findAll({where: {game:'tournament'}});
    res.send(findtournament);
}

exports.commentCreate = async (req,res)=> {
    const result = await db.sequelize.query(`SELECT count(*) FROM guest`,{ type: QueryTypes.SELECT });
	let rowcount = JSON.stringify(result[0]).split(':')[1].split('}');
    console.log(rowcount[0]);
    let data = {
        id: rowcount[0],
        game: req.body.game,
        comment: req.body.comment
    }
    await guest.create(data);
    let findUpdate = await guest.findOne({where: {id:rowcount[0]}});
    res.send(findUpdate);
}

// exports.jebiDelete = (req,res)=> {
//     console.log(req.body);
// }

