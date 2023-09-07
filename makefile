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

be-run:
	cd $(BACKEND_DIR) && dotnet run

# Default target
all: fe-install be-build be-build

