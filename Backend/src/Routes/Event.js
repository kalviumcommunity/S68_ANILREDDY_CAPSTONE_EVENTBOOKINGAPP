const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, getEventBYId, updateEvent, Login, signup } = require('../controller/eventController');

router.get('/', getAllEvents);
router.get('/', getEventBYId);
router.post('/', createEvent);
router.post('/', Login);
router.post('/', signup);
router.put('/', updateEvent);

module.exports = router;