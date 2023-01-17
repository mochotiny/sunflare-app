const mongoose = require("mongoose");

const VoucherDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: { type: String, unique: true },
        password: String,
        role: String,
    },
    {
        collection: "VoucherInfo",
        
    }
);

mongoose.model("VoucherInfo", VoucherDetailsSchema);
