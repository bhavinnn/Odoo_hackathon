const express = require('express');
const router = express.Router();
const { updateProfileByEmail, getProfileByEmail } = require('../Controllers/profileController');

router.post('/set', updateProfileByEmail);
router.get('/:email', getProfileByEmail); // 👈 New route to fetch profile by email

module.exports = router;
