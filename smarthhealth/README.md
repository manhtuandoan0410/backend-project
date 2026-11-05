# Smart Health Assistant

A Java backend project for an educational health information application. The planned app includes condition information, symptom-related educational results, and nearby hospitals or clinics. This repository is currently a Spring Boot starter scaffold; these features and authentication are not implemented yet.

> **Health disclaimer:** This app is for educational purposes only. It must not diagnose conditions or replace advice from a qualified healthcare professional. Users should seek professional care for medical concerns and emergency help for emergencies.

## Technology

- Java 17
- Spring Boot 4.1.2
- Maven
- PostgreSQL with Spring Data JPA
- Spring MVC for HTTP APIs
- Bean Validation for validating API input

The current dependencies are listed in [`backend/pom.xml`](./backend/pom.xml). There are no authentication or Google Maps dependencies configured yet.

## Project layout

```text
backend/src/main/java/fi/haagahelia/smarthhealth/
├── config/             # Application and NHS API configuration
│   ├── NhsApiConfig.java
│   └── SecurityConfig.java
├── domain/             # Entity placeholders, such as users and health records
├── integration/nhs/    # NHS API client
├── repository/         # Repository placeholders
├── service/            # Application and NHS business logic
└── web/                # NHS, symptom-search, and history controllers; DTOs and API errors
backend/src/main/resources/
└── application.properties
frontend/src/            # React application
FinalProject.md          # Initial feature requirements
```

This is a scaffold: the NHS client, services, repositories, and controllers do not yet implement the planned features. The symptom-search endpoint currently validates its minimum input count but returns `501 Not Implemented`; matching against NHS information is not implemented. The exact NHS API and its authentication requirements still need to be selected from the [NHS API catalogue](https://digital.nhs.uk/developer/api-catalogue). See [FinalProject.md](./FinalProject.md) for the feature outline.

The intended access model is:

- NHS condition-information searches are available without signing in.
- Symptom search is a separate educational flow, requires at least three non-blank symptoms, and must not present possible matches as a diagnosis.
- Saving and viewing sickness history requires a signed-in user. History must be private to that account; every backend operation must enforce ownership, and records must never be exposed publicly or to another user.
- Treat sickness history as sensitive health data: avoid real personal data in demos and tests, keep it out of logs, and provide appropriate deletion controls.

The current frontend is a React scaffold; the target mobile framework and authentication provider have not yet been selected. These choices must be settled before implementing client authentication and protected history.

## Prerequisites

- JDK 17
- PostgreSQL, if running the application with its configured JPA/PostgreSQL dependencies

## Run locally

From the project root, create a PostgreSQL database (for example, `smart_health`), then set the connection details in PowerShell and run the backend:

```powershell
cd backend
$env:SPRING_DATASOURCE_URL = "jdbc:postgresql://localhost:5432/smart_health"
$env:SPRING_DATASOURCE_USERNAME = "postgres"
$env:SPRING_DATASOURCE_PASSWORD = "your-local-password"
.\mvnw.cmd spring-boot:run
```

Keep credentials out of source control. The database must exist before starting the application.

Run the backend tests from the `backend/` directory:

```powershell
.\mvnw.cmd test
```

## Run the frontend

The React frontend is in the sibling `frontend/` folder and runs separately from Spring Boot during development. Open a second terminal from the `smarthhealth/` project folder:

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build` from the `frontend/` directory.

## Planned integrations

### Authentication

Choose one authentication approach when adding user accounts:

- For an external identity provider (such as Keycloak, Auth0, or Supabase Auth), add Spring Security and configure the backend to validate the provider's JWTs. The OAuth2 Resource Server starter is commonly used for JWT validation.
- If the frontend uses Firebase Authentication, verify Firebase ID tokens in the backend with the Firebase Admin SDK instead.

Authentication is not currently configured. Public NHS search endpoints should remain separate from authenticated history endpoints. Protect every history operation with authentication and per-user authorization, and collect or retain as little sensitive health data as possible.

### Nearby hospitals and clinics

The backend can call Google Places API (New) Nearby Search to find places near user-provided coordinates. The existing Spring MVC dependency provides Spring's HTTP client APIs; a separate Google Maps Java dependency is not required for making REST requests. A frontend that renders a map may need the appropriate Maps JavaScript SDK separately.

Store the server-side Google API key in an environment variable or secret manager, restrict the key to the required APIs, and review Google Maps Platform pricing and quotas before enabling billing. Do not commit the key. Nearby search returns place results; route distance or travel time may require a separate routing API.

NHS health information and Google Places are separate integrations: use the NHS client for NHS catalogue APIs and add a separate integration for Google Places if nearby-care search is implemented.

## Initial development goals

1. Add public condition search and source-attributed health information from the selected NHS API.
2. Add carefully scoped educational symptom information with prominent medical safety guidance; do not present it as diagnosis or treatment advice.
3. Add authentication and private, per-user sickness history.
4. Add nearby care search with explicit user permission to use their location.
