// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
}

exports.signup = (req, res) => {
  res.render('signup');
};

exports.post_signup = (req, res) => {
  User.post_signup(req.body,(result) => {
    res.send(result);
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signin = (req, res) => {
  User.post_signin(req.body, (result) => {
    console.log('control: ', res);
    res.send(result);
  });
};

exports.post_profile = (req, res) => {
  User.post_profile(req.body.userid, (result) => {
    console.log();
    res.render('profile' ,{data: result[0]});
  });
};

exports.edit_profile = (req, res) => {
  User.edit_profile(req.body);
  console.log(req.body);

};

exports.delete_profile = (req, res) => {
  User.delete_profile(req.body.id);
  console.log();
  res.render('signin');
}
