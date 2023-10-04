FRONTEND_DIR = packages/frontend
BACKEND_DIR = packages/backend

# Frontend
fe-start:
	cd $(FRONTEND_DIR) && ng serve

fe-build:
	cd $(FRONTEND_DIR) && ng build

fe-install:
	cd $(FRONTEND_DIR) && yarn

# Backend
be-start:
	cd $(BACKEND_DIR) && dotnet watch

be-build:
	cd $(BACKEND_DIR) && dotnet build

be-db:
	cd $(BACKEND_DIR) && dotnet ef database update

be-run:
	cd $(BACKEND_DIR) && dotnet run

be-install:
	cd $(BACKEND_DIR) && dotnet restore

# Global commands
install: fe-install be-install be-db

# Default target
all: fe-install be-build

