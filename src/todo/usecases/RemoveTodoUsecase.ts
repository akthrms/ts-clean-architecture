import type { ITodoRepository } from "../domains/Todo";

/**
 * 1 件削除リクエスト
 */
export type RemoveTodoRequest = {
  id: number;
};

/**
 * 1 件削除レスポンス
 */
export type RemoveTodoResponse = {};

/**
 * 1 件削除ユースケース
 */
export class RemoveTodoInteractor {
  /**
   * コンストラクタ
   */
  public constructor(private readonly todoRepository: ITodoRepository) {}

  /**
   * 実行
   */
  public invoke(request: RemoveTodoRequest): RemoveTodoResponse {
    const { id } = request;
    this.todoRepository.remove(id);
    return {};
  }
}
