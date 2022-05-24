import type {
  CreateTodoInteractor,
  CreateTodoRequest,
  CreateTodoResponse,
} from "../usecases/CreateTodoUsecase";
import type {
  GetListTodoRequest,
  GetListTodoResponse,
  GetListTodoInteractor,
} from "../usecases/GetListTodoUsecase";

/**
 * TODO コントローラー
 */
export class TodoController {
  /**
   * コンストラクタ
   */
  public constructor(
    private readonly createTodoInteractor: CreateTodoInteractor,
    private readonly getListTodoInteractor: GetListTodoInteractor
  ) {}

  /**
   * 新規作成する
   */
  public create(request: CreateTodoRequest): CreateTodoResponse {
    return this.createTodoInteractor.invoke(request);
  }

  /**
   * 全件取得する
   */
  public getList(request: GetListTodoRequest): GetListTodoResponse {
    return this.getListTodoInteractor.invoke(request);
  }
}
