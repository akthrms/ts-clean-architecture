import type { ITodoRepository } from "../domains/ITodoRepository";

/**
 * 新規作成リクエスト
 */
export type CreateTodoRequest = {
  content: string;
};

/**
 * 新規作成レスポンス
 */
export type CreateTodoResponse = {};

/**
 * 新規作成ユースケース
 */
export class CreateTodoInteractor {
  /**
   * コンストラクタ
   */
  public constructor(private readonly todoRepository: ITodoRepository) {}

  /**
   * 実行
   */
  public invoke(request: CreateTodoRequest): CreateTodoResponse {
    this.todoRepository.insert(request.content);
    return {};
  }
}
