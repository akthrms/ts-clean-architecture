import type { DateTime } from "luxon";

/**
 * TODO エンティティ
 */
export type Todo = {
  id: number;
  content: string;
  isDone: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
  deletedAt?: DateTime;
};
