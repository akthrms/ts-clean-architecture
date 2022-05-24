import { prompt } from "inquirer";
import { TodoController } from "../adapters/TodoController";
import { GetListTodoPresenter } from "../adapters/TodoPresenter";
import { TodoRepository } from "../repositories/TodoRepository";
import { CreateTodoInteractor } from "../usecases/CreateTodoUsecase";
import { GetListTodoInteractor } from "../usecases/GetListTodoUsecase";

const choices = ["TODO List", "New TODO"];

const todoRepository = new TodoRepository();
const createTodoInteractor = new CreateTodoInteractor(todoRepository);
const getListTodoPresenter = new GetListTodoPresenter();
const getListTodoInteractor = new GetListTodoInteractor(
  todoRepository,
  getListTodoPresenter
);
const todoController = new TodoController(
  createTodoInteractor,
  getListTodoInteractor
);

/**
 * コマンド
 */
export const runTodoCommand = async () => {
  const { operation } = await prompt({
    type: "list",
    name: "operation",
    message: "choose your operation",
    choices,
  });

  switch (operation) {
    case choices[0]: {
      const todoList = todoController.getList({}).todoList;
      console.log("id, content, Y/D, created, updated");
      todoList.forEach((todo) => console.log(todo));
      break;
    }

    case choices[1]: {
      const { content } = await prompt({
        type: "input",
        name: "content",
        message: "input your todo content",
      });
      todoController.create({ content });
      break;
    }

    default: {
      console.error("error occurred");
    }
  }
};
