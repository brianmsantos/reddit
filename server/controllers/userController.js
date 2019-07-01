import db from './../models';

const userController = {};

//Pulling out username and password from our response, req body
userController.post = (req, res) => {
    const{ username, password} = req.body;

    //Validation
    //Making a new instance of user
    const user = new db.User({
        username,
        password,
    });

    //save to collection,
    user.save().then((newUser)=>{
        res.status(200).json({
          success: true,
          data: newUser,
        })
    }).catch((err)=>{
        res.status(500).json({
          message: err,
        });
    });
};

export default userController;