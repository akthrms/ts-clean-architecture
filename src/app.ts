import { runTodoCommand } from "./todo/infrastructures/TodoCommand";

(async () => {
  while (true) {
    await runTodoCommand();
  }
})();
