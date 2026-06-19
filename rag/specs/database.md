# Database Specification

## Schema

### `todos` table

```sql
CREATE TABLE todos (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  title      TEXT    NOT NULL,
  completed  INTEGER NOT NULL DEFAULT 0,
  created_at TEXT    NOT NULL DEFAULT (datetime('now'))
);
```

## Notes

- SQLite stores booleans as INTEGER (0/1)
- `created_at` stored as ISO 8601 text
- No foreign keys needed for this simple schema
