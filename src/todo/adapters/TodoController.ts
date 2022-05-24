import type {
  CreateTodoInteractor,
  CreateTodoRequest,
  CreateTodoResponse,
} from "../usecases/CreateTodoUsecase";
import type {
  GetListTodoInteractor,
  GetListTodoRequest,
  GetListTodoResponse,
} from "../usecases/GetListTodoUsecase";
import type {
  ResetTodoInteractor,
  ResetTodoRequest,
  ResetTodoResponse,
} from "../usecases/ResetTodoUsecase";

/**
 * TODO コントローラー
 */
export class TodoController {
  /**
   * コンストラクタ
   */
  public constructor(
    private readonly createTodoInteractor: CreateTodoInteractor,
    private readonly getListTodoInteractor: GetListTodoInteractor,
    private readonly resetTodoInteractor: ResetTodoInteractor
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

  /**
   * 全件削除する
   */
  public reset(request: ResetTodoRequest): ResetTodoResponse {
    return this.resetTodoInteractor.invoke(request);
  }
}
