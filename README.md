# Kontent.ai CLI migrations examples

The Kontent.ai CLI boilerplate aims to help with your first migration code. We've provided sample migration scripts in the `Migrations` folder. These scripts are written in Javascript and Typescript to show you the basic operations.

If you are missing your use case, you might find answers in the [Management API reference](https://kontent.ai/learn/reference/management-api-v2).

The Kontent.ai CLI tool supports only Javascript files, so if you write your migrations in Typescript or any other language you have to transpile your code before running.

## Installation

```sh
npm install
```

## Setup

Before you run your migrations, you need to store some information about the environment locally. 

The environment is defined as a named pair of values. For example, "DEV" environment can be defined as a pair of a specific project ID and Management API key. This named pair of values is stored within your local repository in a configuration file named `.environments.json`.

```sh
# Adds a 'DEV' environment reference.
kontent environment add --name DEV --project-id "<YOUR_PROJECT_GUID>" --api-key "<YOUR_MANAGAMENT_API_KEY>"
```

## Usage

If you've set up an environment using the method above, you can use the prepared scripts to run all migrations in the `Migrations` directory.

```sh
# Executes all migration scripts in the 'Migrations' folder to the 'DEV' environment reference within your Kontent project. 
npm run migrate:all
```

If you want to run a specific migration you can use also script defined in ```packages.json```

```sh
# Executes a migration script named 'my_migration'.
npm run migrate "my_migration"
```

**Tip**: For more information about Kontent migrations, see the [Kontent.ai CLI documentation](https://github.com/kontent-ai/cli/blob/master/README.md).

## Feedback & Contribution

Feedback & Contributions are welcomed. Feel free to take/start an issue & submit PR.
