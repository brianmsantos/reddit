import db from './../models';

const userController = {};

userController.post = (req, res) => {
    const{ username, password} = req.body;

    //Validation

    const user = new db.user({
        username,
        password,
    });

    user.save().then().catch
};

export default userController;