### Tpoics
- Basic String Operations
- String Slicing
- Testing, Searching, and Manipulating Strings

### Basic String Operations
Python provides several ways to access the individual characters in a string. Strings also have methods that allow you to perform operations on them.

### Accessing the Individual Characters in a String
#### Iterating over a String with the for Loop
One of the easiest ways to access the individual characters in a string is to use the for loop. Here is the general format:
```
for variable in string:
  statement
  statement
  etc.
```
n the general format, variable is the name of a variable and string is either a string
literal or a variable that references a string. Each time the loop iterates, variable will reference a copy of a character in string, beginning with the first character. We say that the
loop iterates over the characters in the string. Here is an example:
```python
name = 'Rugiatu'
for ch in name:
  print(ch)
```
```
R
u
g
i
a
t
u
```

```
*1st iteration*
for ch in name:
  print(ch)
```
