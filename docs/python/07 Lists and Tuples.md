## Lists and Tuples 
- Sequences
- Introduction to Lists
- List Slicing
- Finding Items in Lists with the in Operator
- List Methods and Useful Built-in Functions
- Copying Lists
- Processing Lists
- Two-Dimensional Lists
- Tuples
### Sequences
<a name="top"></a> Contents
===
- [Lists](#lists)
    - [Introducing Lists](#introducing)
        - [Example](#example)
        - [Naming and defining a list](#naming)
        - [Accessing one item in a list](#accessing_one_item)
        - [Exercises](#exercises_list_introduction)
    - [Lists and Looping](#looping)
        - [Accessing all elements in a list](#accessing_all_elements)
        - [Enumerating a list](#enumerating_list)
        - [Exercises](#exercises_list_loop)
    - [Common List Operations](#common_operations)
        - [Modifying elements in a list](#modifying_elements)
        - [Finding an element in a list](#finding_elements)
        - [Testing whether an element is in a list](#testing_elements)
        - [Adding items to a list](#adding_items)
        - [Creating an empty list](#empty_list)
        - [Sorting a list](#sorting_list)
        - [Finding the length of a list](#length)
        - [Exercises](#exercises_common_operations)
    - [Removing Items from a List](#removing_items)
        - [Removing items by position](#removing_by_position)
        - [Removing items by value](#removing_by_value)
        - [Popping items](#popping)
        - [Exercises](#exercises_removing_items)
    - [Want to see what functions are?](#functions)
    - [Slicing a List](#slicing)
        - [Copying a list](#copying)
        - [Exercises](#exercises_slicing)
    - [Numerical Lists](#numerical_lists)
        - [The *range()* function](#range_function)
        - [The *min()*, *max()*, *sum()* functions](#min_max_sum)
        - [Exercises](#exercises_numerical)
    - [List Comprehensions](#comprehensions)
        - [Numerical comprehensions](#comprehensions_numerical)
        - [Non-numerical comprehensions](#comprehensions_non_numerical)
        - [Exercises](#exercises_comprehensions)
    - [Strings as Lists](#strings_as_lists)
        - [Strings as a list of characters](#list_of_characters)
        - [Slicing strings](#slicing_strings)
        - [Finding substrings](#finding_substrings)
        - [Replacing substrings](#replacing_substrings)
        - [Counting substrings](#counting_substrings)
        - [Splitting strings](#splitting_strings)
        - [Other string methods](#other_string_methods)
        - [Exercises](#exercises_strings_as_lists)
        - [Challenges](#challenges_strings_as_lists)
    - [Tuples](#tuples)
        - [Defining tuples, and accessing elements](#defining_tuples)
        - [Using tuples to make strings](#tuples_strings)
        - [Exercises](#exercises_tuples)
    - [Sets](#sets)
        - [Basic Operatoins on Sets](#set_operations)
        - [Exercises](#exercise_set)
    - [Overall Challenges](#challenges_overall)
 
  <a name='lists'></a>Lists


<a name='introducing'></a>Introducing Lists
---
A list is a collection of items, that is stored in a variable. The items should be related in some way, but there are no restrictions on what can be stored in a list. Here is a simple example of a list, and how we can quickly access each item in the list.

```python
students = ['Issato', 'Fatima', 'Anthony', 'Salami', 'Adra', 'Hamza']

for student in students:
    print("Hello, " + student.title() + "!")
```
```
Hello, Issato!
Hello, Fatima!
Hello, Anthony!
Hello, Salami!
Hello, Adra!
Hello, Hamza!
```

<a name='naming'></a>Naming and defining a list
---
- Since lists are collection of objects, it is good practice to give them a plural name. If each item in your list is a car, call the list 'cars'. If each item is a dog, call your list 'dogs'. This gives you a straightforward way to refer to the entire list ('dogs'), and to a single item in the list ('dog').

- In Python, square brackets designate a list. To define a list, you give the name of the list, the equals sign, and the values you want to include in your list within square brackets.

```python
towns = ['Mayakie', 'Mambolo','Rokupr']
```

<a name='accessing_one_item'></a>Accessing one item in a list
---
- Items in a list are identified by their position in the list. Python is zero indexed, meaning the first item in the list starts at zero not one as in some languages. This will almost certainly trip you up at some point.

- To access the first element in a list, you give the name of the list, followed by a zero in parentheses.

```python
towns = ['Mayakie', 'Mambolo','Rokupr']

town = towns[0]
print(town)
```

```
Mayakie
```

- The number in parentheses is called the **index** of the item.
- Because lists start at zero, the index of an item is always one less than its position in the list.
- Because of that, **Python** is said to be a [*zero-indexed*](http://en.wikipedia.org/wiki/Zero-based_numbering) 
language (as many others, like `C`, or `Java`)
- So to get the second item in the list, we need to use an index of 1, and so on..

```python
towns = ['Mayakie', 'Mambolo','Rokupr']

town = towns[1]
print(town)
```

### Accessing the last items in a list
You can probably see that to get the last item in this list, we would use an index of 2. This works, but it would only work because our list has exactly three items. To get the last item in a list, no matter how long the list is, you can use an index of -1.
```python
towns = ['Mayakie', 'Mambolo','Rokupr']

town = towns[-1]
print(town)
```

This syntax also works for the second to last item, the third to last, and so forth.
```python
towns = ['Mayakie', 'Mambolo','Rokupr']

town = towns[-2]
print(town)
```


<a name='exercises_list_introduction'></a>Exercises
---
#### Ex 3.1: First List
- Store the values 'python', 'c', and 'java' in a list. Print each of these values out, using their position in the list.

#### Ex 3.2: First Neat List
- Store the values 'python', 'c', and 'java' in a list. Print a statement about each of these values, using their position in the list.
- Your statement could simply be, 'A nice programming language is *value*.'

#### Ex 3.3: Your First List
- Think of something you can store in a list. Make a list with three or four items, and then print a message that includes at least one item from your list. Your sentence could be as simple as, "One item in my list is a ____."


<a name='accessing_all_elements'></a>Accessing all elements in a list
---
This is one of the most important concepts related to lists. You can have a list with a million items in it, and in three lines of code you can write a sentence for each of those million items. If you want to understand lists, and become a competent programmer, make sure you take the time to understand this section.

We use a loop to access all the elements in a list. A loop is a block of code that repeats itself until it runs out of items to work with, or until a certain condition is met. In this case, our loop will run once for every item in our list. With a list that is three items long, our loop will run three times.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

for dog in dogs:
    print(dog)
```

We have already seen how to create a list, so we are really just trying to understand how the last two lines work. These last two lines make up a loop, and the language here can help us see what is happening:
```
    for dog in dogs:
```
- The keyword "for" tells Python to get ready to use a loop.
- The variable "dog", with no "s" on it, is a temporary placeholder variable. This is the variable that Python will place each item in the list into, one at a time.
- The first time through the loop, the value of "dog" will be 'border collie'.
- The second time through the loop, the value of "dog" will be 'australian cattle dog'.
- The third time through, "dog" will be 'labrador retriever'.
- After this, there are no more items in the list, and the loop will end.

### Doing more with each item

We can do whatever we want with the value of "dog" inside the loop. In this case, we just print the name of the dog.
```
    print(dog)
```
- We are not limited to just printing the word dog. We can do whatever we want with this value, and this action will be carried out for every item in the list.
- Let's say something about each dog in our list.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

for dog in dogs:
    print('I like ' + dog + 's.')
```
```
I like border collies.
I like australian cattle dogs.
I like labrador retrievers.
```

### Inside and outside the loop

Python uses indentation to decide what is inside the loop and what is outside the loop. Code that is inside the loop will be run for every item in the list. Code that is not indented, which comes after the loop, will be run once just like regular code.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

for dog in dogs:
    print('I like ' + dog + 's.')
    print('No, I really really like ' + dog +'s!\n')
    
print("\nThat's just how I feel about dogs.")
```
```
I like border collies.
No, I really really like border collies!

I like australian cattle dogs.
No, I really really like australian cattle dogs!

I like labrador retrievers.
No, I really really like labrador retrievers!


That's just how I feel about dogs.

```
- Notice that the last line only runs once, after the loop is completed. Also notice the use of newlines ("\n") to make the output easier to read.

<a name='enumerating_list'></a>Enumerating a list
---
When you are looping through a list, you may want to know the index of the current item. You could always use the *list.index(value)* syntax, but there is a simpler way. The *enumerate()* function tracks the index of each item for you, as it loops through the list:

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

print("Results for the dog show are as follows:\n")
for index, dog in enumerate(dogs):
    place = str(index)
    print("Place: " + place + " Dog: " + dog.title())
```

```
Results for the dog show are as follows:

Place: 0 Dog: Border Collie
Place: 1 Dog: Australian Cattle Dog
Place: 2 Dog: Labrador Retriever
```
To enumerate a list, you need to add an *index* variable to hold the current index. So instead of
```
    for dog in dogs:
``` 
You have
```
    for index, dog in enumerate(dogs)
```  
The value in the variable *index* is always an integer. If you want to print it in a string, you have to turn the integer into a string:
```
    str(index)
```

- The index always starts at 0, so in this example the value of *place* should actually be the current index, plus one:

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

print("Results for the dog show are as follows:\n")
for index, dog in enumerate(dogs):
    place = str(index + 1)
    print("Place: " + place + " Dog: " + dog.title())
```
```
Results for the dog show are as follows:

Place: 1 Dog: Border Collie
Place: 2 Dog: Australian Cattle Dog
Place: 3 Dog: Labrador Retriever
```

### A common looping error
One common looping error occurs when instead of using the single variable *dog* inside the loop, we accidentally use the variable that holds the entire list:

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

for dog in dogs:
    print(dogs)
```

```
['border collie', 'australian cattle dog', 'labrador retriever']
['border collie', 'australian cattle dog', 'labrador retriever']
['border collie', 'australian cattle dog', 'labrador retriever']
```

In this example, instead of printing each dog in the list, we print the entire list every time we go through the loop. Python puts each individual item in the list into the variable *dog*, but we never use that variable. Sometimes you will just get an error if you try to do this:

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

for dog in dogs:
    print('I like ' + dogs + 's.')
```

## The FOR (iteration) loop

The `for` loop statement is the most widely used iteration mechanisms in Python.

* Almost every structure in Python can be iterated (*element by element*) by a `for` loop
    - a list, a tuple, a dictionary, $\ldots$ (more details will follows)

* In Python, also `while` loops are permitted, but `for` is the one you would see (and use) most of the time!

### FOR Special keywords

Python allows two **keywords** to be used within a `for` loop: **break** and **continue**.

The two keywords have two **different** meanings:

* **Break** used to *immediatly break the loop and exit!*
* **Continue** used to *skip to the **next** iteration step!*

**NOTE**: The two keywords are permitted with `while` loops as well!

<a name='exercises_list_loop'></a>Exercises
---
#### Ex 3.4: First List - Loop
- Repeat *First List*, but this time use a loop to print out each value in the list.

#### Ex 3.5: First Neat List - Loop
- Repeat *First Neat List*, but this time use a loop to print out your statements. Make sure you are writing the same sentence for all values in your list. Loops are not effective when you are trying to generate different output for each value in your list.

#### Ex 3.6: Your First List - Loop
- Repeat *Your First List*, but this time use a loop to print out your message for each item in your list. Again, if you came up with different messages for each value in your list, decide on one message to repeat for each value in your list.

<a name='common_operations'></a>Common List Operations
===
<a name='modifying_elements'></a>Modifying elements in a list
---
You can change the value of any element in a list if you know the position of that item.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

dogs[0] = 'australian shepherd'
print(dogs)
```
```
['australian shepherd', 'australian cattle dog', 'labrador retriever']
```
<a name='finding_elements'></a>Finding an element in a list
---
If you want to find out the position of an element in a list, you can use the index() function.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

print(dogs.index('australian cattle dog'))
```
This method returns a ValueError if the requested item is not in the list.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

print(dogs.index('poodle'))
```
<a name='testing_elements'></a>Testing whether an item is in a list
---
You can test whether an item is in a list using the "in" keyword. This will become more useful after learning how to use if-else statements.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']

print('australian cattle dog' in dogs)
print('poodle' in dogs)
```
```
True
False
```
<a name='adding_items'></a>Adding items to a list
---
### Appending items to the end of a list
We can add an item to a list using the append() method. This method adds the new item to the end of the list.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']
dogs.append('poodle')

for dog in dogs:
    print(dog.title() + "s are cool.")
```
```
Border Collies are cool.
Australian Cattle Dogs are cool.
Labrador Retrievers are cool.
Poodles are cool.
```
### Inserting items into a list
We can also insert items anywhere we want in a list, using the **insert()** function. We specify the position we want the item to have, and everything from that point on is shifted one position to the right. In other words, the index of every item after the new item is increased by one.

```python
dogs = ['border collie', 'australian cattle dog', 'labrador retriever']
dogs.insert(1, 'poodle')

print(dogs)
```
```
['border collie', 'poodle', 'australian cattle dog', 'labrador retriever']
```
Note that you have to give the position of the new item first, and then the value of the new item. If you do it in the reverse order, you will get an error.

<a name='empty_list'></a>Creating an empty list
---
Now that we know how to add items to a list after it is created, we can use lists more dynamically. We are no longer stuck defining our entire list at once.

A common approach with lists is to define an empty list, and then let your program add items to the list as necessary. This approach works, for example, when starting to build an interactive web site. Your list of users might start out empty, and then as people register for the site it will grow. This is a simplified approach to how web sites actually work, but the idea is realistic.

Here is a brief example of how to start with an empty list, start to fill it up, and work with the items in the list. The only new thing here is the way we define an empty list, which is just an empty set of square brackets.


```python
# Create an empty list to hold our users.
usernames = []

# Add some users.
usernames.append('Solomon')
usernames.append('Fatima')
usernames.append('Abdulai')

# Greet all of our users.
for username in usernames:
    print("Welcome, " + username.title() + '!')
```

```
Welcome, Solomon!
Welcome, Fatima!
Welcome, Abdulai!
```

If we don't change the order in our list, we can use the list to figure out who our oldest and newest users are.

```python
# Create an empty list to hold our users.
usernames = []

# Add some users.
usernames.append('bernice')
usernames.append('cody')
usernames.append('aaron')

# Greet all of our users.
for username in usernames:
    print("Welcome, " + username.title() + '!')

# Recognize our first user, and welcome our newest user.
print("\nThank you for being our very first user, " + usernames[0].title() + '!')
print("And a warm welcome to our newest user, " + usernames[-1].title() + '!')
```

```
Welcome, Solomon!
Welcome, Fatima!
Welcome, Abdulai!

Thank you for being our very first user, Solomon!
And a warm welcome to our newest user, Abdulai!
```

Note that the code welcoming our newest user will always work, because we have used the index -1. If we had used the index 2 we would always get the third user, even as our list of users grows and grows.

<a name='sorting_list'></a>Sorting a List
---
We can sort a list alphabetically, in either order.

```python
students = ['Gavas', 'Anthony', 'Hamzi']

# Put students in alphabetical order.
students.sort()

# Display the list in its current order.
print("Our students are currently in alphabetical order.")
for student in students:
    print(student.title())

#Put students in reverse alphabetical order.
students.sort(reverse=True)

# Display the list in its current order.
print("\nOur students are now in reverse alphabetical order.")
for student in students:
    print(student.title())
```

```
Our students are currently in alphabetical order.
Gavas
Anthony
Hamzi

Our students are now in reverse alphabetical order.
Gavas
Anthony
Hamzi
```
### *sorted()* vs. *sort()*
Whenever you consider sorting a list, keep in mind that you can not recover the original order. If you want to display a list in sorted order, but preserve the original order, you can use the *sorted()* function. The *sorted()* function also accepts the optional *reverse=True* argument.
```python
students = ['Gavas', 'Anthony', 'Hamzi']

# Display students in alphabetical order, but keep the original order.
print("Here is the list in alphabetical order:")
for student in sorted(students):
    print(student.title())

# Display students in reverse alphabetical order, but keep the original order.
print("\nHere is the list in reverse alphabetical order:")
for student in sorted(students, reverse=True):
    print(student.title())

print("\nHere is the list in its original order:")
# Show that the list is still in its original order.
for student in students:
    print(student.title())
```

```
Here is the list in alphabetical order:
Gavas
Anthony
Hamzi

Here is the list in reverse alphabetical order:
Gavas
Anthony
Hamzi

Here is the list in its original order:
Gavas
Anthony
Hamzi
```

### Reversing a list
We have seen three possible orders for a list:
- The original order in which the list was created
- Alphabetical order
- Reverse alphabetical order

There is one more order we can use, and that is the reverse of the original order of the list. The *reverse()* function gives us this order.

```python
students = ['Issato', 'Mentor', 'Rugiatu']
students.reverse()

print(students)
```
```
['Issato', 'Mentor', 'Rugiatu']
```

Note that reverse is permanent, although you could follow up with another call to *reverse()* and get back the original order of the list.

### Sorting a numerical list
All of the sorting functions work for numerical lists as well.

```python
numbers = [1, 3, 4, 2]

# sort() puts numbers in increasing order.
numbers.sort()
print(numbers)

# sort(reverse=True) puts numbers in decreasing order.
numbers.sort(reverse=True)
print(numbers)
```
```
[1, 2, 3, 4]
[4, 3, 2, 1]
```
```python
numbers = [1, 3, 4, 2]

# sorted() preserves the original order of the list:
print(sorted(numbers))
print(numbers)
```
```
[1, 2, 3, 4]
[1, 3, 4, 2]
```
```python
numbers = [1, 3, 4, 2]

# The reverse() function also works for numerical lists.
numbers.reverse()
print(numbers)
```
```
[2, 4, 3, 1]
```
<a name='length'></a>Finding the length of a list
---
You can find the length of a list using the *len()* function.

```python
usernames = ['Rugiatu', 'Yainkain', 'Alpha']
user_count = len(usernames)

print(user_count)
```
```
3
```
There are many situations where you might want to know how many items in a list. If you have a list that stores your users, you can find the length of your list at any time, and know how many users you have.

```python
# Create an empty list to hold our users.
usernames = []

# Add some users, and report on how many users we have.
usernames.append('Alpha')
user_count = len(usernames)

print("We have " + str(user_count) + " user!")

usernames.append('Rugiatu')
usernames.append('Yainkain')
user_count = len(usernames)

print("We have " + str(user_count) + " users!")
```

```
We have 1 user!
We have 3 users!
```

On a technical note, the *len()* function returns an integer, which can't be printed directly with strings. We use the *str()* function to turn the integer into a string so that it prints nicely:
