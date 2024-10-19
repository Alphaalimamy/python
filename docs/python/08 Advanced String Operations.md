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


```python
# This program counts the number of times he letter T (uppercase or lowercase) appears in a string.

def main():
  # Create a variable to use to hold the count.
  # The variable must start with 0.
  count = 0

  # Get a string from the user.
  my_string = input('Enter a sentence: ')

  # Count the Ts.
  for ch in my_string:
    if ch == 'T' or ch == 't':
    count += 1

  # Print the result.
  print('The letter T appears', count, 'times.')

# Call the main function.
main()
```

### Indexing
- Another way that you can access the individual characters in a string is with an index.
- Each character in a string has an index that specifies its position in the string.
- Indexing starts at 0, so the index of the first character is 0, the index of the second character is 1, and so forth.
- The index of the last character in a string is 1 less than the number of characters in the string

Here is another example:
```python
my_town = 'Mayakie is in Mambolo'
print(my_town[0], my_town[5], my_town[9])
```
This code will print the following:
```
M i s
```

### String Concatenation
- A common operation that performed on strings is concatenation, or appending one string to the end of another string.
- The + operator produces a string that is the combination of the two strings used as its operands.
```python
message = 'Hello ' + 'world'
print(message)
```
```
Hello world
```
```python
first_name = 'Kamara' 
last_name = 'Alpha' 
full_name = first_name + ' ' + last_name e
print(full_name)
```
```
Kamara Alpha
```
### Strings Are Immutable
In Python, strings are immutable, which means that once they are created, they cannot be changed. Some operations, such as concatenation, give the impression that they modify strings, but in reality they do not.
```python
# This program concatenates strings.
def main():
    name = 'Alpha'
    print('The name is', name)
    name = name + ' Kamara'
    print('Now the name is', name)

# Call the main function.
main()
```

Assume the variable name references a string. Write a for loop that prints each character in the string.
1. What is the index of the first character in a string?
2. If a string has 10 characters, what is the index of the last character?
3. What happens if you try to use an invalid index to access a character in a string?
4. How do you find the length of a string?
5. What is wrong with the following code?
    ```
    animal = 'Tiger'
    animal[0] = 'L'
    ```

### String Slicing
- You can use slicing expressions to select a range of characters from a string
- To get a slice of a string, you write an expression in the following general format:

```
string[start : end]
```
```python
full_name = 'Alpha Alimamy Kamara'
middle_name = full_name[6:10]
print(middle_name)
```
```
Alim
```

```python
full_name = 'Alpha Alimamy Kamara'
middle_name = full_name[-5:]
print(middle_name)
```
```
amara
```

Invalid indexes do not cause slicing expressions to raise an exception. For example:
- If the end index specifies a position beyond the end of the string, Python will use the length of the string instead.
- If the start index specifies a position before the beginning of the string, Python will use 0 instead.
- If the start index is greater than the end index, the slicing expression will return an empty string.

## Extracting Characters from a String
At a university, each student is assigned a system login name, which the student uses to log into the campus computer system. As part of your internship with the university’s Information Technology department, you have been asked to write the code that generates system login names for students. You will use the following algorithm to generate a login name:
- Get the first three characters of the student’s first name. (If the first name is less than three characters in length, use the entire first name.)
- Get the first three characters of the student’s last name. (If the last name is less than three characters in length, use the entire last name.)
- Get the last three characters of the student’s ID number. (If the ID number is less than three characters in length, use the entire ID number.)
- Concatenate the three sets of characters to generate the login name.

For example, if a student’s name is Alpha Alimamy, and his ID number is ENG6721, his login name would be AlpKam721. You decide to write a function named get_login_name that accepts a student’s first name, last name, and ID number as arguments and returns the student’s login name as a string. You will save the function in a module named login.py. This module can then be imported into any Python program that needs to generate a login
name.
```python
def get_login_name(first, last, idnumber):
    """
    This function generates a system login name by accepting
    a user's first name, last name, and ID number.

    Parameters:
    first (str): The user's first name.
    last (str): The user's last name.
    idnumber (str): The user's ID number.

    Returns:
    str: A system login name.
    """
    
    # Get the first three letters of the first name.
    # If the name is shorter than 3 characters, return the entire first name.
    set1 = first[0:3]

    # Get the first three letters of the last name.
    # If the last name is shorter than 3 characters, return the entire last name.
    set2 = last[0:3]

    # Get the last three characters of the ID number.
    # If the ID number is shorter than 3 characters, return the entire ID number.
    set3 = idnumber[-3:]

    # Combine the three sets of characters to create the login name.
    login_name = set1 + set2 + set3

    # Return the generated login name.
    return login_name
```

```python
# This program gets the user's first name, last name, and student ID number.
# Using this data, it generates a system login name.

import login  # Importing the module containing the get_login_name function

def main():
    # Get the user's first name, last name, and ID number.
    first = input('Enter your first name: ')
    last = input('Enter your last name: ')
    idnumber = input('Enter your student ID number: ')

    # Display the generated system login name.
    print('Your system login name is:')
    print(login.get_login_name(first, last, idnumber))

# Call the main function to run the program.
if __name__ == "__main__":
    main()
```
