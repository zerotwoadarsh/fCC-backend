const express = require ('express')

const app = express()

app.use(express.json());
app.listen(3000);

let users=[];

const userRouter = express.Router();
const authRouter = express.Router()
app.use('/user', userRouter)
app.use('/user', authRouter)

userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter.route('/:id').get(getUserById);

authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp);

function getUser(req,res){
    res.send(users);
}

function postUser(req,res){
    console.log(req,res);
    users=req.body;
    res.json({
        message:"dara received succesfully",
        user:req.body
    })
}  

function updateUser(req,res){
    console.log('req.body', req.body);
    let dataToBeUpdated = req.body;
    for( key in dataToBeUpdated){
        users[key]= dataToBeUpdated[key];
    }
    req.json({
        message:"data updated Successfully"
    })
}

function deleteUser(req, res){
    users = {};
    req.json({
        message:"data deleted"
    })
}

function getUserById(req,res){
    console.log(req.params.id);
    let paramId = req.params.id;
    let obj = {};
    for (let i = 0; i < users.length; ++i){
        if(users[i]['id'] == paramId){
            obj = users[i];
        }
    }
    res.json({
        message : "req received",
        data : obj
    });
}

function getSignUp(req,res){
    res.sendFile('/public/index.html', {root: __dirname});
}

function postSignUp(req, resp){
    let obj = req.body;
    res.json({
        message : 'user signed up',
        data : obj
    })
}