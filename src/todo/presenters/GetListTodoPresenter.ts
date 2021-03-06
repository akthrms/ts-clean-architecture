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
      head: ["id", "content", "status", "created", "updated"],
    });
    todoList.forEach(({ id, content, isDone, createdAt, updatedAt }) => {
      table.push([
        id,
        content,
        isDone ? "done" : "yet",
        createdAt.toFormat("yyyy-MM-dd HH:mm"),
        updatedAt.toFormat("yyyy-MM-dd HH:mm"),
      ]);
    });
    return { table };
  }
}
