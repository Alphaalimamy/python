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
### Testing, Searching, and Manipulating Strings
Python provides operators and methods for testing strings, searching the contents of strings, and getting modified copies of strings.
Testing Strings with **in** and **not** in In Python you can use the in operator to determine whether one string is contained in
another string. Here is the general format of an expression using the in operator with two strings:
```
  string1 in string2
```
**string1** and **string2** can be either string literals or variables referencing strings. The expression returns true if string1 is found in string2. For example, look at the following code

```python
text = 'Four score and seven years ago'
if 'seven' in text:
  print('The string "seven" was found.')
else:
  print('The string "seven" was not found.')
```
```
The string "seven" was found.
```
You can use the not in operator to determine whether one string is not contained in another string. Here is an example:
```python
names = 'Rugiatu Fatima Issato Salam Anthony Sahid'
if 'Alpha' not in names:
  print('Alpha was not found.')
else:
  print('Alpha was found.')
```
```
Alpha was not found.
```
### String Methods
- Testing the values of strings
- Performing various modifications
- Searching for substrings and replacing sequences of characters

### String Testing Methods
In Python, there are several string testing methods that allow you to check specific characteristics of a string. These methods return True or False based on the string content. Here's a summary and example based on the isdigit() method:
```python
string1 = '1200'
if string1.isdigit():
    print(string1, 'contains only digits.')
else:
    print(string1, 'contains characters other than digits.')
```
```
1200 contains only digits.
```
```python
string2 = '123abc'
if string2.isdigit():
    print(string2, 'contains only digits.')
else:
    print(string2, 'contains characters other than digits.')
```
```
123abc contains characters other than digits.
```
| Method     | Description                                                                                                                        |
|------------|------------------------------------------------------------------------------------------------------------------------------------|
| `isalnum()` | Returns `True` if the string contains only alphabetic letters or digits and is at least one character in length. Returns `False` otherwise. |
| `isalpha()` | Returns `True` if the string contains only alphabetic letters and is at least one character in length. Returns `False` otherwise.          |
| `isdigit()` | Returns `True` if the string contains only numeric digits and is at least one character in length. Returns `False` otherwise.              |
| `islower()` | Returns `True` if all the alphabetic letters in the string are lowercase and the string contains at least one alphabetic letter. Returns `False` otherwise. |
| `isspace()` | Returns `True` if the string contains only whitespace characters and is at least one character in length. Returns `False` otherwise.       |
| `isupper()` | Returns `True` if all the alphabetic letters in the string are uppercase and the string contains at least one alphabetic letter. Returns `False` otherwise. |

```python
# This program demonstrates several string testing methods.

def main():
    # Get a string from the user.
    user_string = input('Enter a string: ')

    print('This is what I found about that string:')

    # Test the string.
    if user_string.isalnum():
        print('The string is alphanumeric.')
    if user_string.isdigit():
        print('The string contains only digits.')
    if user_string.isalpha():
        print('The string contains only alphabetic characters.')
    if user_string.isspace():
        print('The string contains only whitespace characters.')
    if user_string.islower():
        print('The letters in the string are all lowercase.')
    if user_string.isupper():
        print('The letters in the string are all uppercase.')

# Call the main function to run the program.
if __name__ == "__main__":
    main()
```
| Method        | Description                                                                                                                     |
|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| `lower()`     | Returns a copy of the string with all alphabetic letters converted to lowercase. Non-alphabetic characters remain unchanged.     |
| `lstrip()`    | Returns a copy of the string with all leading whitespace characters removed (spaces, newlines `\n`, and tabs `\t`).               |
| `lstrip(char)`| Returns a copy of the string with all instances of `char` that appear at the beginning of the string removed.                     |
| `rstrip()`    | Returns a copy of the string with all trailing whitespace characters removed (spaces, newlines `\n`, and tabs `\t`).              |
| `rstrip(char)`| Returns a copy of the string with all instances of `char` that appear at the end of the string removed.                           |
| `strip()`     | Returns a copy of the string with all leading and trailing whitespace characters removed.                                         |
| `strip(char)` | Returns a copy of the string with all instances of `char` that appear at the beginning and end of the string removed.             |
| `upper()`     | Returns a copy of the string with all alphabetic letters converted to uppercase. Non-alphabetic characters remain unchanged.      |


In this example, the lower() and upper() methods are used to handle case-insensitive comparisons effectively, ensuring that whether the user enters 'y' or 'Y', the loop continues.

### Example 1: Using lower() for Case-Insensitive Comparison
```python
again = 'y'
while again.lower() == 'y':  # Converts 'again' to lowercase before comparison
    print('Hello')
    print('Do you want to see that again?')
    again = input('y = yes, anything else = no: ')
```
### Example 2: Using upper() for Case-Insensitive Comparison
```python
again = 'y'
while again.upper() == 'Y':  # Converts 'again' to uppercase before comparison
    print('Hello')
    print('Do you want to see that again?')
    again = input('y = yes, anything else = no: ')
```

### Searching and Replacing
Programs commonly need to search for substrings, or strings that appear within other strings. For example, suppose you have a document opened in your word processor, and
you need to search for a word that appears somewhere in it. The word that you are searching for is a substring that appears inside a larger string, the document.

| Method              | Description                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------|
| `endswith(substring)` | Returns `True` if the string ends with the specified `substring`; otherwise, it returns `False`.             |
| `find(substring)`    | Returns the lowest index in the string where the specified `substring` is found; returns `-1` if not found.  |
| `replace(old, new)`  | Returns a copy of the string with all instances of `old` replaced by `new`.                                  |
| `startswith(substring)` | Returns `True` if the string starts with the specified `substring`; otherwise, it returns `False`.          |

Here’s a detailed explanation of the endswith, startswith, find, and replace methods, along with examples:

#### 1. endswith Method
The endswith method checks if a string ends with a specified substring.

```python
filename = input('Enter the filename: ')
if filename.endswith('.txt'):
    print('That is the name of a text file.')
elif filename.endswith('.py'):
    print('That is the name of a Python source file.')
elif filename.endswith('.doc'):
    print('That is the name of a word processing document.')
else:
    print('Unknown file type.')
```
#### 2. startswith Method
Similar to endswith, the startswith method checks if a string begins with a specified substring.
```python
greeting = 'Hello, World!'
if greeting.startswith('Hello'):
    print('The greeting starts with "Hello".')
else:
    print('The greeting does not start with "Hello".')
```
#### 3. find Method
The find method searches for a specified substring within a string and returns the lowest index where it is found. If the substring is not found, it returns -1.
```python
string = 'Four score and seven years ago'
position = string.find('seven')
if position != -1:
    print('The word "seven" was found at index', position)
else:
    print('The word "seven" was not found.')
```
```
The word "seven" was found at index 15
```
#### 4. replace Method
The replace method returns a copy of the string with all occurrences of a specified substring replaced by another substring.
```python
string = 'Four score and seven years ago'
new_string = string.replace('years', 'days')
print(new_string)
```


# In the Spotlight: Validating the Characters in a Password

At the university, passwords for the campus computer system must meet the following requirements:
- The password must be at least seven characters long.
- It must contain at least one uppercase letter.
- It must contain at least one lowercase letter.
- It must contain at least one numeric digit.

When a student sets up his or her password, the password must be validated to ensure it meets these requirements. 

You have been asked to write the code that performs this validation. You decide to write a function named `valid_password` that accepts the password as an argument and returns either `True` or `False`, to indicate whether it is valid.

## Algorithm for the `valid_password` Function

```
If the password’s length is seven characters or greater:
    Set the correct_length variable to true

for each character in the password:
    if the character is an uppercase letter:
        Set the has_uppercase variable to true
    if the character is a lowercase letter:
        Set the has_lowercase variable to true
    if the character is a digit:
        Set the has_digit variable to true

If correct_length and has_uppercase and has_lowercase and has_digit:
    Set the is_valid variable to true
else:
    Set the is_valid variable to false

Return the is_valid variable
Earlier (in the previous In the Spotlight section), you created a function named `get_login_name` and stored that function in the login module. Because the `valid_password` function’s purpose is related to the task of creating a student’s login account, you decide to store the `valid_password` function in the login module as well.

```

### Step 1: Implementing the valid_password Function
```python
def valid_password(password):
    # Initialize validation flags
    correct_length = False
    has_uppercase = False
    has_lowercase = False
    has_digit = False

    # Check the length requirement
    if len(password) >= 7:
        correct_length = True

    # Check for uppercase, lowercase, and digits
    for char in password:
        if char.isupper():
            has_uppercase = True
        if char.islower():
            has_lowercase = True
        if char.isdigit():
            has_digit = True

    # Determine if the password is valid
    is_valid = correct_length and has_uppercase and has_lowercase and has_digit
    return is_valid
```
### Step 2: Adding the Function to the login Module
Now, let's assume you have a login module where you have other related functions (like get_login_name). Here’s how the login module would look with the valid_password function added:

```python
# login.py

def get_login_name(first, last, idnumber):
    # Get the first three letters of the first name
    set1 = first[0:3]
    # Get the first three letters of the last name
    set2 = last[0:3]
    # Get the last three characters of the student ID
    set3 = idnumber[-3:]
    # Put the sets of characters together
    login_name = set1 + set2 + set3
    return login_name

def valid_password(password):
    # Initialize validation flags
    correct_length = False
    has_uppercase = False
    has_lowercase = False
    has_digit = False

    # Check the length requirement
    if len(password) >= 7:
        correct_length = True

    # Check for uppercase, lowercase, and digits
    for char in password:
        if char.isupper():
            has_uppercase = True
        if char.islower():
            has_lowercase = True
        if char.isdigit():
            has_digit = True

    # Determine if the password is valid
    is_valid = correct_length and has_uppercase and has_lowercase and has_digit
    return is_valid
```

### Step 3: Using the valid_password Function
Now that the valid_password function is part of the login module, you can use it in your main program like this:
```python
import login

def main():
    # Get the user's password
    password = input('Enter a password: ')

    # Validate the password
    if login.valid_password(password):
        print('Password is valid.')
    else:
        print('Password is invalid. It must be at least 7 characters long, contain at least one uppercase letter, one lowercase letter, and one numeric digit.')

# Call the main function
main()
```
