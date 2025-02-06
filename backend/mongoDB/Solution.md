### **1. Insert and Collection Management**

#### 1.1 **Create a database named `userManagement`.**

```javascript
use userManagement
```

#### 1.2 **Insert the sample data into a collection named `users`.**

```javascript
db.users.insertMany([
    {
        name: "Alice",
        age: 25,
        email: "alice@example.com",
        status: "active",
        tags: ["new", "vip"],
        lastLogin: ISODate("2024-12-01T10:00:00Z"),
    },
    {
        name: "Bob",
        age: 32,
        email: "bob@example.com",
        status: "inactive",
        tags: ["vip"],
        lastLogin: ISODate("2024-11-25T09:30:00Z"),
    },
    {
        name: "Charlie",
        age: 28,
        email: "charlie@example.com",
        status: "active",
        tags: ["new"],
        lastLogin: ISODate("2024-12-02T11:15:00Z"),
    },
    {
        name: "Diana",
        age: 30,
        email: "diana@example.com",
        status: "inactive",
        tags: ["priority", "vip"],
        lastLogin: ISODate("2024-11-30T08:45:00Z"),
    },
]);
```

#### 1.3 **Add a new user to the collection with the following data:**

```javascript
db.users.insertOne({
    name: "Eve",
    age: 22,
    email: "eve@example.com",
    status: "active",
    tags: ["new", "priority"],
    lastLogin: ISODate("2024-12-03T12:00:00Z"),
});
```

#### 1.4 **Delete all users who are older than 40 years.**

```javascript
db.users.deleteMany({ age: { $gt: 40 } });
```

#### 1.5 **Rename the `users` collection to `userProfiles`.**

```javascript
db.users.renameCollection("userProfiles");
```

---

### **2. Basic Queries**

#### 2.1 **Find all users who logged in within the last 7 days.**

```javascript
db.userProfiles.find({
    lastLogin: { $gte: new Date(ISODate().getTime() - 7 * 24 * 60 * 60 * 1000) },
});
```

#### 2.2 **Find users whose `email` ends with `example.com`.**

```javascript
db.userProfiles.find({ email: { $regex: /example\.com$/ } });
```

#### 2.3 **Find users who have more than one tag.**

```javascript
db.userProfiles.find({ tags: { $exists: true, $not: { $size: 1 } } });
```

#### 2.4 **Retrieve all `active` users, sorted by their age in descending order.**

```javascript
db.userProfiles.find({ status: "active" }).sort({ age: -1 });
```

---

### **3. Update Operations**

#### 3.1 **Update Bob's email to `bob.new@example.com`.**

```javascript
db.userProfiles.updateOne({ name: "Bob" }, { $set: { email: "bob.new@example.com" } });
```

#### 3.2 **Set the `status` of all users younger than 25 to `"inactive"`.**

```javascript
db.userProfiles.updateMany({ age: { $lt: 25 } }, { $set: { status: "inactive" } });
```

#### 3.3 **Add a `verified` field with the value `true` to all users.**

```javascript
db.userProfiles.updateMany({}, { $set: { verified: true } });
```

#### 3.4 **Remove the `tags` field from all users who do not have any tags.**

```javascript
db.userProfiles.updateMany({ tags: { $exists: false } }, { $unset: { tags: "" } });
```

---

### **4. Advanced Queries**

#### 4.1 **Count the number of `active` users.**

```javascript
db.userProfiles.countDocuments({ status: "active" });
```

#### 4.2 **Group users by their `status` and calculate the average age for each group.**

```javascript
db.userProfiles.aggregate([{ $group: { _id: "$status", averageAge: { $avg: "$age" } } }]);
```

#### 4.3 **Find the user with the most recent `lastLogin` date.**

```javascript
db.userProfiles.find().sort({ lastLogin: -1 }).limit(1);
```

#### 4.4 **Check if there are any duplicate email addresses in the collection.**

```javascript
db.userProfiles.aggregate([
    { $group: { _id: "$email", count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
]);
```

---

### **5. Delete Operations**

#### 5.1 **Delete all users who haven’t logged in since `2024-11-01`.**

```javascript
db.userProfiles.deleteMany({ lastLogin: { $lt: ISODate("2024-11-01T00:00:00Z") } });
```

#### 5.2 **Delete a single user by their email (choose any email from the collection).**

```javascript
db.userProfiles.deleteOne({ email: "alice@example.com" });
```

#### 5.3 **Drop the `userProfiles` collection.**

```javascript
db.userProfiles.drop();
```

---

### **6. Bonus Challenge**

#### Write a script to perform the following sequence of operations:

```javascript
// Insert three new users
db.userProfiles.insertMany([
    {
        name: "Frank",
        age: 35,
        email: "frank@example.com",
        status: "active",
        tags: ["priority"],
        lastLogin: ISODate("2024-12-04T10:00:00Z"),
    },
    {
        name: "Grace",
        age: 29,
        email: "grace@example.com",
        status: "inactive",
        tags: [],
        lastLogin: null,
    },
    {
        name: "Henry",
        age: 40,
        email: "henry@example.com",
        status: "active",
        tags: ["vip"],
        lastLogin: ISODate("2024-12-03T09:00:00Z"),
    },
]);

// Update the `status` of all users who have `"priority"` in their tags to `"VIP"`
db.userProfiles.updateMany({ tags: "priority" }, { $set: { status: "VIP" } });

// Delete all users who have no `lastLogin` date
db.userProfiles.deleteMany({ lastLogin: null });
```
