import { model, Schema } from "mongoose";
import { statusEnum } from "../../config/constant";

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
  status: {
    type: String,
    default: statusEnum.ACTIVE,
    enum: Object.values(statusEnum)
  },
})

export const User = model('users', user)