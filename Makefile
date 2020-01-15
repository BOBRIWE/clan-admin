#!/usr/bin/make

SHELL = /bin/sh

NODE_CONTAINER_NAME := node


docker_bin := $(shell command -v docker 2> /dev/null)
docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)

.DEFAULT_GOAL := init

up: ## Start all containers (in background) for development
	$(docker_compose_bin) up --no-recreate -d
#	$(docker_compose_bin) run --rm "$(NODE_CONTAINER_NAME)" yarn install

down: ## Stop all started for development containers
	$(docker_compose_bin) down

clean: ## Remove images from local registry
	$(docker_compose_bin) down --volumes --rmi local

connect: ## Connect to node container
	$(docker_compose_bin) exec "$(NODE_CONTAINER_NAME)" /bin/bash

init: clean up