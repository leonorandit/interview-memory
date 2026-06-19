# Todo API Specification

## Base URL

`/api/todos`

## Endpoints

### GET /api/todos

List all todos.

**Response 200:**

```json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2026-04-20T00:00:00Z"
  }
]
```

### POST /api/todos

Create a new todo.

**Request Body:**

```json
{
  "title": "Buy groceries"
}
```

**Response 201:**

```json
{
  "id": 1,
  "title": "Buy groceries",
  "completed": false,
  "createdAt": "2026-04-20T00:00:00Z"
}
```

### PUT /api/todos/:id

Update a todo.

**Request Body:**

```json
{
  "title": "Buy groceries and cook dinner",
  "completed": true
}
```

**Response 200:**

```json
{
  "id": 1,
  "title": "Buy groceries and cook dinner",
  "completed": true,
  "createdAt": "2026-04-20T00:00:00Z"
}
```

**Response 404:** Todo not found

### DELETE /api/todos/:id

Delete a todo.

**Response 204:** No content

**Response 404:** Todo not found

## Data Model

| Field      | Type    | Required | Description          |
|------------|---------|----------|----------------------|
| id         | integer | auto     | Primary key          |
| title      | string  | yes      | Task description     |
| completed  | boolean | no       | Defaults to `false`  |
| createdAt  | string  | auto     | ISO 8601 timestamp   |
