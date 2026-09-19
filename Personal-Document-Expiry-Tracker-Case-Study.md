# Personal Document Expiry Tracker — Case Study

## Project overview

The Personal Document Expiry Tracker is a full-stack web application that helps users manage time-sensitive personal documents such as passports, driving licences, insurance policies, certificates, warranties, memberships, and vehicle documents.

The application stores each document's issue date, expiry date, reminder date, category, and supporting details. It then calculates the document's current state and presents timely notifications through the application header, Dashboard, and Reminders page.

## The problem

People often manage important documents in different places and rely on memory or calendar entries to renew them. Missing an expiry date can cause travel disruption, legal issues, loss of insurance coverage, or additional renewal costs.

The project needed to provide one secure location where a user could:

- Register and sign in to a personal account.
- Add, view, edit, search, filter, sort, and delete documents.
- Organize documents by category.
- See the number of active, expiring, and expired documents.
- Receive a continuous reminder from the configured reminder date through expiry.
- See expired documents until they are renewed or updated.
- Keep one user's documents isolated from every other user.

## The solution

The system uses an Angular single-page application connected to an ASP.NET Core REST API. The API applies authentication, ownership checks, validation, business rules, and database access. Entity Framework Core maps the domain models to a MySQL database and manages schema changes through migrations.

Document dates remain the source of truth. Notification messages, priorities, and remaining or overdue days are calculated from the current local calendar date. The database stores only the last notification status read by the user. This prevents duplicate daily records and avoids saving messages that quickly become outdated.

## Main features

### Authentication and account security

- User registration and login.
- Password hashing through ASP.NET Core `PasswordHasher<TUser>`.
- JWT bearer authentication with issuer, audience, signature, and expiry validation.
- Protected API endpoints and Angular route protection.
- User-specific document queries that prevent access to another user's records.
- Profile and reminder-setting management.

### Document management

- Create, read, update, and delete operations.
- Category assignment and seeded default categories.
- Search, category filtering, status filtering, and sorting.
- Validation requiring an expiry date.
- Validation that the expiry date cannot precede the issue date.
- Validation that the reminder date cannot follow the expiry date.
- Automatic status and remaining-day calculation.

### Expiry notifications

The notification engine applies these date-only rules:

```text
Today < ReminderDate
    No notification

Today >= ReminderDate AND Today < ExpiryDate
    ReminderActive

Today == ExpiryDate
    ExpiresToday

Today > ExpiryDate
    Expired
```

For example, with a reminder date of 20 August 2026 and an expiry date of 20 September 2026:

- Before 20 August: no notification.
- 20 August–19 September: `ReminderActive`.
- 20 September: `ExpiresToday`.
- After 20 September: `Expired`.

The calculation extracts calendar components before calculating day differences. This avoids a document appearing expired one day early because of UTC conversion or a time component.

### Notification experience

- Bell icon in the authenticated header.
- Badge showing the unread notification count.
- Dropdown showing document name, category, expiry date, status, priority, and message.
- Direct link from a notification to its document.
- Dashboard totals for Expiring Soon, Expiring Today, and Expired.
- Reminders page grouped into Expires Today, Expired, and Reminder Active.
- Automatic recalculation at local midnight, after login, after refresh, and when document dates change.
- Notifications become unread again when their calculated status changes.

### Read-state design

Only one `DocumentNotification` row is allowed for each document. The row stores `LastReadStatus`, rather than storing a generated message or the number of days remaining.

If a user reads a `ReminderActive` notification, it remains read while that status stays unchanged. On the expiry date, the computed status becomes `ExpiresToday`; because this differs from `LastReadStatus`, the notification becomes unread again. The same process occurs when it becomes `Expired`.

This approach keeps the database small and makes the current document dates authoritative.

## System architecture

```text
Angular SPA
    |
    | HTTPS / JSON REST requests with JWT Bearer token
    v
ASP.NET Core Controllers
    |
    v
Application Services and Business Rules
    |
    v
Entity Framework Core DbContext
    |
    v
MySQL Database
```

The backend follows a controller-service-data access structure:

- **Controllers** receive HTTP requests and return HTTP responses.
- **Services** implement validation, ownership checks, authentication, and business rules.
- **DTOs** define the public API request and response contracts.
- **Entity Framework Core** handles queries, relationships, and persistence.
- **Migrations** version and reproduce database schema changes.

The Angular application uses standalone components, lazy-loaded routes, dependency-injected services, signals, and computed state. Shared date utilities keep notification behavior consistent across the bell, Dashboard, and Reminders page.

## Database design

The main entities are:

| Entity | Purpose |
|---|---|
| `User` | Account identity, credentials, and profile information |
| `DocumentCategory` | Classification such as Passport or Insurance |
| `Document` | Document metadata and issue, reminder, and expiry dates |
| `UserSetting` | Expiry-warning and default-reminder preferences |
| `Reminder` | Compatibility record associated with a document reminder date |
| `DocumentNotification` | One-per-document persisted read state |

Key relationships include:

- One user to many documents.
- One category to many documents.
- One user to one settings record.
- One document to many legacy reminder records.
- One document to one notification read-state record.

Indexes support email lookup, user and category filtering, expiry sorting, and document-name search. Foreign keys and cascade behavior protect referential integrity.

## API design

The backend exposes REST endpoints for:

- `/api/auth` — registration and login.
- `/api/documents` — document CRUD, search, filters, and sorting.
- `/api/categories` — category management.
- `/api/dashboard` — user-specific summary information.
- `/api/reminders` — reminder management.
- `/api/notifications/state` — persisted notification read state.
- `/api/notifications/read` — batch read-state updates.
- `/api/profile` — profile retrieval and updates.
- `/api/settings` — reminder and expiry preferences.

Swagger/OpenAPI is enabled in development and supports JWT bearer authorization.

## Technologies used

### Frontend

| Technology | Version in project | Use |
|---|---:|---|
| Angular | 21.2 | Single-page application framework |
| TypeScript | 5.9 | Typed frontend development |
| Angular Router | 21.2 | Protected routes and lazy-loaded pages |
| Angular Forms | 21.2 | Form input and validation |
| Angular Signals | Angular 21 | Reactive application and notification state |
| Angular Material | 21.2 | UI component foundation |
| Angular CDK | 21.2 | Component development utilities |
| RxJS | 7.8 | HTTP and asynchronous data flows |
| SCSS | — | Application styling and responsive layouts |
| Inter Font | 5.3 package | Application typography |
| npm | 11.4 | Frontend package management and scripts |

### Backend

| Technology | Version in project | Use |
|---|---:|---|
| C# | .NET toolchain | Backend implementation |
| .NET / ASP.NET Core Web API | .NET 10 target | REST API, dependency injection, middleware, and authorization |
| Entity Framework Core | 9.0 | Object-relational mapping and migrations |
| Pomelo Entity Framework Core MySQL | 9.0 | EF Core provider for MySQL |
| ASP.NET Core JWT Bearer | 10.0 | Token authentication and validation |
| ASP.NET Core Identity password hasher | Framework component | Secure password hashing and verification |
| Swashbuckle / Swagger | 6.6 | OpenAPI documentation and API testing |

### Database and data handling

| Technology | Use |
|---|---|
| MySQL | Relational persistence |
| EF Core migrations | Repeatable database schema versioning |
| `DateOnly` | Calendar-date storage and comparison without time-zone drift |
| LINQ | Typed filtering, projection, sorting, and ownership queries |

### Testing and development tools

| Technology | Version in project | Use |
|---|---:|---|
| Vitest | 4.0 | Frontend unit tests |
| jsdom | 28.0 | Browser-like unit-test environment |
| Playwright | 1.63 | End-to-end browser testing setup |
| Angular CLI | 21.2 | Development server, builds, and test integration |
| .NET CLI | .NET toolchain | Restore, build, run, and migration commands |
| Prettier | 3.8 | Frontend code formatting |
| Git | — | Source control |

### Development environment

- Visual Studio Code or another C#/TypeScript-compatible editor.
- MySQL Server, with WampServer supported by the current local setup.
- MySQL Workbench for optional database inspection.
- Swagger UI for direct API verification.
- Angular development server at `http://localhost:4200`.
- ASP.NET Core API at the configured local backend address.

## Technical challenges and decisions

### Preventing one-day-early expiry

JavaScript dates can shift when a date-only string is parsed as a UTC timestamp and displayed in another time zone. The implementation treats issue, reminder, and expiry values as calendar dates. The backend uses `DateOnly`, while the frontend extracts year, month, and day before computing differences.

### Avoiding duplicate notifications

Creating a new database notification every day would produce duplicates and stale messages. The application derives notifications from document dates and stores only read state. A unique database index enforces one notification-state row per document.

### Keeping unread state meaningful

A permanent Boolean `IsRead` would keep a document read even after its urgency changed. Storing `LastReadStatus` means each meaningful transition—`ReminderActive`, `ExpiresToday`, and `Expired`—can alert the user once.

### Protecting user data

Document and notification queries include the authenticated user ID. Update and delete operations first verify ownership. Batch notification read updates validate every document before changing any record.

## Validation and quality assurance

The implementation is checked through:

- Angular production compilation.
- .NET Release compilation.
- Focused tests covering notification boundaries, expiry-day precedence, overdue-day calculation, missing reminder dates, ordering, and counts.
- EF Core migration generation and SQL script generation.
- Backend validation for invalid category and date combinations.

## Outcome

The finished system provides a centralized, authenticated workspace for monitoring personal documents. Users can see what requires attention without calculating dates manually. The notification design remains accurate as time passes, avoids duplicate database data, and makes urgency changes visible through the unread badge, Dashboard, and Reminders page.

## Possible future improvements

- Email, SMS, or push-notification delivery.
- Secure document-file uploads and cloud storage.
- Renewal history and audit timeline.
- Multiple reminder dates per document.
- Background jobs for notifications outside an active browser session.
- Refresh-token support and configurable token revocation.
- Localization and user-selectable date formats.
- Expanded API integration and end-to-end test coverage.
- Containerized deployment and automated CI/CD.
