const express = require('express');
const router = express.Router();
const controller = require('../controller/Cguest');

router.get("/jebidb", controller.jebiRender);
router.post("/jebicreate", controller.commentCreate);
// router.post("/jebidelete", controller6.jebiDelete);
router.get("/roulettedb", controller.rouletteRender);
router.post("/roulettecreate", controller.commentCreate);
router.get("/dungledb", controller.dungleRender);
router.post("/dunglecreate", controller.commentCreate);
router.get("/tournamentdb", controller.tournamentRender);
router.post("/tournamentcreate", controller.commentCreate);


module.exports = router;