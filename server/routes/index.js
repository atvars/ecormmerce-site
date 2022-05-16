const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const checkRole = require('../middleware/checkRoleMiddleware');

// main router will use these routes
// conected all 4 routers into one
router.use('/user', checkRole('ADMIN'), userRouter);
router.use('/type', checkRole('ADMIN'), typeRouter);
router.use('/brand', checkRole('ADMIN'), brandRouter);
router.use('/device', checkRole('ADMIN'), deviceRouter);

module.exports = router;
