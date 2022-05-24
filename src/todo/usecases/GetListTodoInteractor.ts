import type { ITodoRepository } from "../domains/ITodoRepository";
import type { Todo } from "../domains/Todo";

/**
 * 全件取得リクエスト
 */
export type GetListRequest = {};

/**
 * 全件取得レスポンス
 */
export type GetListResponse = {
  todoList: Todo[];
};

/**
 * 全件取得ユースケース
 */
export class GetListTodoInteractor {
  /**
   * コンストラクタ
   */
  public constructor(private readonly todoRepository: ITodoRepository) {}

  /**
   * 実行
   */
  public invoke(_request: GetListRequest): GetListResponse {
    return {
      todoList: this.todoRepository.findMany(),
    };
  }
}
