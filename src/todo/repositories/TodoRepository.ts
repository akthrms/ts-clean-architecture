import { DateTime } from "luxon";
import type { ITodoRepository } from "../domains/ITodoRepository";
import type { Todo } from "../domains/Todo";
import { nextId, todoList } from "../../store";

/**
 * TODO リポジトリ
 */
export class TodoRepository implements ITodoRepository {
  /**
   * 新規登録する
   */
  insert(content: string): void {
    todoList.push({
      id: nextId(),
      content: content,
      isDone: false,
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    });
  }

  /**
   * 全件取得する
   */
  findMany(): Todo[] {
    return todoList.filter(({ deletedAt }) => !deletedAt);
  }

  /**
   * 全件削除する
   */
  removeMany(): void {
    todoList.splice(0);
  }
}
