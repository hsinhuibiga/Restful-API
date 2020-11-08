// user.route.js
import express from 'express';
import userCtrl from '../controllers/user.controller';

const router = express.Router();

router.route('/').post(userCtrl.userPost); /** 新增 User 值組 */

export default router;