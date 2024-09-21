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
===
<a name='example'></a>Example
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
