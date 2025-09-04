# DOM and Events Overview

## 1. What is the DOM?
- DOM = Document Object Model.
- It is a tree-like structure representing HTML elements as objects.
- Using DOM, JavaScript can read, change, add, or remove elements.


## 2. Selecting Elements
- `document.getElementById("id")` → Selects element by id.
- `document.getElementsByClassName("class")` → Selects all elements with class.
- `document.getElementsByTagName("tag")` → Selects all elements with tag.
- `document.querySelector("selector")` → Selects first matching element.
- `document.querySelectorAll("selector")` → Selects all matching elements.

## Example:

let heading = document.getElementById("title");
let buttons = document.querySelectorAll(".btn");
