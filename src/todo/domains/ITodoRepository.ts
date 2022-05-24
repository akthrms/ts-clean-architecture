import { Todo } from "./Todo";

interface ITodoRepository {
  find(id: number): Todo | undefined;

  findMany(): Todo[];
}
