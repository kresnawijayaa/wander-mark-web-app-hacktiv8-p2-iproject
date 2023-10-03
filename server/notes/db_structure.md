**Koleksi: Users**

- Field:
  - user_id (Document ID)
  - username
  - email
  - password_hash
  - profile_picture
  - activities (Array of objects)

**Koleksi: Places**

- Field:
  - place_id (Document ID)
  - place_name
  - address
  - latitude
  - longitude
  - image_url
  - description
  - interactions (Array of objects)

**Koleksi: Posts**

- Field:
  - post_id (Document ID)
  - user_id
  - created_at
  - title
  - place_id
  - image_url
  - comments (Array of objects)

**Koleksi: Interactions**

- Field:
  - interaction_id (Document ID)
  - user_id
  - interaction_type
  - target_id

**Koleksi: Captions**

- Field:
  - caption_id (Document ID)
  - place_id
  - generated_text
  - generated_at

**Koleksi: Comments**

- Field:
  - comment_id (Document ID)
  - user_id
  - text
  - target_id
  - created_at
