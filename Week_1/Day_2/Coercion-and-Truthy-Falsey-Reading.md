# Coercion and Truthy/Falsey Reading

## Comparing values

There are two types of comparison:

* ### Compare values and types
``` javascript
  ===
  23 === "23" // results False
  23 === 23 // results True
  ```
  Recommended to use it almost every time

* ### Compare values
``` javascript
  ==
  23 == "23" // results True
  ```

## Truthy and Falsey

in JavaScript, everything has an inherent Boolean value, which is commonly refered to as a Truthy or Falsey value.
For example:
``` javascript
0 == false; // -> results True
1 == false; // -> results False
10 == false; // -> results False
```
In the future, we're going to encounter several weird cases of truthy and falsey values, but for now just remember that most things in JavaScript are considered Truthy, except for the following:

``` javascript
// All of the following are inherently falsey:

False
// False is False. Makes sense, right?

0
// 0 is the only falsey Number

""
// an empty string is falsey

null
// a null, or empty value, is falsey.

undefined
// an object that has not been defined is considered falsey.

NaN
// Not a Number. You'll learn more about NaN as we go on.
```