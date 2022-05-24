import type { ITodoRepository } from "../domains/Todo";

/**
 * 全件削除リクエスト
 */
export type ResetTodoRequest = {};

/**
 * 全件削除レスポンス
 */
export type ResetTodoResponse = {};

/**
 * 全件削除ユースケース
 */
export class ResetTodoInteractor {
  /**
   * コンストラクタ
   */
  public constructor(private readonly todoRepository: ITodoRepository) {}

  /**
   * 実行
   */
  public invoke(_request: ResetTodoRequest): ResetTodoResponse {
    this.todoRepository.removeMany();
    return {};
  }
}
