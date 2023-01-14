import bcrypt from 'bcryptjs'

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const securePass = await bcrypt.hash(password, salt);
  return securePass
}

export const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
}