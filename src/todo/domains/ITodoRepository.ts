import type { Todo } from "./Todo";

/**
 * TODO レポジトリ
 */
export interface ITodoRepository {
  /**
   * 新規登録する
   */
  insert(content: string): void;

  /**
   * 全件取得する
   */
  findMany(): Todo[];

  /**
   * 全件削除する
   */
  removeMany(): void;
}
