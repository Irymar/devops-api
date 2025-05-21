# DevOps API Project

🚀 Simple API on Node.js + Express wrapped in Docker.
🔧 Part of a full DevOps portfolio pet-project.

## Endpoints

- `/health` → OK
- `/api` → Hello from DevOps API!

## How to Run

```bash
docker build -t devops-api .
docker run -d -p 3000:3000 --name devops-api devops-api
