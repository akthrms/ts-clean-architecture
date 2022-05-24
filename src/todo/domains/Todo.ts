export type Todo = {
  id: number;
  content: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};
