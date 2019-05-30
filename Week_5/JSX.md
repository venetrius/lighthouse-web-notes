## Rules for JSX
- All JSX elements must either consist of an opening and closing tag, or be self closing. It's a little more restrictive than HTML that way.
-  JSX elements must be in a tree, which means that the next tag to close must match the last one to open.
- Any JSX expression assigned to a variable or returned from a function must have one root tag.
- Comment syntax : {/* Code to comment */}
- White spaces ignored


Dynamic data: { varName }

Here's the list of things that React will render:

    Strings
    Numbers (including NaN, which will show up as NaN)
    Valid JSX expressions
    Arrays containing strings, numbers, and valid JSX expressions

And here's what React will ignore as if it never happened:

    true and false
    undefined and null
    functions

Anything else will raise an error.