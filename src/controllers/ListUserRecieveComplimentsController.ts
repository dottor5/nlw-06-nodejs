import { Request, Response } from "express";
import ListUserReceiveComplimentsService from "../services/ListUserReceiveComplimentsService";

export default class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;

    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveComplimentsService.execute(id);

    return response.json(compliments);
  }
}
