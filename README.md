# Application Form API Documentation

## HTTP Methods

### 1. GET
Retrieve a list of application forms or a specific application form.

**Request:**
- **URL:** `api/applications/`
- **Method:** GET
- **Headers:**
  - `Authorization: Token <your_token>`

**Description:**
Fetches all application forms associated with the authenticated user.

**Request for a specific application:**
- **URL:** `api/applications/<id>/`
- **Method:** GET
- **Headers:**
  - `Authorization: Token <your_token>`

**Description:**
Fetches a specific application form by its ID.

### 2. POST
Create a new application form.

**Request:**
- **URL:** `api/applications/`
- **Method:** POST
- **Headers:**
  - `Authorization: Token <your_token>`
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "offer": <offer_id>,
    "personal_info": {...},
    "contact_info": {...},
    "educational_background": {...},
    "recommenders": {...},
    "personal_statements": {...},
    "documents": {...}
  }
  ```

**Description:**
Creates a new application form with the provided data.

### 3. PUT
Update an existing application form.

**Request:**
- **URL:** `api/applications/<id>/`
- **Method:** PUT
- **Headers:**
  - `Authorization: Token <your_token>`
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "offer": <offer_id>,
    "personal_info": {...},
    "contact_info": {...},
    "educational_background": {...},
    "recommenders": {...},
    "personal_statements": {...},
    "documents": {...}
  }
  ```

**Description:**
Updates an existing application form with the provided data.

### 4. DELETE
Delete an existing application form.

**Request:**
- **URL:** `api/applications/<id>/`
- **Method:** DELETE
- **Headers:**
  - `Authorization: Token <your_token>`

**Description:**
Deletes an existing application form by its ID.

## Filtered Queries

You can filter the list of application forms based on certain criteria. For example, to filter applications by a specific offer:

**Request:**
- **URL:** `api/applications/?offer=<offer_id>`
- **Method:** GET
- **Headers:**
  - `Authorization: Token <your_token>`

**Description:**
Fetches application forms filtered by the specified offer ID.

You can also combine multiple filters. For example, to filter applications by offer and personal information:

**Request:**
- **URL:** `api/applications/?offer=<offer_id>&personal_info=<personal_info_id>`
- **Method:** GET
- **Headers:**
  - `Authorization: Token <your_token>`

**Description:**
Fetches application forms filtered by the specified offer ID and personal information ID.

## New Functionality

### 5. GET (Staff Only)
Retrieve a list of application forms, with the ability to filter by user ID.

**Request:**
- **URL:** `api/get_applications/`
- **Method:** GET
- **Headers:**
  - `Authorization: Token <your_token>`

**Description:**
Fetches all application forms. If the authenticated user is a superuser, they can filter by user ID using the `user` query parameter. Regular users can only see their own applications.

**Example Request:**
- **URL:** `api/get_applications/?user=<user_id>`
- **Method:** GET
- **Headers:**
  - `Authorization: Token <your_token>`

**Description:**
Fetches application forms filtered by the specified user ID. Only accessible by staff members.

### Summary (Updated)
- **GET** `api/applications/` - Retrieve all application forms.
- **GET** `api/applications/<id>/` - Retrieve a specific application form.
- **POST** `api/applications/` - Create a new application form.
- **PUT** `api/applications/<id>/` - Update an existing application form.
- **DELETE** `api/applications/<id>/` - Delete an existing application form.
- **Filtered Queries** - Use query parameters to filter the list of application forms.
- **GET (Staff Only)** `api/get_applications/` - Retrieve all application forms, with the ability to filter by user ID.
