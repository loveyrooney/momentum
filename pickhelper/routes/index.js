const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');
const controller2 = require('../controller/Csadari');
const controller3 = require('../controller/Croulette');
const controller4 = require('../controller/Cdungle');
const controller5 = require('../controller/Ctournament');
const controller6 = require('../controller/Cguest');

router.get("/", controller.main);
router.get("/sadari", controller2.sadari_home);
router.get("/roulette", controller3.roulette_home);
router.get("/dungle", controller4.dungle_home);
router.get("/tournament", controller5.tournament_home);
router.get("/guest", controller6.guest_home);

module.exports = router;