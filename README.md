# Kontent.ai migrations examples

The Kontent.ai migrations boilerplate aims to provide a exemplary introduction in developing migrations using [Kontent.ai data-ops](https://github.com/kontent-ai/data-ops). Migrations allow you to perform any operation supported by the [Management API](https://kontent.ai/learn/reference/management-api-v2) through smaller executable scripts. This repository showcases various migration scenarios, including the creation of different entities. Each migration also includes a rollback function to reverse the changes made by the migration.

> [!NOTE]
> The migrations in this repository are written in `TypeScript` and must be transpiled before execution.

## Quickstart

1. Install required depencies 
    ```sh
    npm ci
    ```
1. Set up mandatory parameters for data-ops migrations:
    * Copy `exampleParams.json` and rename it to `migrationsParams.json`
    * Fill in the missing parameters for your environment.
1. Inspect the migrations in the `src` folder.
1. Examine prepared scripts in `package.json`.
1. Try out the scripts
    - e.g. `npm run migrate:all` to run all of the migrations
> [!TIP]
> You can add additional parameters using `--`. For example, to rollback next 5 migrations, use `npm run migrate:next -- 5 -b`.

> [!TIP]
> You can view all parameters by using `npm run data-ops -- migrations <command> --help`