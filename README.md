# Notification Service

The Notification Service handles asynchronous events and communicates with users via email.

## Features

- **Event Consumption**: Listens for HTTP events (e.g., `USER_SIGNED_UP`) from other services.
- **Email Delivery**: Supports multiple providers:
    - **SendGrid**: For production-grade email delivery.
    - **Nodemailer/Gmail**: For simplified or development delivery.
- **Standardized Infrastructure**:
    - Global Error Handling.
    - Centralized logging with `Winston`.
    - Health-check ready (includes `curl`).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/events` | Receive events for processing |
| GET | `/` | Health check endpoint |

## Event Types Supported

- `USER_SIGNED_UP`: Triggered when a new user joins. Sends a "Welcome" email.

## Environment Variables

Required `.env` variables:
- `PORT`: Service port (default: 3002)
- `EMAIL_USER`: Sender email address
- `SENDGRID_API_KEY`: API Key for SendGrid delivery
- `EMAIL_PASS`: App password for SMTP delivery (if using Gmail)

## Tech Stack

- Node.js & Express
- @sendgrid/mail
- Nodemailer
- Winston (Logging)
- Docker (Alpine base)
