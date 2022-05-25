import { prompt } from "inquirer";
import { TodoController } from "../controllers/TodoController";
import { GetListTodoPresenter } from "../presenters/GetListTodoPresenter";
import { TodoRepository } from "../repositories/TodoRepository";
import { CreateTodoInteractor } from "../usecases/CreateTodoUsecase";
import { EditTodoInteractor } from "../usecases/EditTodoUsecase";
import { GetListTodoInteractor } from "../usecases/GetListTodoUsecase";
import { RemoveTodoInteractor } from "../usecases/RemoveTodoUsecase";
import { ResetTodoInteractor } from "../usecases/ResetTodoUsecase";

export type Command = "Continue" | "Exit";

const choices = [
  "Add New Todo",
  "Change Todo Status",
  "Remove Todo",
  "Reset Todo List",
  "Exit",
];

const validateNumber = (value: string) => {
  return !!value.match(/^\d*$/) || "Please Input a Number";
};

const todoRepository = new TodoRepository();
const todoController = new TodoController(
  new GetListTodoInteractor(todoRepository, new GetListTodoPresenter()),
  new CreateTodoInteractor(todoRepository),
  new EditTodoInteractor(todoRepository),
  new RemoveTodoInteractor(todoRepository),
  new ResetTodoInteractor(todoRepository)
);

/**
 * Todo コマンドを実行する
 */
export const runTodoCommand = async (): Promise<Command> => {
  try {
    console.log("Todo List:");
    console.log(todoController.getList({}).table.toString());

    const { operation } = await prompt({
      type: "list",
      name: "operation",
      message: "Choose Operation",
      choices,
    });

    switch (operation) {
      case choices[0]: {
        const { content } = await prompt({
          type: "input",
          name: "content",
          message: "Input Todo Content",
        });
        todoController.create({ content });
        break;
      }

      case choices[1]: {
        const { id } = await prompt({
          type: "input",
          name: "id",
          message: "Input Todo ID",
          validate: validateNumber,
        });
        const { isDone } = await prompt({
          type: "confirm",
          name: "isDone",
          message: "Is Todo Done?",
        });
        todoController.edit({ id: parseInt(id), isDone });
        break;
      }

      case choices[2]: {
        const { id } = await prompt({
          type: "input",
          name: "id",
          message: "Input Todo ID",
          validate: validateNumber,
        });
        todoController.remove({ id: parseInt(id) });
        break;
      }

      case choices[3]: {
        todoController.reset({});
        break;
      }

      case choices[4]: {
        return "Exit";
      }

      default: {
        throw new Error("Error Occurred");
      }
    }
  } catch ({ message }) {
    console.error(message);
  }

  return "Continue";
};
