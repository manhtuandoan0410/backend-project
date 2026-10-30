# Smart Health Assistant

A Java backend project for an educational health information application. The planned app includes condition information, symptom-related educational results, and nearby hospitals or clinics. This repository is currently a Spring Boot starter scaffold; these features and authentication are not implemented yet.

> **Health disclaimer:** This app is for educational purposes only. It must not diagnose conditions or replace advice from a qualified healthcare professional. Users should seek professional care for medical concerns and emergency help for emergencies.

## Technology

- Java 21
- Spring Boot 4.1.2
- Maven
- PostgreSQL with Spring Data JPA
- Spring MVC for HTTP APIs
- Bean Validation for validating API input

The current dependencies are listed in [`pom.xml`](./pom.xml). There are no authentication or Google Maps dependencies configured yet.

## Prerequisites

- JDK 21
- PostgreSQL, if running the application with its configured JPA/PostgreSQL dependencies

## Run locally

Create a PostgreSQL database (for example, `smart_health`), then set the connection details in PowerShell:

```powershell
$env:SPRING_DATASOURCE_URL = "jdbc:postgresql://localhost:5432/smart_health"
$env:SPRING_DATASOURCE_USERNAME = "postgres"
$env:SPRING_DATASOURCE_PASSWORD = "your-local-password"
.\mvnw.cmd spring-boot:run
```

Keep credentials out of source control. The database must exist before starting the application. No API endpoints have been implemented yet.

Run the tests:

```powershell
.\mvnw.cmd test
```

## Planned integrations

### Authentication

Choose one authentication approach when adding user accounts:

- For an external identity provider (such as Keycloak, Auth0, or Supabase Auth), add Spring Security and configure the backend to validate the provider's JWTs. The OAuth2 Resource Server starter is commonly used for JWT validation.
- If the frontend uses Firebase Authentication, verify Firebase ID tokens in the backend with the Firebase Admin SDK instead.

Authentication is not currently configured. Protect any future saved health-history endpoints, and collect or retain as little sensitive health data as possible.

### Nearby hospitals and clinics

The backend can call Google Places API (New) Nearby Search to find places near user-provided coordinates. The existing Spring MVC dependency provides Spring's HTTP client APIs; a separate Google Maps Java dependency is not required for making REST requests. A frontend that renders a map may need the appropriate Maps JavaScript SDK separately.

Store the server-side Google API key in an environment variable or secret manager, restrict the key to the required APIs, and review Google Maps Platform pricing and quotas before enabling billing. Do not commit the key. Nearby search returns place results; route distance or travel time may require a separate routing API.

## Initial development goals

1. Add condition search and source-attributed health information from a suitable trusted source.
2. Add carefully scoped educational symptom information with prominent medical safety guidance; do not present it as diagnosis or treatment advice.
3. Add optional authentication and protected history only if needed.
4. Add nearby care search with explicit user permission to use their location.
