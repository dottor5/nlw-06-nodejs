import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import UsersRepositories from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}
export default class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      { email: user.email },
      "7243149eb65aea0fb89763a81dd99cac",
      { subject: user.id, expiresIn: "1d" }
    );

    return token;
  }
}
