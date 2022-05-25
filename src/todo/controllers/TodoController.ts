import type {
  CreateTodoInteractor,
  CreateTodoRequest,
  CreateTodoResponse,
} from "../usecases/CreateTodoUsecase";
import type {
  EditTodoInteractor,
  EditTodoRequest,
  EditTodoResponse,
} from "../usecases/EditTodoUsecase";
import type {
  GetListTodoInteractor,
  GetListTodoRequest,
  GetListTodoResponse,
} from "../usecases/GetListTodoUsecase";
import type {
  RemoveTodoInteractor,
  RemoveTodoRequest,
  RemoveTodoResponse,
} from "../usecases/RemoveTodoUsecase";
import type {
  ResetTodoInteractor,
  ResetTodoRequest,
  ResetTodoResponse,
} from "../usecases/ResetTodoUsecase";

/**
 * Todo コントローラー
 */
export class TodoController {
  /**
   * コンストラクタ
   */
  public constructor(
    private readonly getListTodoInteractor: GetListTodoInteractor,
    private readonly createTodoInteractor: CreateTodoInteractor,
    private readonly editTodoInteractor: EditTodoInteractor,
    private readonly removeTodoInteractor: RemoveTodoInteractor,
    private readonly resetTodoInteractor: ResetTodoInteractor
  ) {}

  /**
   * 全件取得する
   */
  public getList(request: GetListTodoRequest): GetListTodoResponse {
    return this.getListTodoInteractor.invoke(request);
  }

  /**
   * 新規作成する
   */
  public create(request: CreateTodoRequest): CreateTodoResponse {
    return this.createTodoInteractor.invoke(request);
  }

  /**
   * 編集する
   */
  public edit(request: EditTodoRequest): EditTodoResponse {
    return this.editTodoInteractor.invoke(request);
  }

  /**
   * 1 件削除する
   */
  public remove(request: RemoveTodoRequest): RemoveTodoResponse {
    return this.removeTodoInteractor.invoke(request);
  }

  /**
   * 全件削除する
   */
  public reset(request: ResetTodoRequest): ResetTodoResponse {
    return this.resetTodoInteractor.invoke(request);
  }
}
