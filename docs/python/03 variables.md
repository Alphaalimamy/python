## INTRODUCTION TO PYTHON

### How you will learn

Python as a calculator
Python is perfectly suited to do basic calculations. It can do addition, subtraction, multiplication and division.
```python

# Addition
print(4 + 10)

# Subtraction
print(20 - 8)

# Multiplication
print(4 * 5)
# Division
print( 7/ 2)

# Floor Division
print( 7 // 2)
```

## Exercise
Now it's your turn to practice!
```python
## Instructions
- Print the sum of 4 + 5.
- Print the result of subtracting 5 from 5.
- Print the result of multiplying 3 by 5.
- Print the result of dividing 10 by 2.
```
## When to use Python?
Python is a flexible language. For which applications can you use Python?
- For quick calculations
- Develop a database-driven website
- Clean and analyze data
- All of the above

```python
#### Example, do not modify!
print(5 / 8)

##### Put code below here
print(7+10)
```
### Comments
You can also add comments to your Python scripts. Comments are important to make sure that you and others can understand what your code is about and do not run as Python code. Comments are notes in the code that the Python interpreter ignores. They are used to explain code and make it more readable. 

They start with `#` tag. See the comment in the editor, `#` Division; now it's your turn to add a comment!

### Types of Comments 
There are two main types of comments in Python:

#### Single-Line Comments
Single-line comments begin with a hash symbol (#) and extend to the end of the line. They are used to write brief explanations or notes about the code.

```python
# Addition
# Division
print(5 / 8)


print(7 /10)
```

#### Multi-Line Comments
Multi-line comments are used for longer explanations or notes that span multiple lines. In Python, there is no special syntax for multi-line comments. Instead, you can use multiple single-line comments or a string (enclosed in triple quotes) that is not assigned to any variable.

```python
"""
This is a multi-line comment.
It can span multiple lines and
is enclosed in triple quotes.
"""
z = 15
```

### Exercises
```
1. What is comment?
2. State and explain the types of comments
3. Define variables for the width and height of the rectangle.
    - Write a comment explaining that you are calculating the area of the rectangle.
    - Calculate the area and store it in a variable.
    - Write a comment explaining that you are printing the area.
    - Print the area.

```
### Variables
- A variable is a name that represents a storage location in the computer’s memory. 
- Specific, case-sensitive name
- Call up value through variable 

#### Creating Variables with Assignment Statements
You use an assignment statement to create a variable and make it reference a piece of data.
Here is an example of an assignment statement:
### 
```python
height = 1.56
weight = 61.7
print(height)
```

An assignment statement is written in the following general format:
```
variable = expression
```
The equal sign `(=)` is known as the assignment operator. In the general format, variable is the name of a variable and expression is a value, or any piece of code that results in a value. After an assignment statement executes, the variable listed on the left side of the =
operator will reference the value given on the right side of the = operator. To experiment with variables, you can type assignment statements in interactive mode, as shown here:
```python
width = 20
height = 

print(width)
print(height)
```
### EXERCISE
- Create a variable name room.
- Assign the value 500 to it
- print the state 'I am staying in room'
- print the value the variable room


```python
# Create two variables: top_speed and distance.
top_speed = 160
distance = 300

# Display the values referenced by the variables.
print('The top speed is')
print(top_speed)
print('The distance traveled is')
print(distance)

```
### Variable Naming Rules
- You cannot use one of Python’s keywords as a variable name. 
- A variable name cannot contain spaces.
- The first character must be one of the letters a through z, A through Z, or an underscore character (_).
- After the first character you may use the letters a through z or A through Z, the digits 0 through 9, or underscores.
- Uppercase and lowercase characters are distinct. This means the variable name
- ItemsOrdered is not the same as itemsordered.

### Exercise
| Variable Name | Legal or Illegal | Reason                                                        |
|---------------|------------------|---------------------------------------------------------------|
| units_per_day | Legal            |                                                              |
| dayOfWeek     | Legal            |                                                              |
| 3dGraph       | Illegal          | Variable names cannot begin with a digit.                     |
| June2024      | Legal            |                                                              |
| Mixture#3     | Illegal          | Variable names may only use letters, digits, or underscores.  |

Variable Reassignment
Variables are called “variable” because they can reference different values while a program is running. When you assign a value to a variable, the variable will reference that value until you assign it a different value. 

```python
# This program demonstrates variable reassignment.
# Assign a value to the dollars variable.
 leones = 200
 print('I have', leones, 'in my account.')

# Reassign dollars so it references  a different value.
leones = 300
print('But now I have', leones, 'in my account!')
```

```
Program Output
I have 200 in my account.
But now I have 300 in my account!
```

### Numeric Data Types and Literals
- A numeric literal that is written as a whole number with no decimal point is considered an int. Examples are 7, 124, and −9.
- A numeric literal that is written with a decimal point is considered a float. Examples are 1.5, 3.14159, and 5.0.

### Storing Strings with the str Data Type
- In addition to the int and float data types, Python also has a data type named str, which is used for storing strings in memory.

```python
# Create variables to reference two strings.
first_name = 'Rugiatu'
last_name = 'Alpha'
# Display the values referenced by the variables.
print(first_name, last_name)
## Calculate BMI
```
```
Rugiatu Alpha
```
## exercises
```
1. What is a variable?
2. Which of the following are illegal variable names in Python, and why?
    x
    99bottles
    july2009
    theSalesFigureForFiscalYear
    r&d
    grade_report

grade_report
3. Is the variable name Sales the same as sales? Why or why not?
4. Is the following assignment statement valid or invalid? If it is invalid, why?
    72 = amount

5. What will the following code display?
    val = 99
    print('The value is', 'val')
6. Look at the following assignment statements:
    value1 = 99
    value2 = 45.9
    value3 = 7.0
    value4 = 7
    value5 = 'abc'
After these statements execute, what is the Python data type of the values referenced by each variable?
7. What will be displayed by the following program?
    my_value = 99
    my_value = 0
    print(my_value)
```
### BMI Calculator
```math
\text{BMI} = \frac{weight}{height^2}
```
```python
height = 1.79
weight = 68.7
height

68.7 / 1.79 ** 2
weight / height ** 2
bmi = weight / height ** 2
bmi
```
### Reproducibility
```
height = 1.79
weight = 68.7
bmi = weight / height ** 2
print(bmi)
```

```python
### Reproducibility
height = 1.79
weight = 74.2 # <-
bmi = weight / height ** 2
print(bmi)
```
### Variable Assignment
In Python, a variable allows you to refer to a value with a name. To create a variable `x` with a value of `5`, you use `=`, like this example:
`x = 5`
You can now use the name of this variable, `x`, instead of the actual value, `5`.

Remember, `=` in Python means assignment, it doesn't test equality!
#### Instructions

- Create a variable savings with the value of 100.
- Check out this variable by typing print(savings) in the script.

```python
# Create a variable savings
savings=100

# Print out savings
print(savings)
```
## Exercise 2
### Instructions

- Create a variable monthly_savings, equal to 10 and num_months, equal to 4.
- Multiply monthly_savings by num_months and save it to new_savings.
- Add new_savings to savings, saving the sum as total_savings.
- Print the value of total_savings.



### Calculations with variables
- You've now created a savings variable, so let's start saving!
- Instead of calculating with the actual values, you can use variables instead. The savings variable you created in the previous exercise with a value of 100 is available to you.
-  How much money would you have saved four months from now, if you saved $10 each month?

```python
# Create a variable savings
savings = 100

# Create a variable growth_multiplier
growth_multiplier = 1.1

# Calculate result
result = savings * growth_multiplier **7

# Print out result
print(result)
```

### Other variable types
- In the previous exercise, you worked with the integer Python data type:
- int, or integer: a number without a fractional part. savings, with the value 100, is an example of an integer.
- Next to numerical data types, there are three other very common data types:
- float, or floating point: a number that has both an integer and fractional part, separated by a point. 1.1, is an example of a float.
- str, or string: a type to represent text. You can use single or double quotes to build a string.
- bool, or boolean: a type to represent logical values. It can only be True or False (the capitalization is important!).

### Exercise
## Instructions

- Create a new float, half, with the value 0.5.
- Create a new string, intro, with the value "Hello! How are you?".
- Create a new boolean, is_good, with the value True.

```python
# Create a variable desc
desc = 'compound interest'

# Create a variable profitable
profitable = True
```
### Python Types
### Guess the type
- To find out the type of a value or `a` variable that refers to that value, you can use the `type()` function. Suppose you've defined a variable a, but you forgot the type of this variable. To determine the type of `a`, simply execute:

```   
type(a)
```
-  We already went ahead and created three variables: `a, b and c`. You can use the IPython shell to discover their type. Which of the following options is correct?

```python
type(bmi)
```

```python
day_of_week = 5
type(day_of_week)
```

```python
x = "body mass index"
y = 'this works too'
type(y)
```
```python
z = True
type(z)
```

### Operations with other types
- Different data types behave differently in Python.
- When you `sum` two strings, for example, you will get different behavior than when you `sum` two integers or two booleans.
- In the script some variables with different types have already been created. It is up to you to use them.


## Instructions
- Calculate the product of monthly_savings and num_months. Store the result in year_savings.
- What do you think the resulting type will be? Find out by printing out the type of year_savings.
- Calculate the sum of intro and intro and store the result in a new variable doubleintro.
- Print out doubleintro. Did you expect this?

```python
monthly_savings = 10
num_months = 12
intro = "Hello! How are you?"

# Calculate year_savings using monthly_savings and num_months

# Print the type of year_savings

# Assign sum of intro and intro to doubleintro

# Print out double intro
```
### Type conversion
- Using the + operator to paste together two strings can be very useful in building custom messages.
- Suppose, for example, that you've calculated your savings want to summarize the results in a string.
- To do this, you'll need to explicitly convert the types of your variables. More specifically, you'll need `str()`, to convert a value into a string. `str(savings)`, for example, will convert the integer savings to a string.
- Similar functions such as `int()`, `float()` and `bool()` will help you convert Python values into any type.

### Instructions

- Try to understand the error message.
- Fix the code such that the printout runs without errors; use the function str() to convert the variables savings and total_savings to strings.
- Convert the variable pi_string to a float and store this float as a new variable, pi_float.

```python
# Definition of savings and total_savings
savings = 100
total_savings = 150

# Fix the printout
print("I started with $" + savings + " and now have $" + total_savings + ". Awesome!")

# Definition of pi_string
pi_string = "3.1415926"

# Convert pi_string into float: pi_float
```
### Can Python handle everything?
- Now that you know something more about combining different sources of information, have a look at the four Python expressions below. Which one of these will throw an error? You can always copy and paste this code in the IPython Shell to find out!

### Exercise

Possible answers

- "I can add integers, like " + str(5) + " to strings."
- "I said " + ("Hey " * 2) + "Hey!"
- "The correct answer to this multiple choice exercise is answer number " + 2
- True + False

### Input, Processing, and Output
Input is data that the program receives. When a program receives data, it usually processes it by performing some operation with it. The result of the operation is sent out of the program as output. Computer programs typically perform the following three-step process:
1. Input is received.
2. Some process is performed on the input.
3. Output is produced.

Input is any data that the program receives while it is running. One common form of input
is data that is typed on the keyboard. Once input is received, some process, such as a mathematical calculation, is usually performed on it. The results of the process are then sent out of the program as output.

## Displaying Output with the print Function
```python
print('Rugiatu Alpha')
print('123 Black Hall Road')
print('Freetown, Sierra Leone')
```

## Strings and String Literals
Programs almost always work with data of some type. For example, Program 2-1 uses the
following three pieces of data:
```python
'Rugiatu Alpha'
'123 Black Hall Road'
'Freetown, Sierra Leone'
```
In Python, you can enclose string literals in a set of single-quote marks (') or a set of
double-quote marks ("). 

```python
print("Rugiatu Alpha")
print("123 Black Hall Road")
print("Freetown, Sierra Leone")
```
If you want a string literal to contain either a single-quote or an apostrophe as part of the string, you can enclose the string literal in double-quote marks. 
```python
print("Don't fear!")
print("I'm here!")
```

### Reading Input from the Keyboard
Programs commonly need to read input typed by the user on the keyboard. We will use the Python functions to do this.

```
variable = input(prompt)
```
```python
# Get the user's first name.
first_name = input('Enter your first name: ')
# Get the user's last name.
last_name = input('Enter your last name: ')

# Print a greeting to the user.
print('Hello', first_name, last_name)
```

### Reading Numbers with the input Function
| Function     | Description                                                                                      |
|--------------|--------------------------------------------------------------------------------------------------|
| int(item)    | You pass an argument to the int() function and it returns the argument’s value converted to an int. |
| float(item)  | You pass an argument to the float() function and it returns the argument’s value converted to a float. |


```python
# Get the user's name, age, and income.
name = input('What is your name? ')
age = int(input('What is your age? '))
income = float(input('What is your income? '))
# Display the data.
print('Here is the data you entered:')
print('Name:', name)
print('Age:', age)
print('Income:', income)
```

### Exercise
- You need the user of a program to enter a customer’s last name. Write a statement that prompts the user to enter this data and assigns the input to a variable.
- You need the user of a program to enter the amount of sales for the week. Write a statement that prompts the user to enter this data and assigns the input to a variable.

## Performing Calculations
Python has numerous operators that can be used to perform mathematical
calculations.

| Symbol | Operation        | Description                                                                        |
|--------|------------------|------------------------------------------------------------------------------------|
| +      | Addition         | Adds two numbers                                                                   |
| −      | Subtraction      | Subtracts one number from another                                                  |
| *      | Multiplication   | Multiplies one number by another                                                   |
| /      | Division         | Divides one number by another and gives the result as a floating-point number      |
| //     | Integer division | Divides one number by another and gives the result as a whole number               |
| %      | Remainder        | Divides one number by another and gives the remainder                              |
| **     | Exponent         | Raises a number to a power                                                         |

```python
# Assign a value to the salary variable.
salary = 2500.0

# Assign a value to the bonus variable.
bonus = 1200.0
# Calculate the total pay by adding salary
 # and bonus. Assign the result to pay.
pay = salary + bonus

# Display the pay.
print('Your pay is', pay)
```
```
Your pay is 3700.0
```
# Calculating a Percentage

If you are writing a program that works with a percentage, you have to make sure that the percentage’s decimal point is in the correct location before doing any math with the percentage. This is especially true when the user enters a percentage as input. Most users enter the number 50 to mean 50 percent, 20 to mean 20 percent, and so forth. Before you perform any calculations with such a percentage, you have to divide it by 100 to move its decimal point two places to the left.

Let’s step through the process of writing a program that calculates a percentage. Suppose a retail business is planning to have a storewide sale where the prices of all items will be 20 percent off. We have been asked to write a program to calculate the sale price of an item after the discount is subtracted. Here is the algorithm:

1. Get the original price of the item.
2. Calculate 20 percent of the original price. This is the amount of the discount.
3. Subtract the discount from the original price. This is the sale price.
4. Display the sale price.

In step 1, we get the original price of the item. We will prompt the user to enter this data on the keyboard. In our program we will use the following statement to do this. Notice the value entered by the user will be stored in a variable named `original_price`.

In step 2, we calculate the amount of the discount. To do this, we multiply the original price by 20 percent. The following statement performs this calculation and assigns the result to the discount variable:

`discount = original_price * 0.2`

In step 3, we subtract the discount from the original price. The following statement does this calculation and stores the result in the sale_price variable:

`sale_price = original_price - discount`

Last, in step 4, we will use the following statement to display the sale price:

`print('The sale price is', sale_price)`

```python
original_price = float(input("Enter the item's original price: "))

# This program gets an item's original price and
# calculates its sale price, with a 20% discount.
# Get the item's original price.
original_price = float(input("Enter the item's original price: "))
# Calculate the amount of the discount.
discount = original_price * 0.2

# Calculate the sale price.
sale_price = original_price − discount

# Display the sale price.
print('The sale price is', sale_price)
```

### Floating-Point and Integer Division
```python
print(5 /2)
print(5 // 2)
```
- When the result is positive, it is truncated, which means that its fractional part is thrown away.
- When the result is negative, it is rounded away from zero to the nearest integer.

### Operator Precedence

First, operations that are enclosed in parentheses are performed first. Then, when two operators share an operand, the operator with the higher precedence is applied first. The precedence of the math operators, from highest to lowest, are:
1. Exponentiation: **
2. Multiplication, division, and remainder: * / // %
3. Addition and subtraction: + −
# Some Expressions and Their Values

| Expression        | Value |
|-------------------|-------|
| 5 + 2 * 4         | 13    |
| 10 / 2 − 3        | 2.0   |
| 8 + 12 * 2 − 4    | 28    |
| 6 − 3 * 2 + 7 − 1 | 6     |


### Grouping with Parentheses
| Expression               | Value |
|--------------------------|-------|
| (5 + 2) * 4              | 28    |
| 10 / (5 − 3)             | 5.0   |
| 8 + 12 * (6 − 2)         | 56    |
| (6 − 3) * (2 + 7) / 3    | 9.0   |
## The Exponent Operator
Two asterisks written together (**) is the exponent operator, and its purpose is to raise a number to a power. For example, the following statement raises the length variable to the power of 2 and assigns the result to the area variable:
   - `area = length**2`

### The Remainder Operator
In Python, the `%` symbol is the remainder operator. (This is also known as the modulus operator.) The remainder operator performs division, but instead of returning the quotient, it returns the remainder. The following statement assigns `2` to leftover:
`leftover = 17 % 3` This statement assigns 2 to leftover because `17` divided by 3 is 5 with a remainder of 2.
The remainder operator is useful in certain situations. 

```python
# Get a number of seconds from the user.
total_seconds = float(input('Enter a number of seconds: '))

# Get the number of hours.
hours = total_seconds // 3600

# Get the number of remaining minutes.
minutes = (total_seconds // 60) % 60

# Get the number of remaining seconds.
seconds = total_seconds % 60

# Display the results.
print('Here is the time in hours, minutes, and seconds:')
print('Hours:', hours)
print('Minutes:', minutes)
print('Seconds:', seconds)
```
```
Enter a number of seconds: 11730 Enter
Here is the time in hours, minutes, and seconds:
Hours: 3.0
Minutes: 15.0
Seconds: 30.0
```
### Converting Math Formulas to Programming Statements
# Algebraic and Programming Expressions

| Algebraic Expression | Python Statement           |
|----------------------|----------------------------|
| y = 3x / 2           | y = 3 * x / 2              |
| z = 3bc + 4          | z = 3 * b * c + 4          |
| a = (x + 2) / (b − 1)| a = (x + 2) / (b - 1)      |

| Algebraic Expression | Operation Being Performed    | Programming Expression |
|----------------------|------------------------------|------------------------|
| 6B                   | 6 times B                    | 6 * B                  |
| (3)(12)              | 3 times 12                   | 3 * 12                 |
| 4xy                  | 4 times x times y            | 4 * x * y              |


# Converting a Math Formula to a Programming Statement

Suppose you want to deposit a certain amount of money into a savings account and leave it alone to draw interest for the next 10 years. At the end of 10 years, you would like to have $10,000 in the account. How much do you need to deposit today to make that happen? You can use the following formula to find out:

```math
$$\text{P} = \frac{F}{(1 + r)^n} $$
```

The terms in the formula are as follows:
- **P** is the present value, or the amount that you need to deposit today.
- **F** is the future value that you want in the account. (In this case, F is Le 10,000.)
- **r** is the annual interest rate.
- **n** is the number of years that you plan to let the money sit in the account.

It would be convenient to write a computer program to perform the calculation because then we can experiment with different values for the variables. Here is an algorithm that we can use:

1. Get the desired future value.
2. Get the annual interest rate.
3. Get the number of years that the money will sit in the account.
4. Calculate the amount that will have to be deposited.
5. Display the result of the calculation in step 4.

In steps 1 through 3, we will prompt the user to enter the specified values. We will assign the desired future value to a variable named `future_value`, the annual interest rate to a variable named `rate`, and the number of years to a variable named `years`.

In step 4, we calculate the present value, which is the amount of money that we will have to deposit. We will convert the formula previously shown to the following statement. The statement stores the result of the calculation in the `present_value` variable.


```math
$$present\_value = \frac{future\_value}{(1.0 + rate)^{years}}$$
```

In step 5, we display the value in the present_value variable.

```python
# Get the desired future value.
future_value = float(input('Enter the desired future value: '))

# Get the annual interest rate.
rate = float(input('Enter the annual interest rate: '))

# Get the number of years that the money will appreciate.
years = int(input('Enter the number of years the money will grow: '))

# Calculate the amount needed to deposit.
present_value = future_value / (1.0 + rate)**years
# Display the amount needed to deposit.
print('You will need to deposit this amount:' present_value)
```
```
- Enter the desired future value: 10000.0 Enter
- Enter the annual interest rate: 0.05 Enter
- Enter the number of years the money will grow: 10 Enter
- You will need to deposit this amount: 6139.13253541
```

### Formatting Values
Placeholders in an f-string can include a format specifier that causes the placeholder’s value to be formatted when it is displayed. For example, with a format specifier you can round values to a specified number of decimal places, and display numbers with comma separators. You can also left, right, or center align values with a format specifier. In fact, you can use format specifiers to control many of the ways that values are displayed. Here is the general format for writing a placeholder with a format specifier:

`{placeholder:format-specifier}`

Notice that in the general format, the placeholder and the format specifier are separated by a colon. Let’s look at a few specific ways to use format specifiers
### Rounding Floating-Point Numbers

```python
# This program demonstrates how a floating-point
# number is displayed with no formatting.
amount_due = 5000.0
monthly_payment = amount_due / 12.0
print(f'The monthly payment is {monthly_payment}.')
```

# Programming Exercises
## 1. Personal Information
Write a program that displays the following information:
- Your name
- Your address, with city, state, and ZIP
- Your telephone number
- Your college major

## 2. Sales Prediction
A company has determined that its annual profit is typically 23 percent of total sales. Write a program that asks the user to enter the projected amount of total sales, then displays the profit that will be made from that amount.

*Hint: Use the value 0.23 to represent 23 percent.*

## 3. Land Calculation
One acre of land is equivalent to 43,560 square feet. Write a program that asks the user to enter the total square feet in a tract of land and calculates the number of acres in the tract.

*Hint: Divide the amount entered by 43,560 to get the number of acres.*

## 4. Total Purchase
A customer in a store is purchasing five items. Write a program that asks for the price of each item, then displays the subtotal of the sale, the amount of sales tax, and the total.

*Assume the sales tax is 7 percent.*

## 5. Distance Traveled
Assuming there are no accidents or delays, the distance that a car travels down the interstate can be calculated with the following formula:
```math
$$\text{Distance} = \text{Speed} \times \text{Time}$$
```
A car is traveling at 70 miles per hour. Write a program that displays the following:
- The distance the car will travel in 6 hours
- The distance the car will travel in 10 hours
- The distance the car will travel in 15 hours

## 6. Sales Tax
Write a program that will ask the user to enter the amount of a purchase. The program should then compute the state and county sales tax. Assume the state sales tax is 5 percent and the county sales tax is 2.5 percent. The program should display the amount of the purchase, the state sales tax, the county sales tax, the total sales tax, and the total of the sale (which is the sum of the amount of purchase plus the total sales tax).

*Hint: Use the value 0.025 to represent 2.5 percent, and 0.05 to represent 5 percent.*

## 7. Miles-per-Gallon
A car’s miles-per-gallon (MPG) can be calculated with the following formula:
```math
$$ MPG = \frac{\text{Miles driven}}{\text{Gallons of gas used}} $$
```
Write a program that asks the user for the number of miles driven and the gallons of gas used. It should calculate the car's MPG and display the result.

## 8. Tip, Tax, and Total
Write a program that calculates the total amount of a meal purchased at a restaurant. The program should ask the user to enter the charge for the food, then calculate the amounts of an 18 percent tip and 7 percent sales tax. Display each of these amounts and the total.

## 9. Celsius to Fahrenheit Temperature Converter
Write a program that converts Celsius temperatures to Fahrenheit temperatures. The formula is as follows:
```math
F = \frac{9}{5}C + 32
```
The program should ask the user to enter a temperature in Celsius, then display the temperature converted to Fahrenheit.

## 10. Ingredient Adjuster
A cookie recipe calls for the following ingredients:
- 1.5 cups of sugar
- 1 cup of butter
- 2.75 cups of flour
The recipe produces 48 cookies with this amount of the ingredients. Write a program that asks the user how many cookies he or she wants to make, then displays the number of cups of each ingredient needed for the specified number of cookies.

## 11. Male and Female Percentages
Write a program that asks the user for the number of males and the number of females registered in a class. The program should display the percentage of males and females in the class.

*Hint: Suppose there are 8 males and 12 females in a class. There are 20 students in the class. The percentage of males can be calculated as 8 ÷ 20 = 0.4, or 40%. The percentage of females can be calculated as 12 ÷ 20 = 0.6, or 60%.*

## 12. Stock Transaction Program
Last month, Alpha purchased some stock in AI Lab Software, Inc. Here are the details of the purchase:
- The number of shares that Alpha purchased was 2,000.
- When Alpha purchased the stock, he paid Le 40.00 per share.
- Alpha paid his stockbroker a commission that amounted to 3 percent of the amount he paid for the stock.

Two weeks later, Alpha sold the stock. Here are the details of the sale:
- The number of shares that Alpha sold was 2,000.
- He sold the stock for Le 42.75 per share.
- He paid his stockbroker another commission that amounted to 3 percent of the amount he received for the stock.

Write a program that displays the following information:
- The amount of money Alpha paid for the stock.
- The amount of commission Alpha paid his broker when he bought the stock.
- The amount for which Alpha sold the stock.
- The amount of commission Alpha paid his broker when he sold the stock.
- Display the amount of money that Alpha had left when he sold the stock and paid his broker (both times). If this amount is positive, then Alpha made a profit. If the amount is negative, then Alpha lost money.

### 13. Planting Grapevines
A vineyard owner is planting several new rows of grapevines, and needs to know how many grapevines to plant in each row. She has determined that after measuring the length of a future row, she can use the following formula to calculate the number of vines that will fit in the row, along with the trellis end-post assemblies that will need to be constructed at each end of the row:

```math
$$V = \frac{R - 2E}{S}$$
```

The terms in the formula are:
- **V** is the number of grapevines that will fit in the row.
- **R** is the length of the row, in feet.
- **E** is the amount of space, in feet, used by an end-post assembly.
- **S** is the space between vines, in feet.

Write a program that makes the calculation for the vineyard owner. The program should ask the user to input the following:
- The length of the row, in feet
- The amount of space used by an end-post assembly, in feet
- The amount of space between the vines, in feet

Once the input data has been entered, the program should calculate and display the number of grapevines that will fit in the row.

### 14. Compound Interest
When a bank account pays compound interest, it pays interest not only on the principal amount that was deposited into the account, but also on the interest that has accumulated over time. Suppose you want to deposit some money into a savings account, and let the account earn compound interest for a certain number of years. The formula for calculating the balance of the account after a specified number of years is:
```math
$$A = P(1 + \frac{r}{n})^{nt}$$
```

The terms in the formula are:
- **A** is the amount of money in the account after the specified number of years.
- **P** is the principal amount that was originally deposited into the account.
- **r** is the annual interest rate.
- **n** is the number of times per year that the interest is compounded.
- **t** is the specified number of years.

Write a program that makes the calculation for you. The program should ask the user to input the following:
- The amount of principal originally deposited into the account
- The annual interest rate paid by the account
- The number of times per year that the interest is compounded (For example, if interest is compounded monthly, enter 12. If interest is compounded quarterly, enter 4.)
- The number of years the account will be left to earn interest
