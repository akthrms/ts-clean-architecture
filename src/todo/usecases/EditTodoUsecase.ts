import type { ITodoRepository } from "../domains/Todo";

/**
 * 更新リクエスト
 */
export type EditTodoRequest = {
  id: number;
  isDone: boolean;
};

/**
 * 更新レスポンス
 */
export type EditTodoResponse = {};

/**
 * 更新ユースケース
 */
export class EditTodoInteractor {
  /**
   * コンストラクタ
   */
  public constructor(private readonly todoRepository: ITodoRepository) {}

  /**
   * 実行
   */
  public invoke(request: EditTodoRequest): EditTodoResponse {
    const { id, isDone } = request;
    this.todoRepository.update(id, isDone);
    return {};
  }
}
