const router = require('express').Router();
const UserController = require('../controllers/userController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.get("/" ,verifyTokenAndAuthorization, UserController.getUser);
router.delete("/l" ,verifyTokenAndAuthorization, UserController.deleteUser);
router.get("/verify/:otp" ,verifyTokenAndAuthorization, UserController.verifyAccount);
router.get("/verify_phone/:phone" ,verifyTokenAndAuthorization, UserController.deleteUser);


module.exports = router;
