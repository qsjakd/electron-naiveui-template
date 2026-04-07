# # 🐍 Python 学习手册 - 适合 ADHD 人群

# 🐍 Python 学习手册 - 适合 ADHD 人群

> **专为 ADHD 大脑设计**：短小精悍、视觉化、重点突出、拒绝大段文字！

---

## 📚 目录导航

| 章节  | 内容  | 难度  |
| --- | --- | --- |
| [Part 1](#part-1-%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8) | 变量、列表、字典、函数、类 | ⭐   |
| [Part 2](#part-2-%E8%BF%9B%E9%98%B6%E6%8A%80%E8%83%BD) | 运算符、循环、异常、文件 | ⭐⭐  |
| [Part 3](#part-3-%E9%AB%98%E7%BA%A7%E9%AD%94%E6%B3%95) | 推导式、生成器、装饰器 | ⭐⭐⭐ |

---

# Part 1: 基础入门

## 1️⃣ 变量与基础类型

```python
# 🎯 四大基础类型
message = "hello world"    # str  字符串
age = 18                   # int  整数
pi = 3.14                  # float 浮点数
is_student = True          # bool  布尔值

# 查看类型
print(type(message))  # <class 'str'>
```

> 💡 **一句话记忆**：变量就像**贴了标签的盒子**，盒子里装的是数据，标签是变量名

### ⚠️ 变量命名规则

| ✅ 正确 | ❌ 错误 | 说明  |
| --- | --- | --- |
| `my_name` | `1name` | 不能数字开头 |
| `_count` | `my-name` | 不能用减号 |
| `Message` | `@var` | 不能用特殊符号 |

---

## 2️⃣ 列表

> 🎯 **列表 = 可修改的购物清单**

```python
fruits = ["apple", "banana", "cherry"]

# 读取
print(fruits[0])      # apple（从0开始计数！）

# 修改
fruits[0] = 'plum'

# 添加
fruits.append('watermelon')
```

### 📋 列表常用操作

| 方法  | 作用  | 示例  |
| --- | --- | --- |
| `append()` | 末尾添加 | `fruits.append("mango")` |
| `remove()` | 删除指定元素 | `fruits.remove("banana")` |
| `pop()` | 弹出最后一个 | `last = fruits.pop()` |
| `+` | 合并列表 | `all = list1 + list2` |

---

## 3️⃣ 元组

> 🎯 **元组 = 只读的列表（不能改！）**

```python
fruits_tuple = ("apple", "banana", "cherry")
# fruits_tuple[0] = "orange"  ❌ 报错！不能修改
```

| 对比  | 列表  | 元组  |
| --- | --- | --- |
| 符号  | `[]` | `()` |
| 可修改 | ✅   | ❌   |

---

## 4️⃣ 循环

### 🔄 for 循环

```python
# 遍历列表
for fruit in ["apple", "banana"]:
    print(fruit)

# 遍历数字
for i in range(5):     # 0, 1, 2, 3, 4
    print(i ** 2)      # i的平方
```

### 🔢 range() 用法

```python
range(5)        # 0~4
range(1, 5)     # 1~4
range(0, 10, 2) # 0,2,4,6,8（步长为2）
```

### 📊 循环求和模板

```python
total = 0
for num in [1, 2, 3, 4, 5]:
    total += num
print(total)  # 15
```

---

## 5️⃣ 条件语句

```python
age = 65

if age < 18:
    print("未成年")
elif age < 65:
    print("成年")
else:
    print("老年")
```

> 🧠 **记忆技巧**：`if` → `elif` → `else` 就像 **"如果...否则如果...否则"**

---

## 6️⃣ 字典

> 🎯 **字典 = 键值对集合（像查字典一样查数据）**

```python
person = {
    "name": "Alice",
    "age": 18,
    "city": "New York"
}

# 访问值
print(person["name"])      # Alice

# 获取所有键/值/键值对
print(person.keys())       # dict_keys(['name', 'age', 'city'])
print(person.values())     # dict_values(['Alice', 18, 'New York'])
print(person.items())      # dict_items([('name', 'Alice'), ...])
```

### 🔄 遍历字典

```python
for key, value in person.items():
    print(f"{key} : {value}")
```

---

## 7️⃣ 函数

### 📦 基础函数

```python
# 无参数
def hello():
    print("hello world")

# 有参数
def greet(name):
    print(f"hello {name}")

# 有返回值
def square(num):
    return num ** 2
```

### 📋 函数模板：求和

```python
def sum_all(nums):
    total = 0
    for n in nums:
        total += n
    return total

print(sum_all([1, 2, 3, 4, 5]))  # 15
```

---

## 8️⃣ 类

> 🎯 **类 = 创建对象的模板**

```python
class Calculator:
    def __init__(self, nums):
        self.nums = nums        # 初始化时保存数据
    
    def sum(self):
        total = 0
        for n in self.nums:
            total += n
        return total
    
    def avg(self):
        return self.sum() / len(self.nums)

# 使用
calc = Calculator([1, 2, 3, 4, 5])
print(calc.sum())  # 15
print(calc.avg())  # 3.0
```

### 🧠 类的核心概念

| 概念  | 说明  | 类比  |
| --- | --- | --- |
| `class` | 类的声明 | 图纸  |
| `__init__` | 构造函数 | 出厂设置 |
| `self` | 实例自己 | "我" |
| `self.xxx` | 实例属性 | 我的私有财产 |

---

# Part 2: 进阶技能

## 9️⃣ 运算符

### ⚖️ 比较运算符

```python
print(5 == 5)   # True  等于
print(5 != 5)   # False 不等于
print(5 > 3)    # True  大于
print(5 < 3)    # False 小于
print(5 >= 5)   # True  大于等于
print(5 <= 5)   # True  小于等于
```

### 🧠 逻辑运算符（⚠️ 不是 `&&` 和 `||`）

```python
# Python 用英文单词！
print(True and False)   # False  与（都要真）
print(True or False)    # True   或（有一个真）
print(not True)         # False  非（取反）
```

| Python | JavaScript | 含义  |
| --- | --- | --- |
| `and` | `&&` | 逻辑与 |
| `or` | `\|\|` | 逻辑或 |
| `not` | `!` | 逻辑非 |

### 🔍 成员运算符

```python
fruits = ["apple", "banana", "cherry"]

if "apple" in fruits:
    print("苹果在里面")

if "orange" not in fruits:
    print("橙子不在里面")
```

---

## 🔟 while 循环

> ⚠️ **小心死循环！一定要有退出条件**

```python
count = 0
while count < 3:
    print(count)
    count += 1    # 别忘了这个！
```

### 🚦 break 与 continue

```python
for i in range(5):
    if i == 2:
        continue    # 跳过本次循环（跳过2）
    if i == 4:
        break       # 终止整个循环
    print(i)
# 输出: 0 1 3
```

| 关键词 | 作用  | 类比  |
| --- | --- | --- |
| `continue` | 跳过本次 | 这题不做，做下一题 |
| `break` | 终止全部 | 直接交卷 |

---

## 1️⃣1️⃣ 字符串操作

```python
text = "Hello, Python!"

# 🍕 切片 [开始:结束]
print(text[0:5])    # Hello

# 🔽 转小写
print(text.lower()) # hello, python!

# 🔄 替换
print(text.replace("Python", "World"))  # Hello, World!

# ✂️ 分割（返回列表）
words = "apple, banana, orange"
print(words.split(","))  # ['apple', ' banana', ' orange']

# 🧹 去除两端空格
name = " enkidu "
print(name.strip())  # enkidu
```

### 📋 字符串方法速查表

| 方法  | 作用  | 示例  |
| --- | --- | --- |
| `lower()` | 转小写 | `"HELLO".lower()` → `"hello"` |
| `upper()` | 转大写 | `"hello".upper()` → `"HELLO"` |
| `strip()` | 去两端空格 | `" hi ".strip()` → `"hi"` |
| `replace()` | 替换  | `"hi".replace("i", "ey")` → `"hey"` |
| `split()` | 分割  | `"a,b".split(",")` → `['a', 'b']` |
| `[a:b]` | 切片  | `"hello"[0:2]` → `"he"` |

---

## 1️⃣2️⃣ 集合

> 🎯 **集合 = 去重神器！无序、不重复**

```python
nums = [1, 2, 2, 3, 4, 4, 5]
unique = set(nums)
print(unique)  # {1, 2, 3, 4, 5}
```

### 📊 四大数据结构对比

| 类型  | 符号  | 特点  | 用途  |
| --- | --- | --- | --- |
| 列表  | `[]` | 可修改、有序 | 存储序列 |
| 元组  | `()` | 不可改、有序 | 常量数据 |
| 字典  | `{}` | 键值对 | 映射关系 |
| 集合  | `{}` | 无序、不重复 | 去重  |

---

## 1️⃣3️⃣ 函数进阶

### 🎁 默认参数

```python
def say_hello(name="匿名"):
    print(f"hello {name}")

say_hello()         # hello 匿名
say_hello("Alice")  # hello Alice
```

### 📦 不定长参数 `*args`

```python
def calc_sum(*args):
    total = 0
    for n in args:
        total += n
    print(total)

calc_sum(1, 2, 3)        # 6
calc_sum(1, 2, 3, 4, 5)  # 15
```

> 💡 `*args` 会把所有参数打包成**元组**

### ⚡ 匿名函数 lambda

```python
# 传统写法
def multiply(x, y):
    return x * y

# lambda 写法
multiply = lambda x, y: x * y

print(multiply(3, 4))  # 12
```

> 🎯 **一句话函数用 lambda**

---

## 1️⃣4️⃣ 异常处理

```python
try:
    num = int(input("请输入数字："))
    result = 10 / num
    print(f"结果是 {result}")

except ValueError:
    print("❌ 你输入的不是数字")

except ZeroDivisionError:
    print("❌ 不能除以0")

finally:
    print("✅ 程序结束")
```

### 🧩 try-except 结构

```text
┌─────────────────────────────────────┐
│  try:                               │
│    尝试执行的代码                    │
│    ┌─────────────────────────────┐  │
│    │ 成功 → 跳过 except           │  │
│    │ 失败 → 跳到对应 except       │  │
│    └─────────────────────────────┘  │
│  except 错误类型:                   │
│    处理错误                          │
│  finally:                           │
│    无论如何都执行                    │
└─────────────────────────────────────┘
```

---

## 1️⃣5️⃣ 文件操作

### ✍️ 写入文件

```python
# 'w' = 写入（覆盖）
# 'a' = 追加
with open("test.txt", "w", encoding="utf-8") as f:
    f.write("第一行\n")
    f.write("第二行\n")
```

### 📖 读取文件

```python
# 'r' = 读取
with open("test.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)
```

> 💡 `with` 语句会**自动关闭文件**，不用担心忘记关！

---

## 1️⃣6️⃣ 模块导入

```python
# 导入整个模块
import math
print(math.sqrt(16))  # 4.0

import random
print(random.randint(1, 10))  # 1~10随机数

# 只导入某个函数
from time import sleep
sleep(2)  # 暂停2秒
```

### 📦 常用内置模块

| 模块  | 用途  | 示例  |
| --- | --- | --- |
| `math` | 数学运算 | `sqrt()`, `pi` |
| `random` | 随机数 | `randint()`, `choice()` |
| `time` | 时间相关 | `sleep()`, `time()` |
| `os` | 操作系统 | 文件/目录操作 |

---

## 1️⃣7️⃣ 类的继承

```python
# 父类
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print(f"{self.name} 发出声音")

# 子类继承父类
class Dog(Animal):
    def speak(self):  # 重写方法
        print(f"{self.name} 说汪汪汪")

class Cat(Animal):
    def speak(self):
        print(f"{self.name} 说喵喵喵")

# 使用
dog = Dog("旺财")
dog.speak()  # 旺财 说汪汪汪
```

```text
┌──────────────────┐
│     Animal       │  ← 父类
│  ─────────────   │
│  speak()         │
└────────┬─────────┘
         │ 继承
    ┌────┴────┐
    ▼         ▼
┌───────┐  ┌───────┐
│  Dog  │  │  Cat  │  ← 子类
│汪汪汪 │  │喵喵喵 │     (重写speak)
└───────┘  └───────┘
```

---

# Part 3: 高级魔法

## 1️⃣8️⃣ 列表推导式

> 🎯 **一行代码创建列表！**

### ❌ 老写法

```python
nums = [1, 2, 3, 4, 5]
result = []
for item in nums:
    result.append(item * 10)
print(result)  # [10, 20, 30, 40, 50]
```

### ✅ 新写法（推导式）

```python
nums = [1, 2, 3, 4, 5]
result = [item * 10 for item in nums]
print(result)  # [10, 20, 30, 40, 50]
```

### 🎯 带条件筛选

```python
nums = [1, 2, 3, 4, 5]
# 只要偶数，乘以10
result = [n * 10 for n in nums if n % 2 == 0]
print(result)  # [20, 40]
```

### 📋 推导式公式

```text
[表达式 for 变量 in 列表 if 条件]
  ↓       ↓      ↓       ↓
结果    循环   遍历    筛选
```

---

## 1️⃣9️⃣ 生成器

> 🎯 **惰性求值 = 按需生产 = 省内存**

### ❌ 普通列表（一次生成全部）

```python
# 这会占用大量内存！
nums = [i ** 2 for i in range(1000000)]
```

### ✅ 生成器（按需生成）

```python
# 把 [] 改成 ()
nums = (i ** 2 for i in range(1000000))

# 需要时才计算
print(next(nums))  # 0
print(next(nums))  # 1
print(next(nums))  # 4
print(next(nums))  # 9
```

### 🎰 yield 关键词

```python
def 摸奖机():
    yield "普通奖励"
    yield "高级奖励"
    yield "金色传说"

抽奖 = 摸奖机()
print(next(抽奖))  # 普通奖励
print(next(抽奖))  # 高级奖励
print(next(抽奖))  # 金色传说
```

> 💡 **yield vs return**
> 
> -   `return`：函数结束，返回结果
>     
> -   `yield`：暂停函数，记住状态，下次继续
>     

---

## 2️⃣0️⃣ 装饰器

> 🎯 **不修改原函数，给它加"外挂"**

### 🤔 问题：每个函数都要加计时

```python
def 打怪():
    print("打怪开始")

def 买药水():
    print("买药水开始")

# 想要每个函数前后都打印"开始/结束"...
# 难道要一个个改？
```

### ✅ 装饰器解决方案

```python
# 定义装饰器（外挂）
def 加计时器(原函数):
    def 包装后:
        print("⏱️ 开始运行...")
        res = 原函数(*args, **kwargs)
        print("✅ 运行结束")
        return res
    return 包装后

# 使用装饰器
@加计时器
def 打怪():
    print("🗡️ 打怪中")

@加计时器
def 买药水():
    print("🧪 买药水中")

# 测试
打怪()
# ⏱️ 开始运行...
# 🗡️ 打怪中
# ✅ 运行结束

买药水()
# ⏱️ 开始运行...
# 🧪 买药水中
# ✅ 运行结束
```

### 🧩 装饰器原理图

```text
┌──────────────────────────────────┐
│      @加计时器                     │
│         ↓                        │
│  def 打怪():                      │
│      print("打怪")                │
│                                  │
│  实际执行：                        │
│  打怪 = 加计时器(打怪)             │
│         ↓                        │
│  包装后(打怪)                      │
│  ┌────────────────────┐          │
│  │ print("开始")       │          │
│  │ 原函数()           │          │
│  │ print("结束")       │          │
│  └────────────────────┘          │
└──────────────────────────────────┘
```

---

# 🎯 速查表总览

## 数据类型

| 类型  | 符号  | 可修改 | 示例  |
| --- | --- | --- | --- |
| 字符串 | `""` `''` | ❌   | `"hello"` |
| 整数  | \-  | ❌   | `42` |
| 浮点数 | \-  | ❌   | `3.14` |
| 布尔  | \-  | ❌   | `True` `False` |
| 列表  | `[]` | ✅   | `[1, 2, 3]` |
| 元组  | `()` | ❌   | `(1, 2, 3)` |
| 字典  | `{k:v}` | ✅   | `{"a": 1}` |
| 集合  | `{}` | ✅   | `{1, 2, 3}` |

## 循环控制

| 关键词 | 作用  |
| --- | --- |
| `break` | 终止循环 |
| `continue` | 跳过本次 |
| `pass` | 占位（什么都不做） |

## 常用快捷键

| 场景  | 代码  |
| --- | --- |
| 遍历列表 | `for item in list:` |
| 遍历数字 | `for i in range(n):` |
| 遍历字典 | `for k, v in dict.items():` |
| 列表推导 | `[x for x in list]` |
| 生成器 | `(x for x in list)` |
| 异常捕获 | `try: ... except:` |

---

# 📝 ADHD 学习小贴士

1.  **一次只学一个概念** 🎯
    
    -   不要一次看完所有内容
        
    -   每个概念写一个小程序测试
        
2.  **动手大于阅读** ✋
    
    -   每段代码都要自己敲一遍
        
    -   修改参数看看会发生什么
        
3.  **使用颜色和图形** 🎨
    
    -   用 emoji 标记重要内容
        
    -   画图理解复杂概念（如继承）
        
4.  **番茄工作法** 🍅
    
    -   学习 25 分钟
        
    -   休息 5 分钟
        
    -   重复
        
5.  **即时反馈** ✨
    
    -   每写一段代码就运行
        
    -   看到输出结果会有成就感
        

---

**🎉 恭喜你完成 Python 进阶学习！继续加油！**

> 记住：代码不是看会的，是敲会的！