# Docs App

Minimal Node.js + Express app with Docker and Kubernetes manifests.

## Features
- Express HTTP server with JSON parsing
- /health endpoint for probes
- Dockerfile with non-root user and healthcheck
- K8s Deployment + Service manifests

## Try it locally

```powershell
# From this folder
npm install
npm run start
# Open http://localhost:3000/ and http://localhost:3000/health
```

## Docker

```powershell
# Build image
npm run docker:build
# Run container
npm run docker:run
# Test
Invoke-WebRequest http://localhost:3000/health -UseBasicParsing | Select-Object -ExpandProperty Content
```

## Kubernetes (kind/minikube)

```powershell
# Load local image into your cluster (examples)
# kind load docker-image docs:local ; kubectl apply -f k8s.yml
# or for minikube
# minikube image load docs:local ; kubectl apply -f k8s.yml

# Port-forward the service
# kubectl port-forward svc/docs-service 8080:80
# Open http://localhost:8080/health
```
