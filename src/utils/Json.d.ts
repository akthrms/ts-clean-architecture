declare module "*/store.json" {
  type Todo = {
    id: number;
    content: string;
    isDone: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
  };

  const value: Todo[];
  export = value;
}
