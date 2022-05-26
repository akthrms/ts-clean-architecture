import { DateTime } from "luxon";
import type { ITodoRepository, Todo } from "../domains/Todo";

/**
 * Todo リスト（インメモリ）
 */
export let inMemoryTodoList: Todo[] = [];

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
    return inMemoryTodoList.filter(({ deletedAt }) => !deletedAt);
  }

  /**
   * 新規登録する
   */
  public insert(content: string): void {
    inMemoryTodoList.push({
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
    inMemoryTodoList[index]!.isDone = isDone;
    inMemoryTodoList[index]!.updatedAt = DateTime.now();
  }

  /**
   * 1 件削除する
   */
  public remove(id: number): void {
    const index = this.getTodoIndexById(id);
    inMemoryTodoList[index]!.updatedAt = DateTime.now();
    inMemoryTodoList[index]!.deletedAt = DateTime.now();
  }

  /**
   * 初期化する
   */
  public init(): void {
    inMemoryTodoList.splice(0);
  }

  /**
   * 次の ID を取得する
   */
  private getNextTodoId(): number {
    return (
      inMemoryTodoList.reduce((max, { id }) => (max > id ? max : id), 0) + 1
    );
  }

  /**
   * インデックスを取得する
   */
  private getTodoIndexById(id: number): number {
    const index = inMemoryTodoList.findIndex((todo) => todo.id === id);

    if (index < 0) {
      throw new Error(`Todo is not found, id: ${id}`);
    }

    return index;
  }
}
