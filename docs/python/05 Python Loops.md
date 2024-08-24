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
# SALES PERSONS 1
sales_1 = float(input("Enter the amount of sales person 1: "))
commission_rate_1 = float(input("Enter the commission rate: "))
commission = sales_1 * commission_rate_1
print(f"The commission rate for salesperson 1: {commission:.2f}")

# SALES PERSONS 2
sales_2 = float(input("Enter the amount of sales person 2: "))
commission_rate_2 = float(input("Enter the commission rate: "))
commission_2 = sales_2 * commission_rate_2
print(f"The commission rate for salesperson 1: {commission_2:.2f}")

# SALES PERSONS 3
sales_3 = float(input("Enter the amount of sales person 3: "))
commission_rate_3 = float(input("Enter the commission rate: "))
commission_3 = sales_3 * commission_rate_3
print(f"The commission rate for salesperson 1: {commission_3:.2f}")
```
#### Condition-Controlled and Count-Controlled Loops

We are going to explore two main types of loops: **condition-controlled** and **count-controlled** loops. 

- **Condition-Controlled Loop:**
  - It execute contineously as long as a specified condition remains true.
  - It is implemented using the `while` statement.
  - It is useful when the number of iterations is not known ahead of time and depends on dynamic conditions.

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

### Example 1: Print numbers from 1 to 10 using while loop
```
Initialization: number = 1
Condition: number <= 10
Print: print(number)
Increment: number += 1 (number = number + 1)
```
```python
number = 1
while number <= 10:
    print(number)
    number += 1
```
Output
```
1
2
3
4
5
6
7
8
9
10
```

### Example 2: Print even numbers from 1 to 10 using a while loop.
```
STEPS:
1. Initialise: number = 1
2. Condition: number <= 10
3. Check if number is divided by 2
4. Print: print(number)
5. Increment: number += 1
```

```python
number = 1  # number = 1
while number <= 10:  # Condition: number <= 10
    if number % 2 == 0:  # Check if number is divided by 2
        print(number)  # Print: print(number)
    number += 1  # Increment: number += 1
```
Output
```
2
4
6
8
10
```
### Example 3: Print the first five multiples of 3 using a while loop.
```
1. Initialize: number = 1
2. Condition: number <= 15
3. Check if the number is divisible by 3
4. Print: number
```
Method 1
```python
number = 2
while number <= 15:
    if number % 3 == 0:
        print(number)
    number += 1
```
output
```
1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
4 x 3 = 12
5 x 3 = 15
```

Method 2
```py
number = 1
while number <= 5:
    print(f'{number} x {3} = {number * 3}')
    number += 1
```
output
```
1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
4 x 3 = 12
5 x 3 = 15
```
### Example 4:
You are a teacher organizing a small class activity where you need to print the numbers 1 to 5 on the board, one by one.
You decide to use a while loop in a programming language to achieve this.
Write a program using a while loop that will print the numbers 1 to 5.
```python
number = 1
while 1 <= 5:
    print(number)
    number += 1
```
Output
```
1
2
3
4
5
```
### Exercises 
```
- Print all the odd numbers between 1 and 9 using a while loop.
- Print the numbers from 1 to 5 in reverse order using a while loop.
```

### Example 5: Password Verification
Write a program that repeatedly prompts the user to enter the correct password. The loop should end when the correct password is entered.
```python
correct_password = 'secure123'
entered_password = ''
while entered_password != correct_password:
    entered_password = input('Enter the password: ')
    
print('Password accepted!')
```
### Example :Sum of Numbers
Write a program that prompts the user to enter numbers and adds them to a total until the user enters 0.
```
Initialize: total = 0, number
Condition: number != 0
total: total += number
Print: print(sum)
Increment: number  += 1
```
```python
total = 0
number = float(input('Enter a number (0 to stop): '))
while number != 0:
    total += number
    number = float(input('Enter another number (0 to stop): '))
print(f'The total sum is {total:.2f}.')
```

### Example 6: Guessing Game
Write a program that generates a random number between 1 and 10 and repeatedly prompts the user to guess the number until they guess correctly.

```python
import random
number_to_guess = random.randint(1, 10)
guess = 0
while guess != number_to_guess:
    guess = int(input('Guess the number (1-10): '))
print('Congratulations! You guessed the number.')
```
### Example 7:  Age Checker
Write a program that asks for the user's age and keeps asking until the user provides a valid age (a positive number).
```python
age = -1

while age <= 0:
    age = int(input('Enter your age: '))
print(f'Your age is {age}.')
```
### Example 8: Countdown Timer
Write a program that counts down from 10 to 1 and then prints "Blast off!"
```python
count = 10
while count > 0:
    print(count)
    count -= 1
print('Blast off!')
```
### Example 9: Number Sum
Write a program that continuously prompts the user to enter positive numbers and keeps a running total. The program should stop when the user enters `0` and then display the total sum of the entered numbers.

```python
total = 0
number = float(input('Enter a positive number (0 to stop): '))
while number != 0:
    total += number
    number = float(input('Enter another number (0 to stop): '))
print(f'The total sum is {total:.2f}.')
```
### Example 10:  Factorial Calculator
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

### Example 11: Even Number Counter
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
### Example 12: Age Group Identifier
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
### Example 13: 
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
Imagine your friend Alpha Leigh has a Kekeh with a speedometer that shows speeds in kilometers per hour (KPH). To avoid speeding tickets in the Sierra Leone, where speeds are measured in miles per hour (MPH), he asks you to write a program that converts KPH to MPH. The conversion formula is:
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
a. quantity = quantity + 1
b. days_left = days_left - 5
c. price = price * 10
d. price = price / 2
## Nested Loops
A nested loop is a loop that is inside another loop. A clock is a good example of something that works like a nested loop. The second hand, minute hand, and hour hand all spin around the face of the clock. The hour hand, however, only makes 1 revolution for every 12 of the minute hand’s revolutions. And it takes 60 revolutions of the second hand for the
minute hand to make 1 revolution. This means that for every complete revolution of the hour hand, the second hand has revolved 720 times. Here is a loop that partially simulates
a digital clock. It displays the seconds from 0 to 59:
```python
for seconds in range(60):
   print(seconds)
```
We can add a minutes variable and nest the loop above inside another loop that cycles
through 60 minutes:
```python
for minutes in range(60):
  for seconds in range(60):
     print(minutes, ':', seconds)
```
To make the simulated clock complete, another variable and loop can be added to count
the hours:

```python
for hours in range(24):
  for minutes in range(60):
     for seconds in range(60):
         print(hours, ':', minutes, ':', seconds)
```
This code’s output would be:
```
0:0:0
0:0:1
0:0:2
```
(The program will count through each second of 24 hours.)
```
23:59:59
```
The innermost loop will iterate 60 times for each iteration of the middle loop. The middle
loop will iterate 60 times for each iteration of the outermost loop. When the outermost
loop has iterated 24 times, the middle loop will have iterated 1,440 times and the innermost
loop will have iterated 86,400 times!

### Printing a Right-Angle Triangle Pattern
Write a program that prints a right-angle triangle pattern of stars (*). The number of rows should be 5.
```python
rows = 5
for row in range(1, rows + 1):
    for col in range(i):
        print('*', end='')
    print()  # Move to the next line after each row
```
```
*
**
***
****
*****
```
### Beginner-Intermediate: Generating a Multiplication Table
Create a multiplication table for numbers from 1 to 5.

```python
for row in range(1, 6):
    for col in range(1, 6):
        print(f"{row * col:4}", end=" ")
    print()  # Move to the next line after each row
```
```
  1   2   3   4   5 
  2   4   6   8  10 
  3   6   9  12  15 
  4   8  12  16  20 
  5  10  15  20  25
```
### Intermediate: Creating a Grid of Coordinates
Write a program that generates all possible coordinates for a 3x3 grid. Each coordinate should be printed as (x, y).
```python
for x in range(3):
    for y in range(3):
        print(f"({x}, {y})", end=' ')
    print()  # Move to the next line after each row
```
```
(0, 0) (0, 1) (0, 2) 
(1, 0) (1, 1) (1, 2) 
(2, 0) (2, 1) (2, 2)
```
### Intermediate-Advanced: Transposing a Matrix
Given a 3x3 matrix, write a program to transpose the matrix (swap rows with columns).
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

transpose = []

for i in range(len(matrix)):
    row = []
    for j in range(len(matrix[i])):
        row.append(matrix[j][i])
    transpose.append(row)

# Print transposed matrix
for row in transpose:
    print(row)
```
```
[1, 4, 7]
[2, 5, 8]
[3, 6, 9]
```
### Advanced: Generating Pascal's Triangle
Generate the first 5 rows of Pascal's Triangle. Each number is the sum of the two numbers directly above it.
```python
rows = 5
triangle = []

for i in range(rows):
    row = [1] * (i + 1)
    for j in range(1, i):
        row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
    triangle.append(row)

# Print Pascal's Triangle
for row in triangle:
    print(row)
```
```
[1]
[1, 1]
[1, 2, 1]
[1, 3, 3, 1]
[1, 4, 6, 4, 1]
```

### Seating Arrangement in a Theater
A theater has 10 rows, each with 15 seats. You want to generate a seating chart that labels each seat with its row and seat number (e.g., "Row 1 Seat 1").

```python
for row in range(1, 11):
    for seat in range(1, 16):
        print(f"Row {row} Seat {seat}", end=' | ')
    print()  # Move to the next line after printing one row of seats
```
### Multiplication Table
Generate a multiplication table for numbers from 1 to 10. Each cell should contain the product of the row and column numbers.
```python
for i in range(1, 11):
    for j in range(1, 11):
        print(f"{i * j:4}", end=' ')  # Print with uniform spacing
    print()  # Move to the next line after each row
```
