import { runTodoCommand } from "./todo/infrastructures/TodoCommand";

(async () => {
  while ((await runTodoCommand()) === "Continue") {}
})();
