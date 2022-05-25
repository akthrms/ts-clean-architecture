import { DateTime } from "luxon";
import { todoList } from "../../store";
import type { ITodoRepository, Todo } from "../domains/Todo";

/**
 * TODO: 永続化する
 *
 * Todo リポジトリ
 */
export class TodoRepository implements ITodoRepository {
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
      id: this.getNextTodoId(),
      content: content,
      isDone: false,
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    });
  }

  /**
   * 1 件更新する
   */
  public update(id: number, isDone: boolean): void {
    const index = this.getTodoIndexById(id);
    todoList[index]!.isDone = isDone;
    todoList[index]!.updatedAt = DateTime.now();
  }

  /**
   * 1 件削除する
   */
  public remove(id: number): void {
    const index = this.getTodoIndexById(id);
    todoList[index]!.updatedAt = DateTime.now();
    todoList[index]!.deletedAt = DateTime.now();
  }

  /**
   * 初期化する
   */
  public init(): void {
    todoList.splice(0);
  }

  /**
   * 次の ID を取得する
   */
  private getNextTodoId(): number {
    return todoList.reduce((max, { id }) => (max > id ? max : id), 0) + 1;
  }

  /**
   * インデックスを取得する
   */
  private getTodoIndexById(id: number): number {
    const index = todoList.findIndex((todo) => todo.id === id);

    if (index < 0) {
      throw new Error("Todo Is Not Found");
    }

    return index;
  }
}
