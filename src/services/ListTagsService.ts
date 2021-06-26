import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import TagsRepositories from "../repositories/TagsRepositories";

export default class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);
    const tags = await tagsRepositories.find();

    return classToPlain(tags);
  }
}
