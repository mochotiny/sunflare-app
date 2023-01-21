const mongoose = require("mongoose");

const VoucherDetailsSchema = new mongoose.Schema(
    {
        vouchid: { type: Number, unique: true },
        amount: { type: Number },
        description: { type: String },
        created: { type: Date, default: Date.now },
        resolved: { type: Date},
        author: String,
        resolver: String,
        status: { type: String },
    },
    {
        collection: "VoucherInfo",
        
    }
);

mongoose.model("VoucherInfo", VoucherDetailsSchema);
