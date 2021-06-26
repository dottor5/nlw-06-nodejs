import { Request, Response } from "express";
import ListUserSendComplimentsService from "../services/ListUserSendComplimentsService";

export default class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;

    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const compliments = await listUserSendComplimentsService.execute(id);

    return response.json(compliments);
  }
}
