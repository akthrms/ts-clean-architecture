import type { DateTime } from "luxon";
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
          const created = formatDateTime(createdAt);
          const updated = formatDateTime(updatedAt);
          return `${id}, ${content}, ${isDone}, ${created}, ${updated}`;
        }
      ),
    };
  }
}

/**
 * DateTime をファーマットする
 */
const formatDateTime = (dateTime: DateTime): string =>
  dateTime.toFormat("yyyy-MM-dd HH:mm:ss");
