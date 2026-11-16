# Contributing

This guide covers running the application locally, checking your changes, and submitting a pull request.

## Prerequisites

- Node.js 20 or newer and npm
- Docker Desktop (or Docker Engine) with the Docker Compose plugin
- Git
- On Windows, use Git Bash or WSL for the npm commands below. The test and build scripts use POSIX shell syntax.

## Install dependencies

From the repository root, install the project dependencies:

```sh
npm install
```

## Run the full stack with Docker Compose

This starts the application. The app container runs pending database migrations on startup.

```sh
docker compose up -d --build
```

- Application: <http://localhost:3000>

To follow startup logs, run `docker compose logs -f <service>` depending on the service you want to read logs (backend, db, frontend, mobile). Stop the services with `docker compose down`. Add `-v` only if you also intend to delete the persisted PostgreSQL data.

## Branches, commits, and pull requests

- Name branches `type/ticket-number-short-description`, for example `feat/60-user-settings-backend`.
- Use Conventional Commit messages in the form `type: short summary`, such as `feat: add POST /tasks endpoint`.
- Keep a pull request focused on one story, describe what changed and why, and link the story or issue.
- Ensure CI passes and request at least one approval. Pull requests are squash-merged.