# Intermittent 500 Error in Express.js App

This repository demonstrates a common issue in Express.js applications where asynchronous operations can lead to intermittent 500 errors if not handled correctly.  The example simulates a database error that occurs randomly within a `setTimeout` function.  The solution shows how to properly handle potential errors and prevent the 500 response.

## Bug

The `bug.js` file contains an Express.js app that simulates an asynchronous operation.  Sometimes this operation fails, resulting in a 500 error that isn't handled gracefully.

## Solution

The `bugSolution.js` file provides a solution by using a `try...catch` block to handle the potential error within the asynchronous operation.  This ensures that even if the operation fails, a more informative and user-friendly response is returned.