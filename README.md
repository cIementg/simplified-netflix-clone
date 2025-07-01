# Application Netflix Clone

Ce projet est une application de type Netflix clone composée d'une API Spring Boot et d'un frontend React.

## Structure du Projet

Le projet est divisé en deux parties principales :

- `api/` : Backend Spring Boot
- `frontend/` : Frontend React

## Prérequis

- Java 17 ou supérieur
- Node.js 16 ou supérieur
- Maven
- MySQL

## Installation et Démarrage

### Backend (API)

1. Naviguez dans le dossier api :
```bash
cd api
```

2. Installez les dépendances avec Maven :
```bash
./mvnw clean install
```

3. Démarrez l'application :
```bash
./mvnw spring-boot:run
```

L'API sera accessible sur `http://localhost:8080`

### Frontend

1. Naviguez dans le dossier frontend :
```bash
cd frontend
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez l'application :
```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`

## Fonctionnalités

- Affichage des films par catégories
- Interface d'administration pour la gestion des films et des catégories
- Design responsive inspiré de Netflix
- API RESTful pour la gestion des données

## Technologies Utilisées

### Backend
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### Frontend
- React
- Tailwind CSS
- Axios pour les requêtes HTTP 