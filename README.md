# Task Manager

(This project is in the basic stages and is a work in progress)

A full-stack task management application built with React (frontend) and FastAPI (backend), enabling users to create, view, update, and delete tasks efficiently.

## Features

- Task management with create, read, update, and delete operations
- RESTful API built with FastAPI
- Responsive frontend built with React and Vite
- Axios used for HTTP requests from the frontend
- SQLAlchemy ORM integrated with a MySQL database
- Environment variable support via .env files

## Technologies

- Frontend: React, Vite, Axios
- Backend: FastAPI, SQLAlchemy, Uvicorn
- Database: MySQL
- Environment Management: python-dotenv

## Installation

### Prerequisites

- Node.js and npm
- Python 3.12
- MySQL
- Git

### Clone the Repository

```bash
git clone https://github.com/Jpeacock1o3/Task-Manager.git
cd Task-Manager
```

### Backend Setup

```bash
cd Backend
python3 -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

Create a `.env` file in the `Backend` directory with the following content:

```
DATABASE_URL=mysql+pymysql://<username>:<password>@localhost/<database_name>
```

Replace `<username>`, `<password>`, and `<database_name>` with your MySQL credentials.

Run the server:

```bash
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd ../Frontend
npm install
```

Create a `.env` file in the `Frontend` directory with the following content:

```
VITE_API_URL=http://localhost:8000/api
```

Run the frontend:

```bash
npm run dev
```

## API Endpoints

- `GET /api/tasks` – Retrieve all tasks
- `POST /api/tasks` – Create a new task
- `PUT /api/tasks/{id}` – Update a task by ID
- `DELETE /api/tasks/{id}` – Delete a task by ID

## License

This project is licensed under the MIT License.
