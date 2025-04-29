const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, getEventBYId, updateEvent, Login, signup } = require('../controller/EventController');

router.get('/', getAllEvents);
router.get('/:id', getEventBYId);
router.post('/', createEvent);
router.post('/', Login);
router.post('/', signup);
router.put('/:id', updateEvent);

module.exports = router;
