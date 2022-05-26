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
└── todo
    ├── controllers
    │   └── TodoController.ts
    ├── domains
    │   └── Todo.ts
    ├── infrastructures
    │   └── TodoCommand.ts
    ├── presenters
    │   └── GetListTodoPresenter.ts
    ├── repositories
    │   └── TodoRepository.ts
    └── usecases
        ├── CreateTodoUsecase.ts
        ├── EditTodoUsecase.ts
        ├── GetListTodoUsecase.ts
        ├── RemoveTodoUsecase.ts
        └── ResetTodoUsecase.ts
```
