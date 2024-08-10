#### Python Loops (Repetition Structures)


### Learning Objectives

By the end of this topic, students will:

- Understand the fundamentals of repetition structures in programming.
- Gain proficiency in using `while` loops for condition-controlled iterations.
- Learn how to implement `for` loops for count-controlled iterations.
- Develop skills to calculate running totals within loops.
- Apply input validation techniques using loops to ensure data integrity.
- Master the use of nested loops to handle complex iterative scenarios.


### Introduction to Loops (Repetition Structures)

### Concept

A loop enables a statement or set of statements to execute repeatedly. This approach is more efficient and maintainable than writing the same code multiple times.

### Example: Calculating Sales Commissions Without a Loop

Imagine you need to calculate and display commissions for three salespeople. Instead of using a loop, you would write separate blocks of code for each salesperson:

```python
# Salesperson 1
sales1 = float(input('Enter the amount of sales for salesperson 1: '))
comm_rate1 = float(input('Enter the commission rate: '))
commission1 = sales1 * comm_rate1
print('The commission for salesperson 1 is Le', format(commission1, ',.2f'), sep='')

# Salesperson 2
sales2 = float(input('Enter the amount of sales for salesperson 2: '))
comm_rate2 = float(input('Enter the commission rate: '))
commission2 = sales2 * comm_rate2
print('The commission for salesperson 2 is Le', format(commission2, ',.2f'), sep='')

# Salesperson 3
sales3 = float(input('Enter the amount of sales for salesperson 3: '))
comm_rate3 = float(input('Enter the commission rate: '))
commission3 = sales3 * comm_rate3
print('The commission for salesperson 3 is Le', format(commission3, ',.2f'), sep='')

```
#### Condition-Controlled and Count-Controlled Loops

We are going to explore two main types of loops: **condition-controlled** and **count-controlled** loops. 

- **Condition-Controlled Loop:**
  - It execute contineously as long as a specified condition remains true.
  - It is implemented using the `while` statement.
  -  It is useful when the number of iterations is not known ahead of time and depends on dynamic conditions.

- **Count-Controlled Loop:**
    - This type of loop runs a specific number of times
    - The number of iterations is predetermined.
    - This is achieved using the `for` statement.
    - It is ideal when the exact number of iterations is known before starting the loop.

### Checkpoint Questions

1. **What is a repetition structure in programming?**
2. **How does a condition-controlled loop operate and what keyword is used to implement it in Python?**
3. **What defines a count-controlled loop and which Python statement is used for this purpose?**
4. **Can you provide an example of when you would use a condition-controlled loop versus a count-controlled loop?**
5. **What are the main advantages of using loops instead of writing repetitive code blocks manually?**

We will guide you through writing and using both types of loops to handle various programming tasks efficiently.

### The `while` Loop: A Condition-Controlled Loop

### Concept

A `while` loop in Python allows you to repeat a set of instructions as long as a specified condition remains true. It's useful when you don't know in advance how many times you need to execute the statements.

**How It Works:**
1. **Condition:** The loop starts by checking if a condition is true or false.
2. **Statements:** If the condition is true, it executes a block of statements.
3. **Repeat:** After executing the statements, the loop checks the condition again. If it's still true, it repeats the process.
4. **Exit:** If the condition becomes false, the loop ends and the program continues with the next part of the code.

Here’s the basic structure of a `while` loop in Python:

```python
while condition:
    # statements to execute
```

### Example Password Verification

Problem: Write a program that repeatedly prompts the user to enter the correct password. The loop should end when the correct password is entered.
```python
correct_password = 'secure123'
entered_password = ''

while entered_password != correct_password:
    entered_password = input('Enter the password: ')
    
print('Password accepted!')
```
### Example :Sum of Numbers

Problem: Write a program that prompts the user to enter numbers and adds them to a total until the user enters 0.
```python
total = 0
number = float(input('Enter a number (0 to stop): '))

while number != 0:
    total += number
    number = float(input('Enter another number (0 to stop): '))

print(f'The total sum is {total:.2f}.')
```

### Example: Guessing Game

Problem: Write a program that generates a random number between 1 and 10 and repeatedly prompts the user to guess the number until they guess correctly.

```python
import random

number_to_guess = random.randint(1, 10)
guess = 0

while guess != number_to_guess:
    guess = int(input('Guess the number (1-10): '))
    
print('Congratulations! You guessed the number.')
```
### Example Age Checker

Problem: Write a program that asks for the user's age and keeps asking until the user provides a valid age (a positive number).
```python
age = -1

while age <= 0:
    age = int(input('Enter your age: '))
    
print(f'Your age is {age}.')
```
### Example: Countdown Timer

Problem: Write a program that counts down from 10 to 1 and then prints "Blast off!"
```python
count = 10
while count > 0:
    print(count)
    count -= 1
print('Blast off!')
```

### Exercise 1: Number Sum
Write a program that continuously prompts the user to enter positive numbers and keeps a running total. The program should stop when the user enters `0` and then display the total sum of the entered numbers.

```python
total = 0
number = float(input('Enter a positive number (0 to stop): '))

while number != 0:
    total += number
    number = float(input('Enter another number (0 to stop): '))

print(f'The total sum is {total:.2f}.')
```
### Example  Factorial Calculator
Write a program that calculates the factorial of a number entered by the user. The program should repeatedly prompt the user to enter a positive integer until they enter a number greater than or equal to 0, then compute and display the factorial of that number.

```python

number = int(input('Enter a positive integer to calculate its factorial: '))
factorial = 1

while number < 0:
    number = int(input('Invalid input. Enter a positive integer: '))

while number > 0:
    factorial *= number
    number -= 1

print(f'The factorial is {factorial}.')

```

### Example Even Number Counter
Write a program that asks the user to enter numbers and counts how many of the entered numbers are even. The program should stop when the user enters -1.

```python
count = 0
number = int(input('Enter a number (-1 to stop): '))

while number != -1:
    if number % 2 == 0:
        count += 1
    number = int(input('Enter another number (-1 to stop): '))

print(f'The number of even numbers entered is {count}.')
```
### Example: Age Group Identifier
Write a program that continuously prompts the user to enter their age and categorizes them into different age groups: "Child" (0-12), "Teenager" (13-19), and "Adult" (20 and above). The program should stop when the user enters -1.
```python
age = int(input('Enter your age (-1 to stop): '))

while age != -1:
    if age <= 12:
        print('You are a Child.')
    elif age <= 19:
        print('You are a Teenager.')
    else:
        print('You are an Adult.')
    age = int(input('Enter your age (-1 to stop): '))

```
### Example
Consider a program that calculates sales commissions repeatedly until the user decides to stop:
```python
# This program calculates sales commissions.

# Create a variable to control the loop.
keep_going = 'y'

# Calculate a series of commissions.
while keep_going == 'y':
    # Get a salesperson's sales and commission rate.
    sales = float(input('Enter the amount of sales: '))
    comm_rate = float(input('Enter the commission rate: '))
    
    # Calculate the commission.
    commission = sales * comm_rate
    
    # Display the commission.
    print(f'The commission is ${commission:,.2f}.')
    
    # See if the user wants to do another one.
    keep_going = input('Do you want to calculate another commission (Enter y for yes): ')
```

### EXERCISES
## `while` Loop Exercises

### Exercise 1: Multiples of 5
Create a program that prompts the user to enter numbers. The program should print out all multiples of 5 that are entered. The loop should stop when the user enters `-1`.

### Exercise 2: Password Validator
Write a program that continuously prompts the user to enter a password. The password should be at least 8 characters long and contain both letters and digits. The program should keep prompting until a valid password is entered.

### Exercise 3: Guess the Number
Create a program that generates a random number between 1 and 100. The user should guess the number, and the program should provide hints if the guess is too high or too low. The loop should continue until the user guesses the correct number.

### Exercise 4: Character Counter
Develop a program that repeatedly asks the user to enter a string. For each string, the program should count and display the number of occurrences of the letter 'e'. The program should stop when the user enters `exit`.

### Exercise 5: Age Verification
Write a program that asks the user to enter their age. The program should continue to prompt the user until they enter an age between 0 and 120, inclusive. Display a message indicating whether the entered age is valid or not.

### Exercise 6: Fibonacci Sequence
Create a program that prints the Fibonacci sequence up to a certain number entered by the user. The program should continue to prompt the user for a number until a positive integer greater than 0 is entered.

### Exercise 7: Counting Down
Write a program that continuously prompts the user to enter a number. The program should display a countdown from that number to zero. The program should stop when the user enters `0`.

### Exercise 8: Sum of Odd Numbers
Develop a program that asks the user to enter numbers and calculates the sum of all odd numbers entered. The loop should stop when the user enters `-1`.

### Exercise 9: Product of Numbers
Create a program that prompts the user to enter numbers and calculates the product of all entered numbers. The program should stop when the user enters `0`.

### Exercise 10: Average Score Calculator
Write a program that repeatedly prompts the user to enter test scores (between 0 and 100). The program should calculate and display the average score. The loop should stop when the user enters `-1`.


## Infinite Loops

An infinite loop is a loop that continues to run indefinitely because there is no condition within the loop to terminate it. This often occurs when the loop's controlling condition never becomes false. Infinite loops usually arise when a programmer forgets to update or change the variable that affects the loop's condition. You should avoid writing infinite loops unless they are intended for specific use cases, such as continuously running a server.

### Example of an Infinite Loop

Here is a simple example demonstrating an infinite loop:

```python
# This program demonstrates an infinite loop.

# Create a variable to control the loop.
keep_going = 'y'

# Warning! Infinite loop!
while keep_going == 'y':
    # Get a salesperson's sales and commission rate.
    sales = float(input('Enter the amount of sales: '))
    comm_rate = float(input('Enter the commission rate: '))

    # Calculate the commission.
    commission = sales * comm_rate

    # Display the commission.
    print(f'The commission is ${commission:,.2f}.')
```

In this example, the loop will never stop because the variable keep_going is always set to 'y', meaning the condition keep_going == 'y' remains true indefinitely.

### Examples
Example 1: Infinite Counter
Write a program that counts numbers starting from 1 and prints each number. Ensure that the loop runs indefinitely by not including a stopping condition.
```python
# Infinite Counter Example
count = 1
while True:
    print(count)
    count += 1
```
Example 2: Endless Input Prompt
Create a program that continuously asks the user to enter their name and prints a greeting. The loop should run indefinitely without any way to exit.

```python
# Endless Input Prompt Example
while True:
    name = input('Enter your name: ')
    print(f'Hello, {name}!')
```

Example 3: Continuous Calculator
Develop a program that repeatedly prompts the user to enter two numbers and displays their sum. Ensure the loop never exits by not including a stopping condition.
```python
# Continuous Calculator Example
while True:
    num1 = float(input('Enter the first number: '))
    num2 = float(input('Enter the second number: '))
    print(f'The sum is {num1 + num2}.')
```

### Checkpoint Questions

- What is a loop iteration?
- Does the while loop test its condition before or after it performs an iteration?
- How many times will 'Hello World' be printed in the following program?
- What is an infinite loop?
- What is the purpose of a loop control variable?
- What might happen if you forget to update the loop control variable inside a while loop?
- How can you ensure that a loop eventually stops executing?

## The `for` Loop: A Count-Controlled Loop

### Concept
A count-controlled loop is used to repeat a set of actions a specific number of times. In Python, you use the `for` statement to create such loops.

### How It Works
The `for` loop iterates over a sequence of values, executing the loop’s body for each value. Here’s the basic structure:
```python
for variable in [value1, value2, ...]:
    statement
    statement
    ...
```

- `variable`: This is the name of the loop variable that takes each value from the list one by one.
- List: This is a sequence of values the loop iterates through.
- Statements: These are the actions performed each time the loop runs.
  
Each time the for loop runs, variable is assigned a value from the list, and the statements inside the loop are executed.

Example 1: Printing Numbers
```python
print('I will display the numbers 1 through 5.')
for num in [1, 2, 3, 4, 5]:
    print(num)
```
Example 2: Printing Odd Numbers
```python
print('I will display the odd numbers 1 through 9.')
for num in [1, 3, 5, 7, 9]:
    print(num)
```
Example 3: Printing Names
```python
print('Here are some names:')
for name in ['Alpha', 'Rugiatu', 'Leigh']:
    print(name)
```
Print Days of the Week
```python
print('Days of the week:')
for day in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']:
    print(day)
```

## Sample Word Problems Using `for` Loop

### Example 1: Sum of the First 10 Positive Integers
Write a program to calculate the sum of the first 10 positive integers (1 to 10).

```python
total = 0
for num in range(1, 11):
    total += num
print(f'The sum of the first 10 positive integers is {total}.')
```
### Example: Print Each Letter of a String
Write a program that takes a string and prints each character of the string on a new line.
```python
text = "Hello"
for char in text:
    print(char)
```

### Using the range function

#### Example: Print the Multiplication Table of a Given Number
Write a program that prints the multiplication table of a given number n.

```python
n = 7
for i in range(1, 11):
    print(f'{n} x {i} = {n * i}')
```

### Understanding the `range` Function in Python

Python's `range` function is a built-in tool that simplifies the creation of loops that need to execute a specific number of times. The `range` function generates an iterable, an object that contains a sequence of values you can loop through. This makes it easier to write count-controlled loops without having to manually create a list.

#### Example: Using `range` in a For Loop

Instead of manually creating a list of values, you can use the `range` function like this:

```python
for num in range(5):
    print(num)
```
In this example, range(5) generates a sequence of integers from 0 up to (but not including) 5. This loop works similarly to the following code:
```python
for num in [0, 1, 2, 3, 4]:
    print(num)
```
Both snippets will print the numbers 0 through 4 because the loop iterates five times.

#### Real-World Example: Speed Conversion
Imagine your friend Alpha Leigh has a Kekeh with a speedometer that shows speeds in kilometers per hour (KPH). To avoid speeding tickets in the United States, where speeds are measured in miles per hour (MPH), she asks you to write a program that converts KPH to MPH. The conversion formula is:
`MPH = KPH * 0.6214`
You can create a speed conversion table using the following code:
```python
START_SPEED = 60
END_SPEED = 131
INCREMENT = 10
CONVERSION_FACTOR = 0.6214

print('KPH\tMPH')
print('--------------')

for kph in range(START_SPEED, END_SPEED, INCREMENT):
    mph = kph * CONVERSION_FACTOR
    print(f'{kph}\t{mph:.1f}')
```

This program prints a table showing speeds from 60 KPH to 130 KPH, converted to MPH in steps of 10 KPH.

### Allowing User Input to Control Loop Iterations
Sometimes, you might want to let the user control the number of iterations in a loop. Here's an example where the user specifies the maximum value for the loop:

```py
end = int(input('How high should I go? '))

print('\nNumber\tSquare')
print('--------------')

for number in range(1, end + 1):
    square = number**2
    print(f'{number}\t{square}')
```
### Example: Reversing the Order of Iteration
You can also use range to create sequences that count downwards. Here's an example:

```python
for num in range(5, 0, -1):
    print(num)
```
### Exercises
- Rewrite the following code so it calls the range function instead of using the list [0, 1, 2, 3, 4, 5]:
```python
for x in [0, 1, 2, 3, 4, 5]:
  print('I love to program!')
```
- What will the following code display?
  ```python
  for number in range(6):
    print(number)
  ```
- What will the following code display?
  ```python
  for number in range(2, 6):
    print(number)
  ```
  
- What will the following code display?
  ```python
  for number in range(0, 501, 100):
    print(number)
  ```
- What will the following code display?
```python
  for number in range(10, 5, −1):
    print(number)
```

## Calculating a Running Total

### Concept
A **running total** is a cumulative sum of numbers that increases with each iteration of a loop. The variable that stores this running total is known as an **accumulator**.

Many programming tasks require calculating the total of a series of numbers. For example, when calculating a business’s total sales for a week, the program would read daily sales as input and compute the total of those numbers.

Programs that calculate the total of a series of numbers typically use two key elements:
- A loop that reads each number in the series.
- A variable that accumulates the total of the numbers as they are read.

The loop is responsible for adding each number to the accumulator. It is crucial to initialize the accumulator to `0` before the loop starts. If the accumulator starts with any value other than `0`, the final total will be incorrect.

Here’s a sample program that calculates the sum of a series of numbers entered by the user:

```python
MAX = 5  # The maximum number of inputs

# Initialize an accumulator variable.
total = 0.0

# Explain the purpose of the program.
print('This program calculates the sum of', end=' ')
print(f'{MAX} numbers you will enter.')

# Get the numbers and accumulate the total.
for counter in range(MAX):
    number = int(input('Enter a number: '))
    total += number  # Using the augmented assignment operator

# Display the total of the numbers.
print(f'The total is {total}.')
```
Output
```
This program calculates the sum of 5 numbers you will enter.
Enter a number: 1
Enter a number: 2
Enter a number: 3
Enter a number: 4
Enter a number: 5
The total is 15.0.
```
In this program, the total variable acts as the accumulator. The loop reads numbers from the user and adds them to total using the augmented assignment operator +=. When the loop finishes, total contains the sum of all entered numbers.

### The Augmented Assignment Operators
Quite often, assignment statements have the same variable on both sides of the = operator. For example:
```python
x = 10
x = x + 1
print(x)
```
Output
```
11
```
This statement adds 1 to x and then assigns the result back to x. An alternative way to write this using an augmented assignment operator is:
```py
x += 1
```
The same concept applies to subtraction, multiplication, division, and other operations. Here’s a summary of some augmented assignment operators:

| Operator | Example Usage | Equivalent To   |
|----------|---------------|-----------------|
| `+=`     | `x += 5`      | `x = x + 5`     |
| `-=`     | `y -= 2`      | `y = y - 2`     |
| `*=`     | `z *= 10`     | `z = z * 10`    |
| `/=`     | `a /= b`      | `a = a / b`     |
| `%=`     | `c %= 3`      | `c = c % 3`     |
| `//=`    | `x //= 3`     | `x = x // 3`    |
| `**=`    | `y **= 2`     | `y = y ** 2`    |


### Exercises
Checkpoint Exercises
1. What is an accumulator?
2. Should an accumulator be initialized to any specific value? Why or why not?
3. What will the following code display?
```python
total = 0
for count in range(1, 6):
    total += count
print(total)
```
4. What will the following code display?
```python
number1 = 10
number2 = 5
number1 = number1 + number2
print(number1)
print(number2)
```
5. Rewrite the following statements using augmented assignment operators:
a) quantity = quantity + 1
b) days_left = days_left - 5
c) price = price * 10
d) price = price / 2