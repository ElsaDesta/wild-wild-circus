import { Schema, model } from "mongoose";

//create Schema

const ActSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    detail: {
        type: String,
        required: true
    }
});

const Act = model('act', ActSchema);

export default Act;