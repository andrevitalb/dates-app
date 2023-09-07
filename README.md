# Dates App

## Description

This is a simple app that allows you to add, edit and delete dates. It consists of two sub-packages which each run a server. There is
a **backend** API .NET server, and a **frontend** server that serves Angular code.

## Getting started

This project includes a Makefile that allows mulitple commands for both sub-packages to be ran from the root directory of the project.

### Installation

In order to install all dependencies required for the project, run the following command from the root directory of the project:

```bash
make install
```

### Frontend

Start the Frontend Angular server: `make fe-start`

### Backend

Start the Backend .NET server: `make be-start`

## Using the app

You can access your application as follows:

- Frontend: https://localhost:4200
- Backend: https://localhost:5001
