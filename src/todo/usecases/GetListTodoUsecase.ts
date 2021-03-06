import type { Table } from "cli-table3";
import type { ITodoRepository, Todo } from "../domains/Todo";

/**
 * 全件取得リクエスト
 */
export type GetListTodoRequest = {};

/**
 * 全件取得レスポンス
 */
export type GetListTodoResponse = {
  table: Table;
};

/**
 * 全件取得プレゼンター
 */
export interface IGetListTodoPresenter {
  /**
   * 実行
   */
  invoke(todoList: Todo[]): GetListTodoResponse;
}

/**
 * 全件取得ユースケース
 */
export class GetListTodoInteractor {
  /**
   * コンストラクタ
   */
  public constructor(
    private readonly todoRepository: ITodoRepository,
    private readonly getListTodoPresenter: IGetListTodoPresenter
  ) {}

  /**
   * 実行
   */
  public invoke(_request: GetListTodoRequest): GetListTodoResponse {
    const todoList = this.todoRepository.findMany();
    return this.getListTodoPresenter.invoke(todoList);
  }
}
