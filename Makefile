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
