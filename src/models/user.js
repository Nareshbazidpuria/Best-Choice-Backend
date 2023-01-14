import { model, Schema } from "mongoose";

const user = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
})

export const User = model('users', user)