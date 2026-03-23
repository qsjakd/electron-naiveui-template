# Zod

zod是一个ts优先的验证库，使用zod，你可以定义用于数据验证的模式，从简单的string到复杂的嵌套对象。

### 基本用法

---

在执行其他任何操作前，你需要定义一个schema。处于本指南的目的我们将使用一个简单的对象模式。

```ts
import * as z from "zod/mini"

const Player = z.object({ 
  username: z.string(),
  xp: z.number()
});
```

### 解析数据

---

对于任何 Zod 模式，使用 `.parse` 来验证输入。如果有效，Zod 将返回输入的强类型深度克隆。

```ts
Player.parse({ username: "billie", xp: 100 }); 
// => returns { username: "billie", xp: 100 }
```

> 注意 — 如果你的架构使用某些异步 API，例如 `async`、[refinements](https://zod.nodejs.cn/basics#refine) 或 [transforms](https://zod.nodejs.cn/api#transform)，则需要改用 `.parseAsync()` 方法。

### 错误处理

---

当验证失败时，`.parse()` 方法将抛出一个 `ZodError` 实例，其中包含有关验证问题的详细信息。

```ts
try {
  Player.parse({ username: 42, xp: "100" });
} catch(error){
  if(error instanceof z.core.$ZodError){
    error.issues; 
    /* [
      {
        expected: 'string',
        code: 'invalid_type',
        path: [ 'username' ],
        message: 'Invalid input: expected string'
      },
      {
        expected: 'number',
        code: 'invalid_type',
        path: [ 'xp' ],
        message: 'Invalid input: expected number'
      }
    ] */
  }
}
```

要避免 `try/catch` 阻塞，你可以使用 `.safeParse()` 方法返回包含成功解析数据或 `ZodError` 的纯文本结果对象。结果类型为 [可区分联合](https://ts.nodejs.cn/docs/handbook/2/narrowing.html#discriminated-unions)，因此你可以方便地处理这两种情况。

```ts
const result = Player.safeParse({ username: 42, xp: "100" });
if (!result.success) {
  result.error;   // ZodError instance
} else {
  result.data;    // { username: string; xp: number }
}
```

> 注意 — 如果你的架构使用某些异步 API，例如 `async`、[refinements](https://zod.nodejs.cn/basics#refine) 或 [transforms](https://zod.nodejs.cn/api#transform)，则需要改用 `.safeParseAsync()` 方法。

### 推断类型

---

Zod 会根据你的模式定义推断出静态类型。你可以使用 `z.infer<>` 实用程序提取此类型，并根据需要使用它。

```ts
const Player = z.object({ 
  username: z.string(),
  xp: z.number()
});

// extract the inferred type
type Player = z.infer<typeof Player>;

// use it in your code
const player: Player = { username: "billie", xp: 100 };
```

## 定义模式

____

要验证数据，你要定义一个数据结构/类型（模式）。从简单的原始值到复杂的嵌套对象和数组。

### 基本类型/原语

```ts
import * as z from "zod";

// primitive types
z.string();
z.number();
z.bigint();
z.boolean();
z.symbol();
z.undefined();
z.null();
```

### 强制转换

要将输入数据强制转换为适当的类型，请改用`z.coerce`

```ts
z.coerce.string();    // String(input)
z.coerce.number();    // Number(input)
z.coerce.boolean();   // Boolean(input)
z.coerce.bigint();    // BigInt(input)
```

这些模式的强制类型会尝试将输入值转换为适当的类型。

```ts
const schema = z.coerce.string();

schema.parse("tuna");    // => "tuna"
schema.parse(42);        // => "42"
schema.parse(true);      // => "true"
schema.parse(null);      // => "null"
```

这些强制类型转换的默认输入模式是`any`。要制定更具体的输入类型，请传递一个泛型参数

```ts
const A = z.coerce.number();
type AInput = z.input<typeof A>; // => unknown

const B = z.coerce.number<number>();
type BInput = z.input<typeof B>; // => number
```

**Zod中强制类型转换是如何工作的？**

zod使用内置构造函数强制转换所有输入

| Zod API           | 强制转换          |
| ----------------- | ------------- |
| z.coerce.string() | String(value) |

使用 `z.coerce.boolean()` 进行布尔强制转换可能不会按你预期的方式工作。任何 [truthy](https://web.nodejs.cn/en-US/docs/Glossary/Truthy) 值都会被强制转换为 `true`，而任何 [falsy](https://web.nodejs.cn/en-US/docs/Glossary/Falsy) 值都会被强制转换为 `false`。

```ts
const schema = z.coerce.boolean(); // 本质：Boolean(input)// => false
schema.parse("false"); // => true  ⚠️ 非空字符串均为 true
schema.parse("true");  // => true
schema.parse(0);       // => false ⚠️ 仅 Falsy 值为 false
schema.parse("");      // => false
```

**自定义输入输出类型**

默认情况下，任何 `z.coerce` 架构的 _input_ 类型都是 `unknown`。在某些情况下，输入类型可能更具体会更好。你可以使用通用参数来指定输入类型。

```ts
const regularCoerce = z.coerce.string();
type RegularInput = z.input<typeof regularCoerce>; // => unknown 输入任意类型
type RegularOutput = z.output<typeof regularCoerce>; // => string 都输出为string类型

const customInput = z.coerce.string<string>();
type CustomInput = z.input<typeof customInput>; // => string
type CustomOutput = z.output<typeof customInput>; // => string
```

### 字面量

---

字面模式表示一种[字面类型](https://ts.nodejs.cn/docs/handbook/2/everyday-types.html#literal-types)，如 `"hello world"` 或 `5`。

```ts
const tuna = z.literal("tuna");
const twelve = z.literal(12);
const twobig = z.literal(2n);
const tru = z.literal(true);
```

表示js字面量`null`和`undefined`:

```ts
z.null();
z.undefined();
z.void(); // 等同于 z.undefined()
```

要允许多个字面量值

```ts
const colors = z.literal(["red", "green", "blue"]);

colors.parse("green"); // ✅
colors.parse("yellow"); // ❌
```

要从字面模式中提取允许值的集合：

```ts
colors.values; // => Set<"red" | "green" | "blue">
```

### 字符串

---

Zod 提供了一些内置的字符串验证和转换 API。要执行一些常见的字符串验证：

```ts
z.string().max(5);
z.string().min(5);
z.string().length(5);
z.string().regex(/^[a-z]+$/);
z.string().startsWith("aaa");
z.string().endsWith("zzz");
z.string().includes("---");
z.string().uppercase();
z.string().lowercase();
```

要执行一些简单的字符串转换：

```ts
z.string().trim(); // 去除首尾空白字符
z.string().toLowerCase(); // 转换为小写
z.string().toUpperCase(); // 转换为大写
z.string().normalize(); // 规范化 Unicode 字符
```

### 字符串格式

---

要针对某些常见字符串格式进行验证：

```ts
z.email();
z.uuid();
z.url();
z.httpUrl();       // http or https URLs only
z.hostname();
z.emoji();         // validates a single emoji character
z.base64();
z.base64url();
z.hex();
z.jwt();
z.nanoid();
z.cuid();
z.cuid2();
z.ulid();
z.ipv4();
z.ipv6();
z.mac();
z.cidrv4();        // ipv4 CIDR block
z.cidrv6();        // ipv6 CIDR block
z.hash("sha256");  // or "sha1", "sha384", "sha512", "md5"
z.iso.date();
z.iso.time();
z.iso.datetime();
z.iso.duration();
```

#### 电子邮件

要验证电子邮件地址:

```ts
z.email()
```

默认情况下，Zod 使用一个相对严格的电子邮件正则表达式，旨在验证包含常见字符的普通电子邮件地址。它大致相当于 Gmail 强制执行的规则。要了解有关此正则表达式的更多信息，请参阅 [这篇文章](https://colinhacks.com/essays/reasonable-email-regex)。

```ts
/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i
```

要自定义电子邮件验证行为，你可以将自定义正则表达式传递给 `pattern` 参数。

```ts
z.email({ pattern: /your regex here/ });
```

Zod 导出了几个你可以使用的有用的正则表达式。

```ts
// Zod 默认的邮箱正则表达式
z.email();
z.email({ pattern: z.regexes.email }); // 等同于上面

// 浏览器验证 input[type=email] 字段时使用的正则表达式
// 参考链接：https://web.nodejs.cn/en-US/docs/Web/HTML/Element/input/email
z.email({ pattern: z.regexes.html5Email });

// 经典的 emailregex.com 正则表达式（符合 RFC 5322 标准）
z.email({ pattern: z.regexes.rfc5322Email });

// 宽松的正则表达式，允许 Unicode 字符（适用于国际化邮箱地址）
z.email({ pattern: z.regexes.unicodeEmail });
```

#### UUIDs

要验证UUID:

```ts
z.uuid()
```

要指定特定的UUID版本

```ts
// supports "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"
z.uuid({ version: "v4" });

// for convenience
z.uuidv4();
z.uuidv6();
z.uuidv7();
```

RFC 9562/4122 UUID 规范要求第 8 个字节的前两位为 `10`。其他类似 UUID 的标识符不强制此约束。要验证任何类似 UUID 的标识符：

```ts
z.guid()
```

更多对字符串格式的验证见zod文档

### 数字

---

使用`z.number()`来验证数字.它允许任何有限数字。

```ts
const schema = z.number();

schema.parse(3.14);      // ✅
schema.parse(NaN);       // ❌
schema.parse(Infinity);  // ❌
```

Zod 实现了一些特定于数字的验证：

```ts
z.number().gt(5);                      // 大于 5
z.number().gte(5);                     // 大于等于 5（别名 .min(5)）
z.number().lt(5);                      // 小于 5
z.number().lte(5);                     // 小于等于 5（别名 .max(5)）
z.number().positive();                 // 正数（别名 .gt(0)）
z.number().nonnegative();              // 非负数（大于等于 0）
z.number().negative();                 // 负数
z.number().nonpositive();              // 非正数（小于等于 0）
z.number().multipleOf(5);              // 5 的倍数（别名 .step(5)）
```

### 布尔值

要验证布尔值：

```ts
z.boolean().parse(true); // => true
z.boolean().parse(false); // => false
```

### 日期

使用 `z.date()` 来验证 `Date` 实例。

```ts
z.date().safeParse(new Date()); // success: true
z.date().safeParse("2022-01-12T06:15:00.000Z"); // success: false
```

要自定义错误信息：

```ts
z.date({
  error: issue => issue.input === undefined ? "Required" : "Invalid date"
});
```

zod提供了一些用于特定日期的验证

```ts
z.date().min(new Date("1900-01-01"), { error: "Too old!" });   // 最小日期（不能早于1900-01-01），自定义错误消息
z.date().max(new Date(), { error: "Too young!" });             // 最大日期（不能晚于当前日期），自定义错误消息
```

### 枚举

---

使用 `z.enum` 来验证输入是否属于一组固定的允许字符串值。

```ts
const FishEnum = z.enum(["Salmon", "Tuna", "Trout"]);
 
FishEnum.parse("Salmon"); // => "Salmon"
FishEnum.parse("Swordfish"); // => ❌
```

**注意** —— 如果你将字符串数组声明为变量，Zod 将无法正确推断每个元素的确切类型。

```ts
const fish = ["Salmon", "Tuna", "Trout"];
 
const FishEnum = z.enum(fish);
type FishEnum = z.infer<typeof FishEnum>; // string
```

要解决这个问题，要么直接将数组传递给 `z.enum()` 函数，要么使用 `as const`。

```ts
const fish = ["Salmon", "Tuna", "Trout"] as const;
 
const FishEnum = z.enum(fish);
type FishEnum = z.infer<typeof FishEnum>; // "Salmon" | "Tuna" | "Trout"
```

也支持类枚举的对象字面量（`{ [key: string]: string | number }`）。

```ts
const Fish = {
  Salmon: 0,
  Tuna: 1
} as const
 
const FishEnum = z.enum(Fish)
FishEnum.parse(Fish.Salmon); // => ✅
FishEnum.parse(0); // => ✅
FishEnum.parse(2); // => ❌
```

你也可以传入一个外部声明的 TypeScript 枚举。

```ts
enum Fish {
  Salmon = 0,
  Tuna = 1
}
 
const FishEnum = z.enum(Fish);
FishEnum.parse(Fish.Salmon); // => ✅
FishEnum.parse(0); // => ✅
FishEnum.parse(2); // => ❌
```
