import * as Table from "cli-table3";
import type { Todo } from "../domains/Todo";
import type {
  GetListTodoResponse,
  IGetListTodoPresenter,
} from "../usecases/GetListTodoUsecase";

/**
 * 全件取得プレゼンター
 */
export class GetListTodoPresenter implements IGetListTodoPresenter {
  /**
   * 実行
   */
  public invoke(todoList: Todo[]): GetListTodoResponse {
    const table = new Table({
      head: ["ID", "Content", "Status", "Created", "Updated"],
    });
    todoList.forEach(({ id, content, isDone, createdAt, updatedAt }) => {
      const done = isDone ? "Done" : "Yet";
      const created = createdAt.toFormat("yyyy-MM-dd HH:mm");
      const updated = updatedAt.toFormat("yyyy-MM-dd HH:mm");
      table.push([id, content, done, created, updated]);
    });
    return { table };
  }
}
