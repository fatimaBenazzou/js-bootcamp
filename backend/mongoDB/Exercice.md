### **Scenario: User Management System**

You manage a database of users. The collection is named `users` and contains the following fields:

-   `name` (string): The user's full name.
-   `age` (number): The user's age.
-   `email` (string): The user's email address.
-   `status` (string): Either `"active"` or `"inactive"`.
-   `tags` (array of strings): Tags associated with the user.
-   `lastLogin` (date): The last time the user logged in.

Here’s some sample data to insert into your database:

```json
[
  { "name": "Alice", "age": 25, "email": "alice@example.com", "status": "active", "tags": ["new", "vip"], "lastLogin": ISODate("2024-12-01T10:00:00Z") },
  { "name": "Bob", "age": 32, "email": "bob@example.com", "status": "inactive", "tags": ["vip"], "lastLogin": ISODate("2024-11-25T09:30:00Z") },
  { "name": "Charlie", "age": 28, "email": "charlie@example.com", "status": "active", "tags": ["new"], "lastLogin": ISODate("2024-12-02T11:15:00Z") },
  { "name": "Diana", "age": 30, "email": "diana@example.com", "status": "inactive", "tags": ["priority", "vip"], "lastLogin": ISODate("2024-11-30T08:45:00Z") }
]
```

---

### **Instructions**

#### **1. Insert and Collection Management**

1.1 **Create a database named `userManagement`.**

1.2 **Insert the sample data into a collection named `users`.**

1.3 **Add a new user to the collection with the following data:**

```json
{
  "name": "Eve",
  "age": 22,
  "email": "eve@example.com",
  "status": "active",
  "tags": ["new", "priority"],
  "lastLogin": ISODate("2024-12-03T12:00:00Z")
}
```

1.4 **Delete all users who are older than 40 years.**

1.5 **Rename the `users` collection to `userProfiles`.**

---

#### **2. Basic Queries**

2.1 **Find all users who logged in within the last 7 days.**  
_Hint: Use `$gte` with the current date minus 7 days._

2.2 **Find users whose `email` ends with `example.com`.**  
_Hint: Use `$regex`._

2.3 **Find users who have more than one tag.**  
_Hint: Use `$size` and comparison operators._

2.4 **Retrieve all `active` users, sorted by their age in descending order.**

---

#### **3. Update Operations**

3.1 **Update Bob's email to `bob.new@example.com`.**

3.2 **Set the `status` of all users younger than 25 to `"inactive"`.**

3.3 **Add a `verified` field with the value `true` to all users.**

3.4 **Remove the `tags` field from all users who do not have any tags.**

---

#### **4. Advanced Queries**

4.1 **Count the number of `active` users.**

4.2 **Group users by their `status` and calculate the average age for each group.**  
_Hint: Use the `$group` aggregation stage._

4.3 **Find the user with the most recent `lastLogin` date.**  
_Hint: Use `$sort` and `$limit`._

4.4 **Check if there are any duplicate email addresses in the collection.**  
_Hint: Use the `$group` and `$match` stages in aggregation._

---

#### **5. Delete Operations**

5.1 **Delete all users who haven’t logged in since `2024-11-01`.**

5.2 **Delete a single user by their email (choose any email from the collection).**

5.3 **Drop the `userProfiles` collection.**  
_Hint: Use the `db.collection.drop()` method._

---

#### **6. Bonus Challenge**

Write a script to perform the following sequence of operations:

-   Insert three new users into the collection.
-   Update the `status` of all users who have `"priority"` in their tags to `"VIP"`.
-   Delete all users who have no `lastLogin` date.

---
