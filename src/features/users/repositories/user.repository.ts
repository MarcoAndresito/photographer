import User from "../models/user.model";

export const userRepository = {
  findAll: async () => User.findAll(),
  findById: async (id: number) => User.findByPk(id),
  create: async (data: Partial<User>) => User.create(data),
  update: async (id: number, data: Partial<User>) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return user.update(data);
  },
  delete: async (id: number) => {
    const user = await User.findByPk(id);
    if (!user) return false;
    await user.destroy();
    return true;
  },
};
