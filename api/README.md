# API Netflix Clone

API REST développée avec Spring Boot pour gérer les films et les catégories.

## Configuration

La configuration de l'application se trouve dans `src/main/resources/application.properties`.

## Structure de l'API

### Endpoints Films

- `GET /api/movies` : Récupérer tous les films
- `GET /api/movies/{id}` : Récupérer un film par son ID
- `POST /api/movies` : Créer un nouveau film
- `PUT /api/movies/{id}` : Mettre à jour un film
- `DELETE /api/movies/{id}` : Supprimer un film

### Endpoints Catégories

- `GET /api/categories` : Récupérer toutes les catégories
- `GET /api/categories/{id}` : Récupérer une catégorie par son ID
- `POST /api/categories` : Créer une nouvelle catégorie
- `PUT /api/categories/{id}` : Mettre à jour une catégorie
- `DELETE /api/categories/{id}` : Supprimer une catégorie

## Base de données

L'application utilise MySQL comme base de données. Le schéma et les données initiales sont définis dans `src/main/resources/data.sql`.

## Développement

Pour lancer l'application en mode développement :

```bash
./mvnw spring-boot:run
```

Pour construire l'application :

```bash
./mvnw clean package
```

## Tests

Pour exécuter les tests :

```bash
./mvnw test
``` 