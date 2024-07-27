## Decision Structures and Boolean Logic

### TOPICS

- The if Statement
- The if-else Statement
- Comparing Strings
- Nested Decision Structures and the if-elif-else Statement
- Logical Operators
- Boolean Variables


### The if Statement
The `if statement` is used to create a decision structure, which allows a program to have more than one path of execution. The if statement causes one or more statements to execute only when a Boolean expression is true.

A  `control structure` is a logical design that controls the order in which a set of statements execute. So far in this book, we have used only the simplest type of control structure: the sequence structure.
 
A `sequence structure` is a set of statements that execute in the order in which they appear. For example, the following code is a sequence structure because the statements execute from top to bottom:
```python
name = input('What is your name? ')
age = int(input('What is your age? '))
print('Here is the data you entered:')
print('Name:', name)
print('Age:', age)
```
![if statement image](../img/if.png)
- In the flowchart, the diamond symbol indicates some condition that must be tested. 
- In this case, we are determining whether the condition Cold outside is true or false. 
- If this condition is true, the action Wear a coat is performed. If the condition is false, the action is skipped.
- The action is conditionally executed because it is performed only when a certain condition is true.
- In Python, we use the if statement to write a single alternative decision structure. Here is the general format of the if statement:
 ```python 
        if condition:
            statement
            statement
            etc.
  ```
  ![if_else](../img/if1.png)
- For simplicity, we will refer to the first line as the if clause. The if clause begins with the word if, followed by a condition, which is an expression that will be evaluated as either true or false. A colon appears after the condition. Beginning at the next line is a block of statements.
 - A `block ` is simply a set of statements that belong together as a group. Notice in the general format that all of the statements in the block are indented.
  - This indentation is required because the Python interpreter uses it to tell where the block begins and ends.
- When the if statement executes, the condition is tested. If the condition is true, the statements that appear in the block following the if clause are executed. 
- If the condition is false, the statements in the block are skipped.

## Boolean Expressions and Relational Operators

- The expressions that are tested by the if statement are called Boolean expressions, named in honor of the English mathematician George Boole
- A relational operator determines whether a specific relationship exists between two values. For example, the greater than operator (>) determines whether one value is greater than another. 
- The equal to operator (==) determines whether two values are equal.

| Operator | Meaning                  |
|----------|--------------------------|
| &gt;      | Greater than             |
| &lt;      | Less than                |
| &gt;=     | Greater than or equal to |
| &lt;=     | Less than or equal to    |
| ==       | Equal to                 |
| !=       | Not equal to             |


| Expression | Meaning                      |
|------------|------------------------------|
| x \> y      | Is x greater than y?         |
| x \< y      | Is x less than y?            |
| x \>= y     | Is x greater than or equal to y? |
| x \<= y     | Is x less than or equal to y?    |
| x == y     | Is x equal to y?             |
| x != y     | Is x not equal to y?         |

```python
sales = int(input(f'Enter sales amount: '))
if sales > 50000:
    bonus = 500.0
```

