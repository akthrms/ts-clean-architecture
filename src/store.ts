import type { Todo } from "./todo/domains/Todo";

/**
 * TODO リスト
 */
export let todoList: Todo[] = [];

/**
 * 最新の ID を取得する
 */
export const nextId = () =>
  todoList.reduce((max, { id }) => (max > id ? max : id), 0) + 1;
