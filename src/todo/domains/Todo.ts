import type { DateTime } from "luxon";

/**
 * Todo エンティティ
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
 * Todo レポジトリ
 */
export interface ITodoRepository {
  /**
   * 全件取得する
   */
  findMany(): Todo[];

  /**
   * 新規登録する
   */
  insert(content: string): void;

  /**
   * 1 件更新する
   */
  update(id: number, isDone: boolean): void;

  /**
   * 1 件削除する
   */
  remove(id: number): void;

  /**
   * 初期化する
   */
  init(): void;
}
