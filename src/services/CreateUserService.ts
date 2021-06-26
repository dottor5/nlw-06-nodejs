import { getCustomRepository } from "typeorm";
import UserRepositories from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}
export default class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await userRepository.findOne(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = userRepository.create({ name, email, admin, password });

    await userRepository.save(user);

    return user;
  }
}
