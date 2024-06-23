# Python Type Conversion and Type Casting

In this class, you will learn about the Type conversion and uses of type conversion.

Before learning Type Conversion in Python, you should have knowledge about **Python Data Types**.

## Type Conversion

The process of converting the value of one data type (integer, string, float, etc.) to another data type is called type conversion. Python has two types of type conversion.

1. **Implicit Type Conversion**
2. **Explicit Type Conversion**

### 1. Implicit Type Conversion

In Implicit type conversion, Python automatically converts one data type to another data type. This process doesn't need any user involvement.

Let's see an example where Python promotes the conversion of the lower data type (integer) to the higher data type (float) to avoid data loss.


```python
# Example 1: Converting integer to float

num_int = 123
num_flo = 1.23

num_new = num_int + num_flo

print("datatype of num_int:",type(num_int))
print("datatype of num_flo:",type(num_flo))

print("Value of num_new:",num_new)
print("datatype of num_new:",type(num_new))
```
`datatype of num_int: <class 'int'>
datatype of num_flo: <class 'float'>
Value of num_new: 124.23
datatype of num_new: <class 'float'>`
    

**Explanation**:

In the above program,

1. We add two variables **`num_int`** and **`num_flo`**, storing the value in **`num_new`**.
2. We will look at the data type of all three objects respectively.
3. In the output, we can see the data type of **`num_int`** is an **`integer`** while the data type of **`num_flo`** is a **`float`**.
4. Also, we can see the **`num_new`** has a **`float`** data type because Python always converts smaller data types to larger data types to avoid the loss of data.

Now, let's try adding a string and an integer, and see how Python deals with it.


```python
# Example 2: Addition of string(higher) data type and integer(lower) datatype

num_int = 123
num_str = "456"

print("Data type of num_int:",type(num_int))
print("Data type of num_str:",type(num_str))

print(num_int+num_str)  # ERROR! cannot add two different data types (int and string)
```

**Explanation**:

In the above program,

1. We add two variables **`num_int`** and **`num_str`**.
2. As we can see from the output, we got **`TypeError`**. Python is not able to use Implicit Conversion in such conditions.
3. However, Python has a solution for these types of situations which is known as Explicit Conversion.

### 2. Explicit Type Conversion

In Explicit Type Conversion, users convert the data type of an object to required data type. We use the predefined functions like **`int()`**, **`float()`**, **`str()`**, etc to perform explicit type conversion.

This type of conversion is also called typecasting because the user casts (changes) the data type of the objects.

**Syntax:**

```python
<required_datatype>(expression)
```

Typecasting can be done by assigning the required data type function to the expression.


```python
# int to float
num_int = 10
print('num_int',num_int)         # 10
num_float = float(num_int)
print('num_float:', num_float)   # 10.0
```
```
    num_int 10
    num_float: 10.0
    
```

```python
# float to int
gravity = 9.81
print(int(gravity))             # 9
```
```
    9
    
```

```python
# Example 3: Addition of string and integer using explicit conversion

num_int = 123
num_str = "456"       # there is a number inside " " so I CAN change it to integer
#num_str = "jason"    # there is a name inside " " so I cannot change to integer

print("Data type of num_int:",type(num_int))
print("Data type of num_str before Type Casting:",type(num_str))

num_str = int(num_str) # change from "string" data type to integer datatype
print("Data type of num_str after Type Casting:",type(num_str))

num_sum = num_int + num_str  # Now we can add two same data types (int and int)

print("Sum of num_int and num_str:",num_sum)
print("Data type of the sum:",type(num_sum))
```

<!-- Data type of num_int: <class 'int'>
`Data type of num_str before Type Casting: <class 'str'>`
`Data type of num_str after Type Casting: <class 'int'>`
`Sum of num_int and num_str: 579`
Data type of the sum: <class 'int'>```
-->

**Explanation**:

In the above program,

1. We add **`num_str`** and **`num_int`** variable.
2. We converted **`num_str`** from string(higher) to integer(lower) type using **`int()`** function to perform the addition.
3. After converting **`num_str`** to an integer value, Python is able to add these two variables.
4. We got the **`num_sum`** value and data type to be an integer.


```python
float(6)  # means converting interger 6 to a float value
```

```
    6.0
```


Conversion from **`float`** to **`int`** will truncate the value (make it closer to zero).


```python
int(33.6)  # means converting float 33.6 to a integer value

# When you change from FLOAT to INTEGER it will round-up the number
```

```
    33
```



```python
int(-33.6)
```

```
    -33
```


Conversion to and from **`string`** must contain compatible values.


```python
# int to str
num_int = 10
print(num_int)                  # 10
num_str = str(num_int)
print(num_str)                  # '10'
```

 ```
    10
    10
    
```

```python
float('7.5')  # means converting string '7.5' to a float value
```

```
    7.5

```


```python
# str to int or float
num_str = '10.6' #or '10'
# print('num_int', int(num_str))      # 10
print('num_float', float(num_str))  # 10.6
```
```
    num_float 10.6
    
```

```python
str(65)  # means converting integer 65 to a string value
```



```
    '65'

```


```python
int('1p')  # means converting string '1p' to a integer value
```

```python
str("1p")
```
```
 '1p'
```

We can even convert one sequence to another.


```python
set([1,2,3])  # [1,2,3] is tuple and now converting to a set {}
```




    {1, 2, 3}




```python
tuple({5,6,7})  # {1,2,3} is set and now converting to a tuple ()
```




    (5, 6, 7)




```python
list('hello')  # ("hello") is string and now converting to a list []
```




    ['h', 'e', 'l', 'l', 'o']




```python
# str to list
first_name = 'Alpha'
print(first_name)               # 'Alpha'
first_name_to_list = list(first_name)
print(first_name_to_list)            # ['A', 'l', 'p', 'h', 'a']
```
``` Alpha
    ['A', 'l', 'p', 'h', 'a']
``` 

To convert to dictionary, each element must be a pair:


```python
dict([[1,2],[3,4]])  # [[1,2],[3,4]] is tuple and now converting to a dictionary
```

```
{1: 2, 3: 4}
```


```python
dict([(3,63),(7,91)])  # [(3,63),(7,91)] is tuple and now converting to a dictionary
```

`{3: 63, 7: 91}`

## Key Points to Remember

1. Type Conversion is the conversion of object from one data type to another data type.
2. Implicit Type Conversion is automatically performed by the Python interpreter.
3. Python avoids the loss of data in Implicit Type Conversion.
4. Explicit Type Conversion is also called Type Casting, the data types of objects are converted using predefined functions by the user.
5. In Type Casting, loss of data may occur as we enforce the object to a specific data type.

