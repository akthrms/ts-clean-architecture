import { DateTime } from "luxon";
import { nextId, todoList } from "../../store";
import type { ITodoRepository, Todo } from "../domains/Todo";

/**
 * TODO リポジトリ
 */
export class TodoRepository implements ITodoRepository {
  /**
   * 1 件取得する
   */
  public find(id: number): Todo | undefined {
    return todoList.filter((todo) => todo.id === id && !todo.deletedAt)[0];
  }

  /**
   * 全件取得する
   */
  public findMany(): Todo[] {
    return todoList.filter(({ deletedAt }) => !deletedAt);
  }

  /**
   * 新規登録する
   */
  public insert(content: string): void {
    todoList.push({
      id: nextId(),
      content: content,
      isDone: false,
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    });
  }

  /**
   * 更新する
   */
  public update(todo: Todo): void {
    const { id, content, isDone, createdAt, updatedAt } = todo;
    for (let todo of todoList) {
      if (todo.id === id) {
        todo.content = content;
        todo.isDone = isDone;
        todo.createdAt = createdAt;
        todo.updatedAt = updatedAt;
        break;
      }
    }
  }

  /**
   * 1 件削除する
   */
  public remove(id: number): void {
    for (let todo of todoList) {
      if (todo.id === id) {
        todo.deletedAt = DateTime.now();
        break;
      }
    }
  }

  /**
   * 初期化する
   */
  public init(): void {
    todoList.splice(0);
  }
}
