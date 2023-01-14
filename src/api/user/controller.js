// import { createUserService, deletUserService, getUserByFilterService, getUserService, updateUserService } from "./service";

// export const createUser = async (req, res) => {
//   try {
//     const user = await createUserService(req.body)
//     if (user) {
//       return res.status(201).send({
//         status: 201,
//         message: 'User Created Successfully',
//         success: true,
//         data: user
//       })
//     }
//     return res.status(400).send({
//       status: 400,
//       message: 'Bad Request',
//       success: false,
//       data: {}
//     })

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       status: 500,
//       message: 'Opps! something went wrong',
//       success: false,
//       data: {}
//     })
//   }
// }

// export const getUser = async (req, res) => {
//   try {
//     const user = await getUserService()
//     if (user.length) {
//       return res.status(200).send({
//         status: 200,
//         message: 'User Get Successfully',
//         success: true,
//         data: user
//       })
//     }
//     return res.status(404).send({
//       status: 404,
//       message: 'Not Found',
//       success: true,
//       data: {}
//     })

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       status: 500,
//       message: 'Opps! something went wrong',
//       success: false,
//       data: {}
//     })
//   }
// }

// export const getUserByFilter = async (req, res) => {
//   try {
//     let filter = {
//       name: { $regex: new RegExp(req.query.name, 'i') }
//     }
//     const user = await getUserByFilterService(filter)
//     if (user.length) {
//       return res.status(200).send({
//         status: 200,
//         message: 'User Get Successfully',
//         success: true,
//         data: user
//       })
//     }
//     return res.status(404).send({
//       status: 404,
//       message: 'Not Found',
//       success: true,
//       data: {}
//     })

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       status: 500,
//       message: 'Opps! something went wrong',
//       success: false,
//       data: {}
//     })
//   }
// }

// export const deleteUser = async (req, res) => {
//   try {
//     const user = await deletUserService(req.params.id)
//     if (user) {
//       return res.status(200).send({
//         status: 200,
//         message: 'User Deleted Successfully',
//         success: true,
//         data: user
//       })
//     }
//     return res.status(404).send({
//       status: 404,
//       message: 'Not Found',
//       success: true,
//       data: {}
//     })

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       status: 500,
//       message: 'Opps! something went wrong',
//       success: false,
//       data: {}
//     })
//   }
// }

// export const updateUser = async (req, res) => {
//   try {
//     const user = await updateUserService(req.params.id, req.body)
//     if (user) {
//       return res.status(200).send({
//         status: 200,
//         message: 'User Updated Successfully',
//         success: true,
//         data: user
//       })
//     }
//     return res.status(404).send({
//       status: 404,
//       message: 'Not Found',
//       success: true,
//       data: {}
//     })

//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       status: 500,
//       message: 'Opps! something went wrong',
//       success: false,
//       data: {}
//     })
//   }
// }