up:
	docker-compose up -d 
build: 
	docker-compose up --build
dev: 
	docker-compose -f docker-compose.dev.yml up -d
build-dev: 
	docker-compose -f docker-compose.dev.yml up --build
down: 
	docker-compose down
db: 
	docker-compose -f docker-compose.database.yml up --build

up-react:
	docker-compose -f docker-compose.dev.yml up -d  client
build-react:
	docker-compose -f docker-compose.dev.yml up --build  client

up-api:
	docker-compose -f docker-compose.dev.yml up -d  api
build-api:
	docker-compose -f docker-compose.dev.yml up --build  api

up-db:
	docker-compose -f docker-compose.dev.yml up -d  database
build-db:
	docker-compose -f docker-compose.dev.yml up --build  database