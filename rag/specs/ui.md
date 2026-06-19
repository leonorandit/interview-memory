# UI Specification

## Pages

### Todo List Page (`/`)

The main and only page of the application.

#### Layout

```
┌──────────────────────────────────┐
│           Todo App               │
├──────────────────────────────────┤
│  [ Input new todo... ]  [ Add ]  │
├──────────────────────────────────┤
│  ☐ Buy groceries          [ ✕ ]  │
│  ☑ Walk the dog           [ ✕ ]  │
│  ☐ Read a book            [ ✕ ]  │
├──────────────────────────────────┤
│  2 items left    [Clear completed]│
└──────────────────────────────────┘
```

#### Components

1. **TodoInput** — Text input + "Add" button to create new todos
2. **TodoItem** — Single todo row with:
   - Checkbox to toggle `completed`
   - Title text (strikethrough when completed)
   - Delete button (✕)
3. **TodoFooter** — Shows count of remaining items + "Clear completed" button

#### Interactions

| Action         | Trigger              | Behavior                              |
|----------------|----------------------|---------------------------------------|
| Add todo       | Click "Add" / Enter  | POST /api/todos, prepend to list      |
| Toggle status  | Click checkbox       | PUT /api/todos/:id, update UI         |
| Delete todo    | Click ✕              | DELETE /api/todos/:id, remove from list|
| Clear completed| Click "Clear"        | DELETE completed todos in batch       |

#### States

- **Empty state**: Show "No todos yet. Add one above!"
- **Loading**: Show spinner while fetching
- **Error**: Show toast notification on API failure
