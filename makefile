# Variables
BASE_DIR=$(shell pwd)
NETWORK_NAME=library
NETWORK_ID=$(shell docker network ls -qf "name=${NETWORK_NAME}")

# Network
.PHONY: add-network
add-network:
	@if [ -n '${NETWORK_ID}' ]; then \
		echo 'The ${NETWORK_NAME} network already exists. Skipping...'; \
	else \
		docker network create -d bridge ${NETWORK_NAME}; \
	fi

.PHONY: remove-network
remove-network:
	@if [ -n '${NETWORK_ID}' ]; then \
		docker network rm ${NETWORK_NAME}; \
	fi

# Build
.PHONY: build
build: down up

.PHONY: down
down:
	@docker compose down $(container)

.PHONY: up
up: add-network
	@docker compose up -d $(container)
