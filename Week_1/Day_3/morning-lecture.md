## Object

### Definition
  set of data and function to work on the data

### Example

#### create an object
(dictionary) Hash HashMap
``` javascript
var contact = {
  name : "Don",
  email: "email@provider.com",
  hair: null,
  sayMyName: function(){
    console.log("My name is Don.");
  }
}
```

#### access properties

* by static field name -> knowing the propertie's name ahead of time
``` javascript
contact.name;
```

* with a dinamyc property name -> not knowing the propertie's name ahead of time

``` javascript
var prop = "name";
contact[prop];
```

#### object functions

``` javascript
contact.sayMyName();     //"My name is Don.";
contact.SayMyName;       // [Function: sayMyName]            ||javascript says it is a function, but does not call it||
contact["SayMyName"];    // [Function: sayMyName]
contact.["sayMyName"](); //"My name is Don.";
contact.[sayMyName]();     //not going to work sayMyName is not defined
```


#### object inherited functions / useful facts about arrays

``` javascript
Object.keys(contact); // ["name", "email", "hair", "sayMyName"]
contact.length // undefined

var tracks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tracks.sort()                                  // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
tracks.sort(function(a, b){return a - b})      // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tracks.fiter(function(track){return /*some condition with track*/;}) // creates a new array of values witch meets the conditions
```

#### using a loop to acces keys and values
``` javascript
var keySet = Object.keys(contract);
for(var i = 0; i < keySet.length; i++){
  console.log("key: ", keySet[i], " value: ", contact[keySet[i]]);
}

```

#### what is the type of a function?

``` javascript
function hi(){console.log("hi")};
typeof hi // 'function'
```

#### using the 'this' keyword

#####definition: always refers to the object wih runs the functions it is in. (reflective property)

``` javascript
  contact.name = "Bob";
  contact.sayMyName(); // "My name is Don."

  /* rewriteing the object : */
  var contact = {
  name : "Don",
  email: "email@provider.com",
  hair: null,
  sayMyName: function(){
    console.log("My name is ", this.name, ".");
  }

  contact.waitAndYell = function() {
    var name = this.name;
    setTimeOut(function(){
        console.log(name);
      }), 2000)
  }
}
```