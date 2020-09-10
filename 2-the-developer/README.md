# docker-compose

Easily launch Docker stacks

## Working with docker-compose.yaml

```yaml
version: "3"

services:
  postgres:
    image: postgres:12
    ports:
      - 25432:5432
    environment:
      POSTGRES_PASSWORD: "dev_password"
```

## Launch compose

```sh
docker-compose up
# or
docker-compose up -d
```

## Seed initial data or execute scripts

```yaml
services:
  postgres:
    image: postgres:12
    ports:
      - 25432:5432
    environment:
      POSTGRES_PASSWORD: "dev_password"
    volumes:
      - ${PWD}/postgres/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d
```

## Tweak system parameters

```yaml
version: "3"

services:
  postgres:
    image: postgres:12
    ports:
      - 25432:5432
    environment:
      POSTGRES_PASSWORD: "dev_password"
    volumes:
      - ${PWD}/postgres/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d
      - ${PWD}/postgres/pgconfig.conf:/etc/postgresql/postgresql.conf
    command: postgres -c 'config_file=/etc/postgresql/postgresql.conf'
```

## Add the api to the stack

```yaml
api:
  build: ./api
  ports:
    - 3000:3000
  environment:
    PG_CONNECTION_STRING: "postgresql://postgres:dev_password@postgres:5432/postgres"
```

## Launch the app

- http://locahost:3000
- http://localhost:3000/api/users
- http://localhost:3000/api/users/1
