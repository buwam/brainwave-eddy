# Welcome to your Convex functions directory!

Write your Convex functions here. See
https://docs.convex.dev/using/writing-convex-functions for more.

A query function that takes two arguments looks like:

```javascript
// myQueryFunction.js
import { query } from "./_generated/server";

export default query(async ({ db }, first, second) => {
  // Validate arguments here.
  if (typeof first !== "number" || first < 0) {
    throw new Error("First argument is not a non-negative number.");
  }
  if (typeof second !== "string" || second.length > 1000) {
    throw new Error("Second argument is not a string of length 1000 or less.");
  }

  // Query the database as many times as you need here.
  // See https://docs.convex.dev/using/database-quer