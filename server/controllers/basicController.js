// This will handle our business logic.  Our initial route right here. 
const basicController = {};

basicController.get = (req, res) => {
    res.json({
        message: 'Welcome to our API!'
    });
};

export default basicController;
