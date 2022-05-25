# Clean Architecture Sample

Todo CLI App

## Usage

```
$ npm i
$ npm run ts-node
```

## Tree

```
src/
├── app.ts
├── store.ts
└── todo
    ├── adapters
    │   ├── GetListTodoPresenter.ts
    │   └── TodoController.ts
    ├── domains
    │   └── Todo.ts
    ├── infrastructures
    │   └── TodoCommand.ts
    ├── repositories
    │   └── TodoRepository.ts
    └── usecases
        ├── CreateTodoUsecase.ts
        ├── EditTodoUsecase.ts
        ├── GetListTodoUsecase.ts
        ├── RemoveTodoUsecase.ts
        └── ResetTodoUsecase.ts
```
