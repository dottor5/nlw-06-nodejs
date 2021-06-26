import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UsersRepositories from "../repositories/UsersRepositories";

export default async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  console.log(id);

  const usersRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(id);

  if (admin) {
    return next();
  }

  return response.status(401).json({ error: "Unauthorized" });
}
