// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 기본 주소: localhost:PORT/user

// GET / => localhost:PORT/user
router.get('/', controller.main);

router.get('/signup', controller.signup);
router.post('/signup', controller.post_signup);

router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);

router.post('/profile', controller.post_profile)
router.post('/profile/edit', controller.edit_profile)
router.post('/profile/delete', controller.delete_profile)

module.exports = router;