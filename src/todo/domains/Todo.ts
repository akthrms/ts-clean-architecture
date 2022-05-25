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
   * 1 件取得する
   */
  find(id: number): Todo | undefined;

  /**
   * 全件取得する
   */
  findMany(): Todo[];

  /**
   * 新規登録する
   */
  insert(content: string): void;

  /**
   * 更新する
   */
  update(todo: Todo): void;

  /**
   * 1 件削除する
   */
  remove(id: number): void;

  /**
   * 初期化する
   */
  init(): void;
}
