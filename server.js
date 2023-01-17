const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const JWT_SECRET ='m123jn1i9ucbkjs811d&@2s3$devmocho99ch@rIynkjbiwvbjks390bsb82jn29*7j';


const mongoUrl = "mongodb+srv://devmocho:sunflare@cluster0.tsuaeca.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((e) => console.log(e));

require("./models/userDetails");
const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
    const { fname, lname, email, role, password } = req.body;
    
    const encryptPassword = await bcrypt.hash(password, 10);
  
    try {
        const oldUser = await User.findOne({email});

        if (oldUser) {
            return res.send({  error: "User already exists" });
        }

        await User.create({
            fname,
            lname,
            email,
            password: encryptPassword,
            role,
        });
        res.send({status: "success"});
     }
     catch (error) {
         res.send({status: "Something went wrong"});

     }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.send({ error: "User does not exist" });
    }
    if( await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({}, JWT_SECRET);

        if (res.status(201)){
            return res.json({ status: "success", data: token });
        } else {
            return res.status({error:"Something went wrong"});
            }
        }
    res.json({status: "error", error: "Email and password not valid"});
});





const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

// app.post("/post", async (req, res) => {
//     console.log(req.body);
//     const {data} = req.body;
    
//     try {
//         if(data ==  "devmocho"){
//             res.send({status: "success"});
//         } else {
//             res.send({status: "Data not found"});
//         }
//     } catch (error) {
//         res.send({status: "Something went wrong, try again"});
//     }
// });

// require("./models/userDetails");

// const User = mongoose.model("UserInfo");

// app.post("/register", async (req, res) => {
//     const {firstname, lastname, email, password, role} = req.body
//     try {
//         await User.create({
//             fname: firstname,
//             lname: lastname,
//             email: email,
//             password: password,
//             role: role,
//         });
//         res.send({status: "success"});
//     }
//     catch (error) {
//         res.send({status: "Something went wrong"});

//     }

// })

