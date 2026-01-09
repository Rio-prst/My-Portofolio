export class DatabaseError extends Error {
  constructor(message = 'Database error') {
    super(message);
    this.name = 'DatabaseError';
  }
}

export class ServerError extends Error {
  statusCode: number;

  constructor(message = "Internal server error", statusCode = 500) {
    super(message);
    this.name = "ServerError";
    this.statusCode = statusCode;
  }
}