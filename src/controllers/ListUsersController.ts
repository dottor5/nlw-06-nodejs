import { Request, Response } from "express";
import ListUserService from "../services/ListUsersService";

export default class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = new ListUserService();

    const users = await listUsersService.execute();

    return response.json(users);
  }
}
