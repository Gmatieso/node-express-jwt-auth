module.exports.signup_get = async (req, res) => {
    res.render('signup');
}


module.exports.login_get = async (req, res) => {
    res.render('login');
}


module.exports.signup_post = async (req, res) => {
    
    const { email, password } = req.body;
    console.log(email, password);
    res.send('new signup');


}

module.exports.login_post = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    console.log(email, password);
    res.send('user login');
}