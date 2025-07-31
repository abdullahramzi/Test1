# E-commerce Platform Skeleton

This repository contains a minimal skeleton for a scalable e-commerce platform supporting Arabic (RTL) and English languages.

## Structure

- `server/` – Express-based API with placeholder routes for products and vendors.
- `client/` – Placeholder for front-end code (not implemented).

## Getting Started

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```
3. The server runs on `http://localhost:3000`.

API endpoints:
- `GET /api/products` – List products.
- `POST /api/products` – Create a product. Pass `name`, optional `description`, and optional base64 `image`.
- `GET /api/vendors` – List vendors.
- `POST /api/vendors` – Create a vendor.

The API automatically detects the `Accept-Language` header (`en` or `ar`) and responds with a localized welcome message.

### AI Integration

The server includes a stub in `server/utils/ai.js` for generating product descriptions from images. Integrate with services like OpenAI or Google Vision API to implement this functionality fully.

## License

MIT
