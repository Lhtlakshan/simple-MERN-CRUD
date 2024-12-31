const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get("/users", controller.getUsers);
router.post('/add-user',controller.addUser);
router.put('/update-user',controller.updateUser);
router.delete('/delete-user',controller.deleteUser);

module.exports = router;