import { User } from "../../models/user"

export const signUpService = (body) => {
  return User.create(body)
}

export const getUserService = (filter) => {
  return User.findOne(filter)
}

// export const getUserByFilterService = (filter) => {
//   return User.find(filter)
// }

// export const deletUserService = (id) => {
//   return User.findOneAndDelete({_id: id})
// }

export const updateUserService = (filter, body) => {
  return User.findOneAndUpdate(filter, body, {new: true})
}