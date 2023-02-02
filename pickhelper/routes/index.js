const express = require('express');
const router = express.Router();
const controller6 = require('../controller/Cguest');

router.get("/jebidb", controller6.jebiRender);
router.post("/jebicreate", controller6.jebiCreate);
router.post("/jebidelete", controller6.jebiDelete)


module.exports = router;