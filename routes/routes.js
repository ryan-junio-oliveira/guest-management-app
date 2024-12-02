const express = require('express');
const router = express.Router();
const guestController = require('../controllers/GuestController.js');

router.get('/', guestController.getGuests);
router.post('/add', guestController.createGuest);
router.post('/edit/:id', guestController.updateGuest);
router.post('/delete/:id', guestController.deleteGuest);

module.exports = router;
