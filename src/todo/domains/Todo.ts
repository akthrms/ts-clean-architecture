import type { DateTime } from "luxon";

/**
 * TODO エンティティ
 */
export type Todo = {
  id: number;
  content: string;
  isDone: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
  deletedAt?: DateTime;
};

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
