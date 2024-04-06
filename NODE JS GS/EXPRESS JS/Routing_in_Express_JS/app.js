// Routing
// const express = require("express");
import express from "express";
const app = express();
const port = process.env.PORT || "3000";

// Routes
app.get("/", (req, res) => {
  res.send("Get Method....");
});

// String Path
app.get("/about", (req, res) => {
  res.send("About Page....");
});

// String Pattern Path
app.get("/ab?cd", (req, res) => {
  res.send("This route path will match acd or abcd");
});

// Regular Expression Path
app.get(/madam/, (req, res) => {
  res.send("This is a   ");
});

// Callback Example
// One Callback
app.get("/callback", (req, res) => {
  res.send("This is a Callback");
});

// More then One Callback
app.get(
  "/morecallback",
  (req, res, next) => {
    console.log("First Callback");
    next();
  },
  (req, res) => {
    console.log("Second Callback");
    res.send("This is a More then One Callback");
  }
);

// An Array of Callback
// const first = (req, res, next) => {
//   console.log("Array First Callback....");
//   next();
// };
// const second = (req, res, next) => {
//   console.log("Array Second Callback....");
//   next();
// };
// const third = (req, res) => {
//   console.log("Array Thirt Callback....");
//   res.send("An Array of Callback Examples");
// };

// app.get("/arraycallback", [first, second, third]);
// // Path Not Exists
// app.all("*", (req, res) => {
//   res.send("Page Not Found....");
// });

// Combination of Independent and an Array of function
const first = (req, res, next) => {
  console.log("Array First Callback....");
  next();
};
const second = (req, res, next) => {
  console.log("Array Second Callback....");
  next();
};

app.get(
  "/combcallback",
  [first, second],
  (req, res, next) => {
    console.log("Array Third Callback....");
    next();
  },
  (req, res) => {
    console.log("Array Fourth Callback....");
    res.send(
      "Weclome to \nCombination of Independent and an Array of function"
    );
  }
);

// Chained Route Callback
// app
//   .route("/student")
//   .get((req, res) => {
//     res.send("All Student");
//   })
//   .post((req, res) => {
//     res.send("Add Student");
//   })
//   .put((req, res) => {
//     res.send("Update Student");
//   })
//   .delete((req, res) => {
//     res.send("Delete Student");
//   });

// Chained Route Callback with all
app
  .route("/student")
  .all((req, res, next) => {
    console.log("Run for all HTTP Method");
    next();
  })
  .get((req, res) => {
    console.log("GET METHOD");
    res.send("All Student");
  })
  .post((req, res) => {
    console.log("POST METHOD");
    res.send("Add Student");
  })
  .put((req, res) => {
    console.log("PUT METHOD");
    res.send("Update Student");
  })
  .delete((req, res) => {
    console.log("DELETE METHOD");
    res.send("Delete Student");
  });
// Listenig Port
app.listen(port, () => {
  console.log(`Server Listning at http://localhost:${port}`);
});
