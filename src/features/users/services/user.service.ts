import { userRepository } from "../repositories/user.repository";

export const userService = {
  getAllUsers: () => userRepository.findAll(),
  getUserById: (id: number) => userRepository.findById(id),
  createUser: (data: any) => userRepository.create(data),
};
