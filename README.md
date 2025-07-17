# Hello REST API

A simple REST API built with Express.js that provides basic endpoints for demonstration and learning purposes.

## Features

- Express.js server with JSON body parsing
- Multiple API endpoints:
  - `GET /`: Welcome message
  - `GET /about`: About page information
  - `GET /contact`: Contact information
  - `POST /data`: Endpoint to receive and echo JSON data

## Technologies Used

- Node.js
- Express.js
- TypeScript/JavaScript

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShahZaib03-co/Hello-Rest-api.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will start running on `http://localhost:3000`

## API Endpoints

- `GET /`: Returns a welcome message
- `GET /about`: Returns information about the API
- `GET /contact`: Returns contact information
- `POST /data`: Accepts JSON data and returns it back with a success message

### Example POST Request

```bash
curl -X POST -H "Content-Type: application/json" -d '{"message":"Hello"}' http://localhost:3000/data
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
