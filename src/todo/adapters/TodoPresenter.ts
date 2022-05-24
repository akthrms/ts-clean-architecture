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
  invoke(todoList: Todo[]): GetListTodoResponse {
    return {
      todoList: todoList.map(
        ({ id, content, isDone, createdAt, updatedAt }) => {
          const done = isDone ? "D" : "Y";
          const created = createdAt.toFormat("yyyy-MM-dd HH:mm:ss");
          const updated = updatedAt.toFormat("yyyy-MM-dd HH:mm:ss");
          return `${id}, ${content}, ${done}, ${created}, ${updated}`;
        }
      ),
    };
  }
}
