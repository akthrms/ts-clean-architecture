# Clean Architecture Sample

## Usage

```
$ npm i
$ npm run ts-node
```

## Tree

```
src/
├── App.ts
├── Store.ts
└── todo
    ├── adapters
    │   ├── TodoController.ts
    │   └── TodoPresenter.ts
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
