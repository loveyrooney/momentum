const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');
const controller2 = require('../controller/Cjebi');
const controller3 = require('../controller/Croulette');
const controller4 = require('../controller/Cdungle');
const controller5 = require('../controller/Ctournament');
const controller6 = require('../controller/Cguest');

router.get("/", controller.main);
router.get("/jebi", controller2.jebi_home);
router.get("/roulette", controller3.roulette_home);
router.get("/dungle", controller4.dungle_home);
router.get("/tournament", controller5.tournament_home);
router.get("/guest", controller6.guest_home);

router.get("/jebimake", controller2.jebi_make);

module.exports = router;