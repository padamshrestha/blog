# C# features

## Extension Method
While using extension method we need to answer the following questions
* Is the primary parameter an instance?
* Does the method logically operate on that instance?
* Is it desirable for the method to appear in IntelliSense for that type?

Extension method
```
// Documents to provide intellisense
public static string InsertSpaces(this string source){

}
```

Usage
```
str.InsertSpaces();
```



