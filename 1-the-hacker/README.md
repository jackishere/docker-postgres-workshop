# docker run

## Verify docker installation

```sh
docker version

Client: Docker Engine - Community
 Version:           19.03.12
...

Server: Docker Engine - Community
 Engine:
  Version:          19.03.12
...
```

## Launch two different instances

```sh
# First instance with postgres 11
docker run \
  --name pg11 \
  -e POSTGRES_PASSWORD=dev_password \
  -d \
  -p 15432:5432 \
  postgres:11

# Second instance with postgres 12
docker run \
  --name pg12 \
  -e POSTGRES_PASSWORD=dev_password \
  -d \
  -p 25432:5432 \
  postgres:12
```

## Check status

```txt
docker ps

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
462483b64f1e        postgres:12         "docker-entrypoint.s…"   8 seconds ago       Up 7 seconds        0.0.0.0:25432->5432/tcp   pg12
83fd32ee0f7e        postgres:11         "docker-entrypoint.s…"   14 seconds ago      Up 14 seconds       0.0.0.0:15432->5432/tcp   pg11
```

## Verify versions within containers

```sh
docker exec pg11 bash -c "su - postgres && psql --version"
# psql (PostgreSQL) 11.9 (Debian 11.9-1.pgdg90+1)

docker exec pg12 bash -c "su - postgres && psql --version"
# psql (PostgreSQL) 12.4 (Debian 12.4-1.pgdg100+1)
```

## Connecting from psql

```sh
# pg11
psql -h localhost -p 15432 -U postgres -W

# pg12
psql -h localhost -p 25432 -U postgres -W

```

## Clean up

```sh
docker rm -f pg11

docker rm -f pg12
```
