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

```python
usernames = ['bernice', 'cody', 'aaron']
user_count = len(usernames)

print("This will cause an error: " + user_count)
```

```python
usernames = ['bernice', 'cody', 'aaron']
user_count = len(usernames)

print("This will work: " + str(user_count))
```
```
This will work: 3
```
<a name='exercises_common_operations'></a>Exercises
---
#### Ex 3.7: Working List
- Make a list that includes four careers, such as 'programmer' and 'truck driver'.
- Use the *list.index()* function to find the index of one career in your list.
- Use the *in* function to show that this career is in your list.
- Use the *append()* function to add a new career to your list.
- Use the *insert()* function to add a new career at the beginning of the list.
- Use a loop to show all the careers in your list.

#### Ex 3.8: Starting From Empty
- Create the list you ended up with in *Working List*, but this time start your file with an empty list and fill it up using *append()* statements.
- Print a statement that tells us what the first career you thought of was.
- Print a statement that tells us what the last career you thought of was.

#### Ex 3.9:  Ordered Working List
- Start with the list you created in *Working List*.
- You are going to print out the list in a number of different orders.
- Each time you print the list, use a for loop rather than printing the raw list.
- Print a message each time telling us what order we should see the list in.
    - Print the list in its original order.
    - Print the list in alphabetical order.
    - Print the list in its original order.
    - Print the list in reverse alphabetical order.
    - Print the list in its original order.
    - Print the list in the reverse order from what it started.
    - Print the list in its original order
    - Permanently sort the list in alphabetical order, and then print it out.
    - Permanently sort the list in reverse alphabetical order, and then print it out.

#### Ex 3.10:  Ordered Numbers
- Make a list of 5 numbers, in a random order.
- You are going to print out the list in a number of different orders.
- Each time you print the list, use a for loop rather than printing the raw list.
- Print a message each time telling us what order we should see the list in.
    - Print the numbers in the original order.
    - Print the numbers in increasing order.
    - Print the numbers in the original order.
    - Print the numbers in decreasing order.
    - Print the numbers in their original order.
    - Print the numbers in the reverse order from how they started.
    - Print the numbers in the original order.
    - Permanently sort the numbers in increasing order, and then print them out.
    - Permanently sort the numbers in descreasing order, and then print them out.

#### Ex 3.11: List Lengths
- Copy two or three of the lists you made from the previous exercises, or make up two or three new lists.
- Print out a series of statements that tell us how long each list is.

<a name='removing_items'></a>Removing Items from a List
===
Hopefully you can see by now that lists are a dynamic structure. We can define an empty list and then fill it up as information comes into our program. To become really dynamic, we need some ways to remove items from a list when we no longer need them. You can remove items from a list through their position, or through their value.


<a name='removing_by_position'></a>Removing items by position
---
If you know the position of an item in a list, you can remove that item using the *del* command. To use this approach, give the command *del* and the name of your list, with the index of the item you want to move in square brackets:


```python
countries = ['Sierra Leone', 'Guinea', 'Liberia']
# Remove the first dog from the list.
del countries[1]

print(countries)
```

```
['Sierra Leone', 'Liberia']
```

<a name='removing_by_value'></a>Removing items by value
---
You can also remove an item from a list if you know its value. To do this, we use the *remove()* function. Give the name of the list, followed by the word remove with the value of the item you want to remove in parentheses. Python looks through your list, finds the first item with this value, and removes it.

```python
countries = ['Sierra Leone', 'Guinea', 'Liberia']
# Remove the last country from the list.
countries.remove('Liberia')

print(countries)
```

```
['Sierra Leone', 'Guinea']
```

Be careful to note, however, that *only* the first item with this value is removed. If you have multiple items with the same value, you will have some items with this value left in your list.

```python
letters = ['a', 'b', 'c', 'a', 'b', 'c']
# Remove the letter a from the list.
letters.remove('a')

print(letters)
```

<a name='popping'></a>Popping items from a list
---
There is a cool concept in programming called "popping" items from a collection. Every programming language has some sort of data structure similar to Python's lists. All of these structures can be used as queues, and there are various ways of processing the items in a queue.

One simple approach is to start with an empty list, and then add items to that list. When you want to work with the items in the list, you always take the last item from the list, do something with it, and then remove that item. The *pop()* function makes this easy. It removes the last item from the list, and gives it to us so we can work with it. 

This is easier to show with an example

```python
countries = ['Sierra Leone', 'Guinea', 'Liberia', 'Ghana']
# Remove the last country from the list.
countries.pop()

print(countries)
```

```
['Sierra Leone', 'Guinea', 'Liberia']
```
This is an example of a first-in, last-out approach. The first item in the list would be the last item processed if you kept using this approach. We will see a full implementation of this approach later on, when we learn about *while* loops.

You can actually pop any item you want from a list, by giving the index of the item you want to pop. So we could do a first-in, first-out approach by popping the first iem in the list:
```python
countries = ['Sierra Leone', 'Guinea', 'Liberia', 'Ghana']
# Remove the last country from the list.
countries.pop(-1)

print(countries)
```

```
['Sierra Leone', 'Guinea', 'Liberia']
```
<a name='exercises_removing_items'></a>Exercises
---
#### Famous People
- Make a list that includes the names of four famous people.
- Remove each person from the list, one at a time, using each of the four methods we have just seen:
    - Pop the last item from the list, and pop any item except the last item.
    - Remove one item by its position, and one item by its value.
- Print out a message that there are no famous people left in your list, and print your list to prove that it is empty.

```python
# Famous People
fpeople = ['david bowie', 'robert plant', 'obama', 'taylor swift']
#Remove each person from the list, one at a time, using each of the four methods we have just seen
fpeople.remove('taylor swift')
print(fpeople)
del fpeople[2]
print(fpeople)
bowie=fpeople.pop(0)
print(bowie,fpeople)
last=fpeople.pop()
print('there are no more famous people in the list')
print(fpeople)
# put your code here
```

#### Output
```
['david bowie', 'robert plant', 'obama']
['david bowie', 'robert plant']
david bowie ['robert plant']
there are no more famous people in the list
```
```python
#Pop the last item from the list
fpeople = ['david bowie', 'robert plant', 'obama', 'taylor swift']
fpeople.pop()
print(fpeople)
# and pop any item except the last item.
fpeople = ['david bowie', 'robert plant', 'obama', 'taylor swift']
for _ in range(0,len(fpeople)-1):
    fpeople.pop(0)
print(fpeople)

fpeople = ['david bowie', 'robert plant', 'obama', 'taylor swift']
fpeople.remove('obama')
del fpeople[2]
print(fpeople)
```
#### Output
```
['david bowie', 'robert plant', 'obama']
['taylor swift']
['david bowie', 'robert plant']
```

<a name='slicing'></a>Slicing a List
===
Since a list is a collection of items, we should be able to get any subset of those items. For example, if we want to get just the first three items from the list, we should be able to do so easily. The same should be true for any three items in the middle of the list, or the last three items, or any x items from anywhere in the list. These subsets of a list are called *slices*.

To get a subset of a list, we give the position of the first item we want, and the position of the first item we do *not* want to include in the subset. So the slice *list[0:3]* will return a list containing items 0, 1, and 2, but not item 3.

```python
usernames = ['Alpha', 'Rugiatu', 'Fatima', 'Yainkain', 'Adama']

# Grab the first three users in the list.
first_batch = usernames[0:3]

for user in first_batch:
    print(user.title())

```
```
Alpha

Rugiatu

Fatima

Adama
```

If you want to grab everything up to a certain position in the list, you can also leave the first index blank:


```python
usernames = ['Alpha', 'Rugiatu', 'Fatima', 'Yainkain', 'Adama']

# Grab the first three users in the list.
first_batch = usernames[:3]

for user in first_batch:
    print(user.title())
```
```
Alpha

Rugiatu

Fatima

Adama
```


When we grab a slice from a list, the original list is not affected:

```python
usernames = ['Alpha', 'Rugiatu', 'Fatima', 'Yainkain', 'Adama']

# Grab the first three users in the list.
first_batch = usernames[0:3]

for user in first_batch:
    print(user.title())
```

```
Alpha

Rugiatu

Fatima

Adama
```

We can get any segment of a list we want, using the slice method:

```python
usernames = ['Alpha', 'Rugiatu', 'Fatima', 'Yainkain', 'Adama']

# Grab a batch from the middle of the list.
middle_batch = usernames[1:4]

for user in middle_batch:
    print(user.title())
```

```
Rugiatu

Fatima

```

To get all items from one position in the list to the end of the list, we can leave off the second index:

```python
usernames = ['Alpha', 'Rugiatu', 'Fatima', 'Yainkain', 'Adama', 'Issato','Salam']

# Grab the first three users in the list.
first_batch = usernames[2:]

for user in first_batch:
    print(user.title())
```

```
Fatima

Adama

Issato

Salam
```


<a name='exercises_slicing'></a>Exercises


#### Ex 3.13: Alphabet Slices
- Store the first ten letters of the alphabet in a list.
- Use a slice to print out the first three letters of the alphabet.
- Use a slice to print out any three letters from the middle of your list.
- Use a slice to print out the letters from any point in the middle of your list, to the end.

#### Ex 3.14: Protected List
- Your goal in this exercise is to prove that copying a list protects the original list.
- Make a list with three people's names in it.
- Use a slice to make a copy of the entire list.
- Add at least two new names to the new copy of the list.
- Make a loop that prints out all of the names in the original list, along with a message that this is the original list.
- Make a loop that prints out all of the names in the copied list, along with a message that this is the copied list.

<a name='comprehensions'></a>List Comprehensions
===
I thought carefully before including this section. If you are brand new to programming, list comprehensions may look confusing at first. They are a shorthand way of creating and working with lists. It is good to be aware of list comprehensions, because you will see them in other people's code, and they are really useful when you understand how to use them. That said, if they don't make sense to you yet, don't worry about using them right away. When you have worked with enough lists, you will want to use comprehensions. For now, it is good enough to know they exist, and to recognize them when you see them. If you like them, go ahead and start trying to use them now.

<a name='comprehensions_numerical'></a>Numerical Comprehensions
---
Let's consider how we might make a list of the first ten square numbers. We could do it like this:

```python
# Store the first ten square numbers in a list.
# Make an empty list that will hold our square numbers.
squares = []

# Go through the first ten numbers, square them, and add them to our list.
for number in range(1,11):
    new_square = number**2
    squares.append(new_square)
    
# Show that our list is correct.
for square in squares:
    print(square)

```

```
1
4
9
16
25
36
49
64
81
100

```

This should make sense at this point. If it doesn't, go over the code with these thoughts in mind:
- We make an empty list called *squares* that will hold the values we are interested in.
- Using the *range()* function, we start a loop that will go through the numbers 1-10.
- Each time we pass through the loop, we find the square of the current number by raising it to the second power.
- We add this new value to our list *squares*.
- We go through our newly-defined list and print out each square.

Now let's make this code more efficient. We don't really need to store the new square in its own variable *new_square*; we can just add it directly to the list of squares. The line

    ```
        new_square = number**2
    ```

is taken out, and the next line takes care of the squaring:
```
# Store the first ten square numbers in a list.
# Make an empty list that will hold our square numbers.
squares = []

# Go through the first ten numbers, square them, and add them to our list.
for number in range(1,11):
    squares.append(number**2)
    
# Show that our list is correct.
for square in squares:
    print(square)

```

```
1
4
9
16
25
36
49
64
81
100
```
List comprehensions allow us to collapse the first three lines of code into one line. Here's what it looks like:

```python
# Store the first ten square numbers in a list.
squares = [number**2 for number in range(1,11)]

# Show that our list is correct.
for square in squares:
    print(square)
```

```
1
4
9
16
25
36
49
64
81
100

```

<a name='comprehensions_non_numerical'></a>Non-numerical comprehensions
---
We can use comprehensions with non-numerical lists as well. In this case, we will create an initial list, and then use a comprehension to make a second list from the first one. Here is a simple example, without using comprehensions:

```python
# Consider some students.
students = ['Fatima', 'Issato', 'Salami']

# Let's turn them into great students.
great_students = []
for student in students:
    great_students.append(student.title() + " the great!")

# Let's greet each great student.
for great_student in great_students:
    print("Hello, " + great_student)
```

```
Hello, Fatima the great!
Hello, Issato the great!
Hello, Salami the great!
```

To use a comprehension in this code, we want to write something like this:

great_students = [add 'the great' to each *student*, for each *student* in the list of *students*]

Here's what it looks like:

```python
# Consider some students.
students = ['Fatima', 'Issato', 'Salami']

# Let's turn them into great students.
great_students = [student.title() + " the great!" for student in students]

# Let's greet each great student.
for great_student in great_students:
    print("Hello, " + great_student)

```
<a name='exercises_comprehensions'></a>Exercises
---
If these examples are making sense, go ahead and try to do the following exercises using comprehensions. If not, try the exercises without comprehensions. You may figure out how to use comprehensions after you have solved each exercise the longer way.

#### Ex 3.18: Multiples of Ten
- Make a list of the first ten multiples of ten (10, 20, 30... 90, 100). There are a number of ways to do this, but try to do it using a list comprehension. Print out your list.

#### Ex 3.19: Cubes
- We saw how to make a list of the first ten squares. Make a list of the first ten cubes (1, 8, 27... 1000) using a list comprehension, and print them out.

#### Ex 3.20: Awesomeness
- Store five names in a list. Make a second list that adds the phrase "is awesome!" to each name, using a list comprehension. Print out the awesome version of the names.

#### Ex 3.21: Working Backwards
- Write out the following code without using a list comprehension:

    plus_thirteen = [number + 13 for number in range(1,11)]



<a name='strings_as_lists'></a>Strings as Lists
===
Now that you have some familiarity with lists, we can take a second look at strings. A string is really a list of characters, so many of the concepts from working with lists behave the same with strings.


<a name='list_of_characters'></a>Strings as a list of characters
---
We can loop through a string using a *for* loop, just like we loop through a list:

```python
message = "Hello!"

for letter in message:
    print(letter)
```

```
H
e
l
l
o
!
```
We can create a list from a string. The list will have one element for each character in the string:

```python
message = "Hello world!"

message_list = list(message)
print(message_list)
```

```
['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']`
```


<a name='slicing_strings'></a>Slicing strings
---
We can access any character in a string by its position, just as we access individual items in a list:


```python
message = "Hello World!"
first_char = message[0]
last_char = message[-1]

print(first_char, last_char)
```
We can extend this to take slices of a string:

```
message = "Hello World!"
first_three = message[:3]
last_three = message[-3:]

print(first_three, last_three)
```
<a name='finding_substrings'></a>Finding substrings
---
Now that you have seen what indexes mean for strings, we can search for *substrings*. A substring is a series of characters that appears in a string.

You can use the *in* keyword to find out whether a particular substring appears in a string:

```python
message = "I like cats and dogs."
dog_present = 'dog' in message
print(dog_present)
```
```
True
```

If you want to know where a substring appears in a string, you can use the *find()* method. The *find()* method tells you the index at which the substring begins.

```python
message = "I like cats and dogs."
dog_index = message.find('dog')
print(dog_index)
```
Note, however, that this function only returns the index of the first appearance of the substring you are looking for. If the substring appears more than once, you will miss the other substrings.

```python
message = "I like cats and dogs, but I'd much rather own a dog."
dog_index = message.find('dog')
print(dog_index)
```
If you want to find the last appearance of a substring, you can use the *rfind()* function:

```python
last_dog_index = message.rfind('dog')
print(last_dog_index)
```
```
48
```

<a name='replacing_substrings'></a>Replacing substrings
---
You can use the *replace()* function to replace any substring with another substring. To use the *replace()* function, give the substring you want to replace, and then the substring you want to replace it with. You also need to store the new string, either in the same string variable or in a new variable.

```python
message = "I like cats and dogs, but I'd much rather own a dog."
message = message.replace('dog', 'snake')
print(message)
```
```
I like cats and snakes, but I'd much rather own a snake.
```
<a name='counting_substrings'></a>Counting substrings
---
If you want to know how many times a substring appears within a string, you can use the *count()* method.

```python
message = "I like cats and dogs, but I'd much rather own a dog."
number_dogs = message.count('dog')
print(number_dogs)
```
<a name='splitting_strings'></a>Splitting strings
---
Strings can be split into a set of substrings when they are separated by a repeated character. If a string consists of a simple sentence, the string can be split based on spaces. The *split()* function returns a list of substrings. The *split()* function takes one argument, the character that separates the parts of the string.

```python
message = "I like cats and dogs, but I'd much rather own a dog."
words = message.split(' ')
print(words)
```
```
['I', 'like', 'cats', 'and', 'dogs,', 'but', "I'd", 'much', 'rather', 'own', 'a', 'dog.']
```
Notice that the punctuation is left in the substrings.

It is more common to split strings that are really lists, separated by something like a comma. The *split()* function gives you an easy way to turn comma-separated strings, which you can't do much with in Python, into lists. Once you have your data in a list, you can work with it in much more powerful ways.

```python
animals = "dog, cat, tiger, mouse, liger, bear"

# Rewrite the string as a list, and store it in the same variable
animals = animals.split(',')
print(animals)
```
```
['dog', ' cat', ' tiger', ' mouse', ' liger', ' bear']
```

<a name='exercises_strings_as_lists'></a>Exercises
---
#### Ex 3.22: Listing a Sentence
- Store a single sentence in a variable. Use a for loop to print each character from your sentence on a separate line.

#### Ex 3.23:  Sentence List
- Store a single sentence in a variable. Create a list from your sentence. Print your raw list (don't use a loop, just print the list).

#### Ex 3.24:  Sentence Slices
- Store a sentence in a variable. Using slices, print out the first five characters, any five consecutive characters from the middle of the sentence, and the last five characters of the sentence.

#### Ex 3.25:  Finding Python
- Store a sentence in a variable, making sure you use the word *Python* at least twice in the sentence.
- Use the *in* keyword to prove that the word *Python* is actually in the sentence.
- Use the *find()* function to show where the word *Python* first appears in the sentence.
- Use the *rfind()* function to show the last place *Python* appears in the sentence.
- Use the *count()* function to show how many times the word *Python* appears in your sentence.
- Use the *split()* function to break your sentence into a list of words. Print the raw list, and use a loop to print each word on its own line.
- Use the *replace()* function to change *Python* to *Ruby* in your sentence.
