# TypeScript 从入门到精通：一份综合性教学讲义

## **第一部分：TypeScript 基础**

本部分旨在为熟悉 JavaScript 但对静态类型系统感到陌生的开发者奠定坚实的基础。我们将探讨 TypeScript 的核心价值、它与 JavaScript 的关系，以及如何搭建一个高效的开发环境。

### **第 1 节：走进类型化的 JavaScript**

#### **什么是 TypeScript？JavaScript 的静态类型超集**

TypeScript 是一种由微软开发和维护的开源编程语言，它建立在 JavaScript 的基础之上 。其核心定义是 **JavaScript 的一个类型化超集 (Typed Superset of JavaScript)**。这个定义包含两个关键点：

1. **超集 (Superset)**：任何合法的 JavaScript 代码本身就是合法的 TypeScript 代码 2。这意味着你可以将一个现有的
    
    `.js` 文件重命名为 `.ts` 文件，它依然可以正常工作。TypeScript 并不试图替换 JavaScript，而是在其之上添加新功能。
    
2. **类型化 (Typed)**：TypeScript 最核心的附加功能是一个强大的 **静态类型系统 (Static Type System)** 2。所谓“静态”，是指类型检查发生在代码
    
    **编译时 (compile time)**，也就是在你运行代码之前。这与 JavaScript 的 **动态类型 (dynamic typing)** 形成鲜明对比，后者的类型检查发生在代码 **运行时 (runtime)** 1。
    

这种“超集”的哲学是 TypeScript 能够被广泛采纳的战略性决策。与 CoffeeScript 等需要学习全新语法的“编译到 JS”的语言不同，TypeScript 提供了一条平滑、渐进的迁移路径 2。团队可以逐步地为现有 JavaScript 项目引入类型，而无需进行颠覆性的重写，这极大地降低了学习和使用的门槛。

#### **TypeScript 的价值主张：为何选择它？**

在大型、复杂的项目中，纯 JavaScript 的灵活性有时会成为维护的噩梦。TypeScript 通过其类型系统解决了许多 JavaScript 的固有痛点。

- **提早发现错误 (Early Error Detection)**：这是最直观的好处。TypeScript 编译器可以在开发阶段就捕获大量常见的 JavaScript 错误，例如拼写错误、对 `null` 或 `undefined` 的属性进行操作、函数参数类型或数量不匹配等 1。一项研究甚至表明，TypeScript 能够识别出大约 15% 的常见 JavaScript bug 1。这意味着许多潜在的运行时错误在代码提交之前就被消除了。
    
- **增强代码可读性与自我文档化 (Enhanced Readability & Self-Documentation)**：类型注解（例如 `function greet(name: string)`) 清晰地表明了函数期望接收什么样的数据以及它会返回什么。这使得代码的意图一目了然，对于新加入团队的成员或未来的你来说，这本身就是一种极佳的文档 3。
    
- **卓越的工具支持和开发体验 (Superior Tooling & Developer Experience)**：静态类型为集成开发环境 (IDE) 提供了丰富的元数据。这使得现代代码编辑器（尤其是 VS Code）能够提供极其强大的功能，如智能代码补全 (IntelliSense)、精准的自动重构、方便的“跳转到定义”和“查找所有引用”等 2。这种由类型驱动的工具支持，从根本上提升了开发效率和代码编写的信心。可以说，TypeScript 的核心价值不仅在于“类型”，更在于由类型所赋能的整个开发工具生态。
    
- **可扩展性与可维护性 (Scalability & Maintainability)**：对于大型、复杂的企业级应用，TypeScript 提供的结构和约束使得代码库更容易管理和扩展 1。这也是为什么 Medium、Slack、Asana 等公司选择使用 TypeScript 来构建其复杂产品的原因 4。
    

#### **编译过程：从.ts 到.js**

浏览器和 Node.js 环境无法直接执行 TypeScript 代码。因此，TypeScript 代码必须经过一个 **编译 (compilation)** 或 **转译 (transpilation)** 的过程，将其转换为纯粹的、可执行的 JavaScript 代码 2。

这个过程由 TypeScript 编译器 `tsc` 完成。在编译期间，`tsc` 会执行以下关键任务：

1. **类型检查**：根据类型注解和类型推断，检查代码中是否存在类型错误。
    
2. **移除类型**：将所有的类型注解、接口 (`interface`)、类型别名 (`type`) 等 TypeScript 特有的语法全部移除。
    
3. **代码转换**：可以将较新版本的 ECMAScript 特性（如 ES6+ 的类、模块、箭头函数等）转换为较旧版本的 JavaScript（如 ES5），以确保在不支持新特性的旧浏览器或环境中也能正常运行 2。
    

最终生成的 `.js` 文件是干净、可读的 JavaScript，保留了原始代码的所有运行时行为 2。

|特性|JavaScript|TypeScript|关键影响|
|---|---|---|---|
|**类型系统**|动态类型 (Dynamic)|静态类型 (Static)|错误在运行时暴露 vs 编译时捕获|
|**错误检测**|运行时|编译时|显著减少生产环境中的低级错误|
|**工具支持**|基础的代码提示|智能感知、高级重构|大幅提升开发效率和代码质量|
|**可扩展性**|对大型项目构成挑战|为大型、复杂项目设计|更易于团队协作和长期维护|
|**开发开销**|初始设置成本低|需要编译配置，有学习曲线|长期来看，维护成本更低|

### **第 2 节：搭建开发环境**

#### **安装 TypeScript**

安装 TypeScript 的前提是你的系统中已经安装了 Node.js 和 npm（或 pnpm, yarn 等包管理器），因为 TypeScript 编译器本身就是一个 npm 包 9。

主要有两种安装方式：

1. 项目级安装（推荐）
    
    通过在项目根目录运行 npm install typescript --save-dev，可以将 TypeScript 作为项目的开发依赖项进行安装。这是最佳实践，因为它将 TypeScript 的版本锁定在项目的 package.json 文件中，确保团队所有成员使用统一的编译器版本，从而实现可复现的构建 10。
    
2. 全局安装
    
    通过运行 npm install -g typescript，可以在你的系统中全局安装 TypeScript。这使得 tsc 命令在任何目录下都可用，方便进行一些快速的实验或单文件编译。但对于正式项目，全局安装可能导致不同项目间因 TypeScript 版本不一致而产生问题 9。
    

#### **你的第一个 TypeScript 程序：“Hello, World!” 工作流**

让我们通过一个简单的流程来体验 TypeScript：

1. **创建项目**：创建一个新文件夹并进入，例如 `mkdir my-ts-app && cd my-ts-app`。
    
2. **创建 TS 文件**：创建一个名为 `helloworld.ts` 的文件。
    
3. **编写代码**：在 `helloworld.ts` 中写入以下代码。注意我们为 `message` 变量添加了 `string` 类型注解。
    
    TypeScript
    
    ```
    let message: string = 'Hello, TypeScript!';
    console.log(message);
    ```
    
4. **编译**：在终端中运行 `tsc helloworld.ts`。这会生成一个同名的 `helloworld.js` 文件。查看其内容，你会发现类型注解 `: string` 已经消失了 8。
    
    JavaScript
    
    ```
    // helloworld.js (编译后)
    let message = 'Hello, TypeScript!';
    console.log(message);
    ```
    
5. **运行**：使用 Node.js 运行编译后的 JavaScript 文件：`node helloworld.js`，你将在控制台看到输出 13。
    

为了简化开发流程，可以使用 `ts-node` 这个工具，它可以在内存中编译并直接运行 TypeScript 代码，省去了手动编译的步骤，非常适合开发和脚本执行 11。安装后，只需运行

`ts-node helloworld.ts` 即可。

#### **`tsconfig.json` 简介：TypeScript 项目的核心**

`tsconfig.json` 文件不仅仅是一个配置文件，它是一个项目的 **清单 (manifest)**。它的存在标志着一个目录是 TypeScript 项目的根目录 15。它定义了项目的边界和规则，是实现从“使用 TypeScript”到“架构 TypeScript 项目”的关键。

- **生成配置文件**：在项目根目录下运行 `npx tsc --init`，会自动生成一个带有大量注释的 `tsconfig.json` 文件。这个文件本身就是一个优秀的学习工具，引导开发者探索各种强大的配置选项 13。
    
- **核心作用**：它主要规定了两件事：项目的 **编译选项** (`compilerOptions`) 和需要 **包含的文件** (`include`/`files`) 9。当项目中存在
    
    `tsconfig.json` 时，直接运行 `tsc` 命令（不带任何文件名），编译器就会根据这个文件的配置来编译整个项目 9。
    

#### **编辑器集成：释放 VS Code 的全部潜能**

Visual Studio Code (VS Code) 与 TypeScript 的集成是无与伦比的，因为它们都由微软开发，并且 VS Code 的智能感知功能底层就是由 TypeScript 语言服务驱动的 9。

- **实时错误高亮**：当你编写代码时，类型错误会以红色波浪线的形式即时显示，同时在“问题”面板中列出详细信息 9。
    
- **智能感知与自动补全**：基于强大的类型信息，编辑器可以提供极其精确的属性和方法建议 8。
    
- **快速修复与重构**：将光标置于错误或变量上，按下 `Ctrl+.` (或 `Cmd+.`)，编辑器会提供自动修复建议或重构选项 9。
    
- **源码级调试**：通过在 `tsconfig.json` 中启用 `"sourceMap": true`，你可以直接在 `.ts` 文件中设置断点，并使用 VS Code 的调试器 (按 `F5`) 进行调试。Source Map 会将编译后的 JavaScript 代码映射回原始的 TypeScript 源码 9。
    

开发工作流中的 `ts-node` 和 `nodemon` 等工具，是弥合 TypeScript 编译时特性与 JavaScript 即时执行感之间差距的关键。它们抽象了“编译-运行”的序列，使得 TypeScript 开发体验几乎和原生脚本一样流畅，这是高效开发中不可或缺的一环 13。

## **第二部分：TypeScript 类型系统核心概念**

本部分将深入探讨构成 TypeScript 类型系统的核心构建块，从大家熟悉的原始类型开始，逐步过渡到 TypeScript 特有的高级结构。

### **第 3 节：原始类型、类型注解与类型推断**

#### **基础类型**

TypeScript 支持和 JavaScript 相同的原始数据类型，但为它们提供了明确的、小写字母的类型名称。

- **`string`**, **`number`**, **`boolean`**：这三种是最常用的原始类型，分别代表字符串、数字（包括整数和浮点数）和布尔值（`true`/`false`）18。
    
- **`null`** 和 **`undefined`**：这两个值各自拥有自己的类型，`null` 和 `undefined`。在严格空检查模式下（`strictNullChecks`），它们是非常重要的类型 19。
    
- **`bigint`**：用于表示超过 `Number.MAX_SAFE_INTEGER` (2^53 - 1) 的大整数。使用时需在数字后加上 `n` 后缀 18。
    
- **`symbol`**：用于创建全局唯一的引用值，常作为对象属性的键 18。
    

一个重要的注意事项是，始终使用小写的基础类型（如 `string`），而不是大写的包装对象类型（如 `String`）。后者在 TypeScript 中有特殊的含义，几乎在日常编码中用不到 19。

#### **“逃生舱”：理解 `any` 和 `unknown`**

有时，我们无法在编写代码时确定一个变量的类型，或者需要与未类型化的第三方库交互。TypeScript 提供了两个特殊的类型来处理这种情况。

- **`any`**：`any` 类型是 TypeScript 的“终极逃生舱”。将一个变量声明为 `any`，相当于完全关闭了对该变量的类型检查。你可以对它进行任何操作（访问任意属性、作为函数调用等），编译器都不会报错，这和在纯 JavaScript 中一样 18。
    
    `any` 在从 JavaScript 迁移项目时非常有用，但滥用它会让你失去 TypeScript 带来的所有好处 24。
    
- **`unknown`**：`unknown` 是 `any` 的类型安全对应物 23。你可以将任何类型的值赋给
    
    `unknown` 类型的变量，但反过来，在没有进行类型检查之前，你不能对 `unknown` 类型的变量执行任何操作，也不能将它赋值给除 `any` 和 `unknown` 自身之外的任何其他类型。你必须首先通过类型收窄（例如使用 `typeof`、`instanceof` 或类型断言）来明确它的具体类型 24。
    

`any` 和 `unknown` 的并存，揭示了 TypeScript 的核心哲学演进：从为了兼容性而提供的“选择性放弃安全” (`any`)，到鼓励“默认安全，显式确认” (`unknown`)。`unknown` 是从纯类型安全角度 `any` 本应有的样子，而 `any` 是为了大规模采纳所做出的必要且务实的妥协。因此，“优先使用 `unknown` 而非 `any`” (`29`) 是现代 TypeScript 的核心最佳实践之一。

|特性|`any`|`unknown`|推荐用法|
|---|---|---|---|
|**赋值给它**|任何值都可以|任何值都可以|两者相同|
|**对它操作**|可以执行任何操作（如 `var.foo()`）|不允许任何操作|`unknown` 更安全|
|**赋值给其他类型**|可以赋值给任何类型（如 `let s: string = var`）|只能赋值给 `any` 或 `unknown`|`unknown` 更安全|
|**类型安全**|完全不安全，绕过类型检查|类型安全，强制进行类型检查|`unknown`|
|**核心用例**|渐进式迁移、与无类型库交互的临时方案|处理动态内容、API响应等类型不确定的数据|尽可能使用 `unknown`|

#### **类型注解与类型推断**

TypeScript 有两种方式来确定变量的类型：

1. **类型注解 (Type Annotation)**：这是 **显式** 的方式，通过冒号 (`:`) 语法来明确指定一个变量的类型。例如：`let message: string = 'Hello';` 30。在某些情况下，注解是必需的，比如函数参数、未初始化的变量等 31。
    
2. **类型推断 (Type Inference)**：这是 **隐式** 的方式。在很多情况下，TypeScript 能够根据变量的初始值自动推断出其类型。例如：`let message = 'Hello';`，TypeScript 会自动推断出 `message` 的类型是 `string` 2。
    

类型推断是 TypeScript 的一个关键人体工程学特性，它极大地减少了静态类型的冗余感。通过自动推断，代码可以保持简洁，更接近原生 JavaScript，降低了开发者的心智负担。然而，开发者需要掌握的核心技能是：知道何时可以信赖类型推断，何时需要提供明确的类型注解来引导编译器，以达到代码清晰度和类型安全性的最佳平衡。

**最佳实践**：在变量初始化时，如果类型显而易见，应优先依赖类型推断以保持代码简洁。在定义函数签名、未初始化的变量以及希望明确代码意图时，应使用显式的类型注解 31。

### **第 4 节：构造数据：数组、元组和枚举**

#### **使用数组**

数组是存储 **同一种类型** 元素集合的有序列表 34。TypeScript 提供了两种语法来定义数组类型，其中

`T` 语法因其简洁性而更为常用 19。

- **方括号语法**：`let list: number[] = ;`
    
- **泛型语法**：`let list: Array<number> = ;`
    

你也可以定义对象数组，通常会配合接口（`interface`）来描述对象的结构 37。

TypeScript

```
	interface User {
	  id: number;
	  name: string;
	}
	
	const users: User[] =;
```

TypeScript 会对所有标准的数组方法（如 `push`, `map`, `filter`）进行类型检查，确保操作的类型安全 34。

#### **元组 (Tuples)：定长异构数组**

元组可以看作是一种特殊的数组，它具有 **固定的元素数量** 和 **已知的元素类型**，且各元素的类型可以不同 18。这为 JavaScript 开发者引入了一个新概念：一个异构的、定长的数组。

- **语法**：`let person: [string, number] = ['Alice', 30];` 19。
    
- **顺序的重要性**：元组中类型的顺序是固定的，并且必须严格遵守。`[30, 'Alice']` 赋值给上面的 `person` 变量将会导致编译错误 19。
    
- **应用场景**：元组非常适合表示那些结构固定、数据相关联的场景，例如二维坐标 `[number, number]`、键值对 `['id', 123]`，或者像 React `useState` 钩子那样返回一个包含状态和更新函数的数组 18。它以数组的简洁性提供了对象的结构性。
    

TypeScript 4.0 之后还引入了更高级的元组特性，如可选元素 (`?`) 和剩余元素 (`...T`)，使得元组的应用更加灵活 40。

#### **枚举 (Enums)：具名常量集合**

枚举（Enum）允许我们为一组相关的常量赋予有意义的名称，从而增强代码的可读性和可维护性 19。

- 数字枚举 (Numeric Enums)：
    
    默认情况下，枚举是基于数字的，成员的值会从 0 开始自动递增。你也可以手动指定初始值 19。
    
    TypeScript
    
    ```
    enum Direction {
      Up,    // 0
      Down,  // 1
      Left,  // 2
      Right  // 3
    }
    ```
    
    数字枚举一个独特的特性是支持 **反向映射**，即你可以通过值来获取其名称，例如 `Direction` 会返回字符串 `"Up"` 43。
    
- 字符串枚举 (String Enums)：
    
    枚举的每个成员都可以用字符串字面量进行显式初始化。
    
    TypeScript
    
    ```
    enum LogLevel {
      Error = "ERROR",
      Warn = "WARN",
      Info = "INFO"
    }
    ```
    
    字符串枚举没有反向映射。它的主要优势在于 **可调试性** 和 **可读性**。当你在日志、API 响应或数据库中看到 `"ERROR"` 时，其含义是明确的，而数字 `0` 则可能意义不明。因此，在实践中，**推荐优先使用字符串枚举** 43。
    
- 异构枚举 (Heterogeneous Enums)：
    
    技术上允许混合使用字符串和数字成员，但这种做法很少见，且通常不推荐，因为它可能导致代码逻辑混乱 44。
    

选择数字枚举还是字符串枚举，实际上是在 **简洁性** 与 **可调试性** 之间做权衡。数字枚举书写简洁，但其值在序列化后意义不明确。字符串枚举虽然稍显冗长，但它提供的可读性在长期维护和团队协作中价值巨大。

### **第 5 节：组合类型：联合与交叉**

#### **联合类型 (Union Types): `|`**

联合类型使用 `|` 操作符，表示一个值可以是几种类型之一。这为原本静态的类型系统注入了灵活性，以模拟 JavaScript 的动态特性 48。

- **定义**：`let id: string | number;` 表示 `id` 既可以是字符串，也可以是数字。
    
- **使用**：当一个值的类型是联合类型时，你只能安全地访问这个联合类型中 **所有成员都共有的** 属性或方法 48。
    
    TypeScript
    
    ```
    interface Bird { fly(): void; layEggs(): void; }
    interface Fish { swim(): void; layEggs(): void; }
    
    function getPet(): Bird | Fish { /*... */ }
    let pet = getPet();
    pet.layEggs(); // OK
    // pet.fly();   // Error: Property 'fly' does not exist on type 'Bird | Fish'.
    ```
    
- **类型收窄 (Type Narrowing)**：为了使用特定类型的成员，你需要 **收窄** 联合类型。TypeScript 的控制流分析非常智能，可以通过 `typeof`、`instanceof`、属性检查 (`'prop' in obj`) 等方式，在代码块内推断出变量的更精确类型 48。
    
    TypeScript
    
    ```
    function processId(id: string | number) {
      if (typeof id === "string") {
        // 在这个代码块内，TypeScript 知道 id 是 string 类型
        console.log(id.toUpperCase());
      } else {
        // 在这里，id 就是 number 类型
        console.log(id.toFixed(2));
      }
    }
    ```
    

联合类型和类型收窄是相辅相成的，它们共同构成了在 TypeScript 中处理动态行为的核心模式。

#### **交叉类型 (Intersection Types): `&`**

交叉类型使用 `&` 操作符，将多个类型合并为一个新类型。这个新类型将拥有所有组成类型的 **全部成员** 49。

TypeScript

```
interface Serializable {
  serialize(): string;
}
interface Loggable {
  log(message: string): void;
}

type PersistentEntity = Serializable & Loggable;

function save(entity: PersistentEntity) {
  entity.log(`Saving: ${entity.serialize()}`);
}
```

对于对象类型，交叉类型 `&` 的行为可以理解为属性的 **并集**，这对于初学者来说可能有些反直觉。从集合论的角度看，一个类型是所有可能值的集合。`TypeA & TypeB` 的交叉集，是同时属于 `TypeA` 集合和 `TypeB` 集合的值的集合。对于一个对象来说，要同时满足这两个类型的约束，它就必须拥有两个类型的所有属性。

#### **高级模式：可辨识联合 (Discriminated Unions)**

可辨识联合（也称作标签联合或代数数据类型）是 TypeScript 中一种极其强大的模式，尤其适用于状态管理。它巧妙地结合了字面量类型、联合类型和类型收窄。

该模式包含三个要素：

1. **共同的、可辨识的属性**：所有成员类型都拥有一个共同的属性，该属性的类型是不同的字符串字面量。这个属性就是“辨识符” 48。
    
2. **类型的联合**：将这些带有辨识符的类型组合成一个联合类型。
    
3. **类型守卫**：通过检查辨识符的属性值（通常使用 `switch` 语句）来收窄类型。
    

TypeScript

```
type LoadingState = { state: "loading" };
type SuccessState = { state: "success"; response: { body: string } };
type ErrorState = { state: "error"; code: number };

type NetworkState = LoadingState | SuccessState | ErrorState;

function handleState(state: NetworkState): string {
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "success":
      // 在这里，TypeScript 知道 state 是 SuccessState 类型
      return state.response.body;
    case "error":
      // 在这里，TypeScript 知道 state 是 ErrorState 类型
      return `Error code: ${state.code}`;
  }
}
```

这种模式的优越性在于 **穷尽性检查 (Exhaustiveness Checking)**。如果 `NetworkState` 增加了新的状态，而 `switch` 语句没有处理这个新情况，TypeScript 编译器就会报错，从而强制开发者处理所有可能的状态，极大地提高了代码的健壮性 48。

## **第三部分：面向对象与函数式编程**

本部分将探讨 TypeScript 如何支持主流的编程范式，将其强大的类型系统与类、接口、函数等具体的代码结构相结合。 更详细请见 [讲义_ 第三部分_面向对象与函数式编程](./ts相关/讲义_ 第三部分_面向对象与函数式编程.md)

### **第 6 节：定义形状：接口与类型别名**

在 TypeScript 中，`interface` 和 `type` 是定义数据结构形状的两个主要工具。它们在很多情况下可以互换使用，但存在一些关键差异，理解这些差异是写出高质量 TypeScript 代码的基础。

#### **使用 `interface` 创建契约**

接口（`interface`）是 TypeScript 中定义对象“形状”或“契约”的核心方式 53。它规定了一个对象应该包含哪些属性和方法，以及它们的类型。

TypeScript

```
interface Point {
  readonly x: number; // 只读属性
  readonly y: number;
  z?: number; // 可选属性
}

interface Movable {
  move(dx: number, dy: number): void;
}

// 一个类可以实现多个接口
class MovablePoint implements Point, Movable {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  }
}
```

接口的核心特性包括可选属性 (`?`) 和只读属性 (`readonly`) 54。

#### **使用 `type` 为类型创建别名**

类型别名（`type`）可以为任何类型创建一个新名称，而不仅仅是对象类型。这使得 `type` 在某些方面比 `interface` 更加灵活 55。

TypeScript

```
// 为原始类型创建别名
type UserID = string;

// 为联合类型创建别名
type Status = "success" | "loading" | "error";

// 为函数类型创建别名
type Handler = (req: Request, res: Response) => void;

// 为对象字面量创建别名（与 interface 类似）
type PointObject = {
  x: number;
  y: number;
};
```

`type` 尤其擅长定义联合类型和交叉类型 55。

#### **深度比较：`interface` vs. `type`**

选择 `interface` 还是 `type` 是 TypeScript 社区中一个经久不衰的话题。以下是它们的核心区别，以帮助你做出决策。

| 特性                             | `interface`        | `type`                      | 备注与用例                                  |
| ------------------------------ | ------------------ | --------------------------- | -------------------------------------- |
| **定义对象**                       | ✅                  | ✅                           | 两者都可以，语法略有不同。                          |
| **定义联合/交叉/元组**                 | ❌                  | ✅                           | `type` 更灵活，可以为任何类型创建别名。                |
| **声明合并 (Declaration Merging)** | ✅                  | ❌                           | 这是关键区别。`interface` 是“开放的”，可以多次声明并自动合并。 |
| **扩展 (Extending)**             | 使用 `extends` 关键字   | 使用 `&` (交叉类型)               | 两者都可以扩展对象类型，但语法不同。                     |
| **实现 (Implementing)**          | 类可以使用 `implements` | 类可以使用 `implements` (仅限对象结构) | 两者都可以被类实现。                             |

**声明合并** 是 `interface` 的一个独有特性。如果你在同一个作用域内两次声明同名接口，TypeScript 会将它们合并成一个单一的接口。这个特性对于扩展第三方库或原生对象的类型定义非常有用（称为“模块增强”），因为它允许你在不修改原始代码的情况下为其添加属性 55。

TypeScript

```
// 在库中定义的接口
interface Window {
  title: string;
}

// 在你的代码中，为 Window 接口添加新属性
interface Window {
  myAppConfig: object;
}

// 现在 Window 类型同时拥有 title 和 myAppConfig 属性
window.myAppConfig = { /*... */ };
```

**推荐用法**：

- **优先使用 `interface`**：当你定义公共 API 的形状（如对象的结构）时，应优先使用 `interface`。它的可扩展性（通过 `extends` 和声明合并）使其成为定义标准契约的理想选择 56。
    
- **使用 `type`**：当你需要定义联合类型、交叉类型、元组，或为复杂的类型组合创建别名时，应使用 `type` 55。
    

`interface` 和 `type` 的选择也反映了两种不同的设计思想：`interface` 更贴近传统的面向对象编程，强调的是可扩展的契约；而 `type` 则更符合函数式编程的组合思想，强调的是不可变的类型变换。

### **第 7 节：使用类进行构建**

TypeScript 在 ES6 类的基础上增加了类型注解和访问修饰符等特性，为熟悉面向对象编程（OOP）的开发者提供了熟悉的语法和更强大的功能 59。

#### **类语法、构造函数和属性**

基本语法与 Java 或 C# 等语言非常相似。

TypeScript

```
class Greeter {
  // 属性声明与类型注解
  greeting: string;

  // 构造函数
  constructor(message: string) {
    this.greeting = message;
  }

  // 方法
  greet(): string {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
```

TypeScript 引入了 `strictPropertyInitialization` 编译选项。启用后，所有未在声明时或构造函数中初始化的类属性都会报错，这有助于避免 `undefined` 错误。如果属性确实会在构造函数之外被初始化（例如被外部库注入），可以使用 **明确赋值断言** (`!`) 来告知编译器 60。

class User { name!: string; }

#### **继承：`extends` 和 `super()`**

TypeScript 支持类继承，允许一个类（子类）继承另一个类（父类）的属性和方法。

- **`extends` 关键字**：用于声明继承关系 59。
    
- **`super()` 调用**：在子类的构造函数中，**必须** 在访问 `this` 上的任何属性之前调用 `super()`。`super()` 会执行父类的构造函数。这是一个 TypeScript 强制执行的重要规则 59。
    
- **方法重写**：子类可以定义与父类同名的方法来覆盖父类的行为。在子类方法中，可以使用 `super.methodName()` 来调用父类的原始方法 59。
    

TypeScript

```
class Animal {
  name: string;
  constructor(name: string) { this.name = name; }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name); // 调用父类构造函数
  }
  
  // 重写 move 方法
  move(distance: number = 5) {
    console.log("Barking...");
    super.move(distance); // 调用父类的 move 方法
  }
}
```

#### **访问修饰符：`public`、`private` 和 `protected`**

访问修饰符用于控制类成员（属性和方法）的可见性，是实现 **封装 (Encapsulation)** 的关键工具 63。

- **`public`**：成员可以在任何地方被访问。如果省略修饰符，则默认为 `public` 63。
    
- **`private`**：成员只能在其被声明的类的内部访问，子类也无法访问 63。
    
- **`protected`**：成员可以在其被声明的类的内部以及任何继承自该类的子类中访问，但在类外部不可访问 59。
    

一个重要的认知是：TypeScript 的访问修饰符是 **编译时** 的约束。它们在编译后的 JavaScript 代码中会消失，并不会提供运行时的访问控制。这意味着，`private` 只是一个开发时的契约，而非一个运行时的安全机制 5。

此外，TypeScript 还提供了一种 **参数属性 (parameter properties)** 的简写语法，可以在构造函数参数中直接声明和初始化类属性 65。

TypeScript

```
class Person {
  // 这行代码等价于声明一个 private 属性 name，并在构造函数中进行 this.name = name 的赋值
  constructor(private name: string) {}
}
```

#### **抽象类 (Abstract Classes)**

抽象类是作为其他类的基类而存在的，它们 **不能被直接实例化** 68。它们用于定义一个通用的蓝图。

- **`abstract` 关键字**：用于定义抽象类和抽象成员。
    
- **抽象方法/属性**：在抽象类中，可以定义没有具体实现的抽象方法或属性。任何继承该抽象类的子类都 **必须** 实现这些抽象成员 69。
    
- **与接口的对比**：抽象类可以包含具体的实现代码（非抽象方法），而接口只能定义形状，不能包含实现。一个类只能继承一个抽象类，但可以实现多个接口 69。
    

选择抽象类还是接口，取决于你的意图：

- 当你有一组 **紧密相关** 的类，并且希望 **共享实现代码** 时，使用 **抽象类**。这是一种“is-a”（是一个）的关系（例如，`Dog` is an `Animal`）。
    
- 当你需要定义一个 **契约**，让多个 **可能不相关** 的类去遵守时，使用 **接口**。这是一种“can-do”（能做某事）的能力（例如，`Logger` 和 `FileStream` 都能 `be-disposable`）。
    

### **第 8 节：精通函数**

函数是任何应用程序的核心。TypeScript 通过其类型系统极大地增强了函数的健壮性和可预测性。

#### **为函数参数和返回值添加类型**

为函数添加类型注解是最基本也是最重要的实践。

- **语法**：`function add(x: number, y: number): number { return x + y; }` 73。
    
- **返回值类型**：虽然 TypeScript 常常可以推断出函数的返回值类型，但为公开的函数（尤其是库函数）显式注解返回类型是一个好习惯。这能确保函数实现的变化不会意外地改变其对外契约 29。
    
- **`void` 类型**：用于表示函数没有任何返回值 21。
    
- **`never` 类型**：用于表示函数永远不会正常返回。例如，一个总是抛出错误的函数，或者一个包含无限循环的函数 19。
    

#### **可选参数、默认参数和剩余参数**

TypeScript 提供了灵活的方式来处理函数参数。

- **可选参数 (?)**：在参数名后添加 `?`，表示该参数是可选的。可选参数必须位于所有必需参数之后 73。在函数内部，如果调用时未提供该参数，其值为
    
    `undefined`。
    
    TypeScript
    
    ```
    function greet(firstName: string, lastName?: string) { /*... */ }
    ```
    
- **默认参数 (=)**：为参数提供一个默认值。带有默认值的参数自动成为可选参数 73。与
    
    `?` 不同，默认参数不一定非要放在最后，但如果它在必需参数之前，调用时需要显式传入 `undefined` 来使用其默认值。
    
    TypeScript
    
    ```
    function calculateTax(price: number, rate: number = 0.05) { /*... */ }
    ```
    
- **剩余参数 (...)**：使用 `...` 语法将一个不确定数量的参数收集到一个数组中。剩余参数必须是参数列表中的最后一个 73。
    
    TypeScript
    
    ```
    function sum(...numbers: number): number {
      return numbers.reduce((total, num) => total + num, 0);
    }
    ```
    

函数参数的排序规则（必需 -> 可选 -> 剩余）并非随意的规定，而是为了消除编译器解析调用时的歧义，从而为开发者提供更强的类型保证。

#### **函数重载 (Function Overloads)**

函数重载允许你为一个函数提供多个不同的调用签名。这在函数根据输入参数的类型或数量而有不同行为时非常有用。

- **语法**：定义多个重载签名，后跟一个兼容所有签名的实现签名。实现函数体内部需要通过类型检查来处理不同的情况 74。
    
- **目的**：函数重载的主要目的是改善 **调用方** 的体验。调用者会看到一组清晰、类型安全的、具体的函数签名，而复杂的、可能包含 `any` 或联合类型的实现逻辑则被封装在函数内部。这是一种优秀API设计的体现：提供简洁的外部接口，隐藏内部的复杂性 74。
    

TypeScript

```
// 重载签名
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// 实现签名
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d!== undefined && y!== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678); // OK
const d2 = makeDate(5, 5, 5);   // OK
// const d3 = makeDate(5, 5);      // Error: No overload matches this call.
```

## **第四部分：高级类型操作**

欢迎来到 TypeScript 的“精通”阶段。本部分将深入探讨那些使 TypeScript 成为一个真正强大的类型编程工具的高级特性。掌握这些概念，你将能构建出高度可复用、类型安全的抽象。

### **第 9 节：使用泛型编写可复用代码**

#### **为何需要泛型？**

想象一下，你需要编写一个 `identity` 函数，它接收一个参数并返回该参数。

- **特定类型版本**：你可以为每种类型写一个版本，如 `identityNumber(arg: number): number` 和 `identityString(arg: string): string`。但这会导致大量代码重复 81。
    
- **`any` 版本**：你可以使用 `any` 类型：`identity(arg: any): any`。这解决了代码重复问题，但却丢失了类型信息。传入一个 `number`，返回的却是 `any`，类型安全荡然无存 82。
    

**泛型 (Generics)** 就是解决这个问题的完美方案。它允许我们创建一种“模板”组件，这种组件可以处理多种数据类型，同时 **保留类型信息** 81。

#### **泛型函数、接口与类**

- 泛型函数
    
    使用尖括号 <> 来声明一个或多个 类型参数 (Type Parameters)，通常用 T (代表 Type) 作为占位符。这个类型参数就像一个变量，但用于类型。
    
    TypeScript
    
    ```
    function identity<T>(arg: T): T {
      return arg;
    }
    
    // 调用时，可以显式指定类型
    let output1 = identity<string>("myString"); // output1 的类型是 string
    
    // 或者让 TypeScript 进行类型推断
    let output2 = identity("myString"); // output2 的类型也被推断为 string
    ```
    
    泛型的核心价值在于它在输入和输出之间建立了一个类型链接。当你调用 `identity<string>` 时，`T` 就被 `string` 替换，函数签名在概念上变成了 `(arg: string): string`。类型信息得以在函数调用中完整地传递。
    
- 泛型接口
    
    接口也可以是泛型的，这对于定义通用的数据结构或函数形状非常有用 82。
    
    TypeScript
    
    ```
    interface Box<T> {
      contents: T;
    }
    
    let stringBox: Box<string> = { contents: "hello" };
    let numberBox: Box<number> = { contents: 100 };
    ```
    
- 泛型类
    
    类的泛型语法与接口类似。泛型参数定义在类名之后，并且只能被类的 实例成员 使用，不能被 静态成员 使用 82。
    
    TypeScript
    
    ```
    class DataStorage<T> {
      private data: T =;
    
      addItem(item: T): void {
        this.data.push(item);
      }
    
      getItems(): T {
        return this.data;
      }
    }
    
    const stringStore = new DataStorage<string>();
    stringStore.addItem("Apple");
    // stringStore.addItem(123); // Error!
    ```
    

#### **泛型约束：`extends`**

有时，我们希望对泛型参数的类型进行限制。例如，一个函数可能需要访问参数的 `.length` 属性，但并非所有类型都有这个属性 82。

这时，我们可以使用 `extends` 关键字来添加 **泛型约束 (Generic Constraints)**。

TypeScript

```
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 现在这行代码是安全的
  return arg;
}

loggingIdentity("hello"); // OK, string 有 length 属性
loggingIdentity([]); // OK, array 有 length 属性
// loggingIdentity(123); // Error: number 没有 length 属性
```

这里的 `extends` 并不表示类继承，而是表示 **“可分配给” (assignable to)** 或 **“是...的子类型” (is a subtype of)** 85。

`T extends Lengthwise` 意味着传入的类型 `T` 必须满足 `Lengthwise` 接口所定义的形状（即至少要有一个 `number` 类型的 `length` 属性）。

一个更高级的例子是结合 `keyof` 使用：

TypeScript

```
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3 };
getProperty(x, "a"); // OK
// getProperty(x, "m"); // Error: "m" 不是 "a" | "b" | "c" 的成员
```

这个约束确保了 `key` 参数必须是 `obj` 对象上真实存在的键之一，从而实现了对属性访问的完全类型安全 82。

### **第 10 节：类型元编程**

TypeScript 的类型系统本身就是一种强大的“语言”。通过组合使用以下操作符，你可以在类型层面进行计算和转换，这通常被称为“类型元编程”。`typeof`、`keyof`、索引访问、条件类型和映射类型，这五个特性共同构成了一个完整的类型级编程体系。

#### **`typeof` 类型操作符**

在类型上下文中，`typeof` 可以获取一个 **值** (变量或属性) 的类型 88。

TypeScript

```
let s = "hello";
let n: typeof s; // n 的类型被推断为 string

const person = { name: "Alice", age: 30 };
type PersonType = typeof person; // PersonType is { name: string; age: number; }
```

#### **`keyof` 类型操作符**

`keyof` 操作符接收一个对象类型，并返回一个由该对象所有 **键** 组成的字符串或数字字面量联合类型 88。

TypeScript

```
interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point; // PointKeys 的类型是 "x" | "y"
```

#### **索引访问类型 (Indexed Access Types)**

我们可以像在 JavaScript 中访问对象属性一样，在类型层面使用方括号语法来查找一个属性的类型 90。

TypeScript

```
type Person = { age: number; name: string; alive: boolean };

type Age = Person["age"]; // Age 的类型是 number

// 索引本身也可以是联合类型或 keyof
type NameOrAge = Person["name" | "age"]; // string | number
type AllPropTypes = Person[keyof Person]; // string | number | boolean
```

结合 `typeof` 和 `number` 索引，可以方便地获取数组元素的类型：

TypeScript

```
const MyArray = [{ name: "Alice", age: 15 }];
type PersonInArray = typeof MyArray[number]; // { name: string; age: number; }
```

#### **条件类型 (Conditional Types)**

条件类型为 TypeScript 的类型系统引入了 `if-else` 逻辑，其语法类似于 JavaScript 的三元运算符 80。

**语法**：`SomeType extends OtherType? TrueType : FalseType;`

TypeScript

```
interface IdLabel { id: number; }
interface NameLabel { name: string; }

type NameOrId<T extends number | string> = T extends number? IdLabel : NameLabel;

let label1: NameOrId<number>; // label1 的类型是 IdLabel
let label2: NameOrId<string>; // label2 的类型是 NameLabel
```

- **`infer` 关键字**：这是条件类型中最强大的部分。`infer` 允许你在 `extends` 子句中 **推断** 并声明一个新的类型变量，这个变量可以在条件为真的分支中使用。它就像是在类型层面进行模式匹配和变量捕获 80。
    
    `infer` 是解构复杂类型（如函数、数组、Promise）的关键。
    
    TypeScript
    
    ```
    // 如果 T 是一个数组，就提取其元素类型，否则返回 T 本身
    type Flatten<T> = T extends Array<infer Item>? Item : T;
    
    type Str = Flatten<string>; // Str 的类型是 string
    type Num = Flatten<number>;   // Num 的类型是 number
    ```
    
- **分布式条件类型 (Distributive Conditional Types)**：当泛型 `T` 是一个联合类型时，条件类型会被 **分布式** 地应用到联合类型的每个成员上 80。
    
    TypeScript
    
    ```
    type ToArray<T> = T extends any? T : never;
    
    type StrArrOrNumArr = ToArray<string | number>; 
    // 结果是 string | number
    // 而不是 (string | number)
    ```
    
    若要阻止这种分布式行为，可以用方括号将 `extends` 两侧的类型包裹起来： `extends [any]?...`。
    

#### **映射类型 (Mapped Types)**

	映射类型允许你基于一个现有类型来创建新类型，其语法类似于 `for...in` 循环，用于遍历一个类型的所有属性 97。

**语法**：`{: NewType }`

TypeScript

```
interface Person {
  name: string;
  age: number;
}

// 创建一个新类型，所有属性都变为 boolean
type PersonFlags = {
  [P in keyof Person]: boolean;
};
// PersonFlags 等价于 { name: boolean; age: boolean; }
```

- **映射修饰符 (Mapping Modifiers)**：在映射过程中，可以添加或移除 `readonly` 和 `?`（可选）修饰符。使用 `+` 或 `-` 前缀来控制。
    
    TypeScript
    
    ```
    // 将所有属性变为可选
    type Partial<T> = {?: T[P] };
    
    // 将所有属性变为必需
    type Required<T> = {-?: T[P] };
    ```
    
- **键重映射 (Key Remapping) via `as`**：从 TypeScript 4.1 开始，可以使用 `as` 子句来重命名映射类型中的键，这通常与模板字面量类型结合使用，功能极其强大 98。
    
    TypeScript
    
    ```
    type Getters<T> = {
     : () => T[P]
    };
    
    type PersonGetters = Getters<Person>;
    // PersonGetters 等价于 { getName: () => string; getAge: () => number; }
    ```
    
    你甚至可以通过返回 `never` 来过滤掉某些键。
    

### **第 11 节：必备的工具类型**

TypeScript 内置了许多开箱即用的工具类型 (Utility Types)，它们本身就是使用上一节介绍的高级类型操作构建的。掌握它们能极大地提高开发效率。它们不仅是便捷的快捷方式，更是学习高级类型编程的绝佳范例。

| 工具类型                 | 描述                                               | 示例                                                                                                          |
| -------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **`Partial<T>`**     | 将类型 `T` 的所有属性变为可选的 101。                          | interface User { id: number; name: string; }<br><br>let partialUser: Partial<User> = { name: 'John' };      |
| **`Required<T>`**    | 将类型 `T` 的所有属性（包括可选的）变为必需的 101。                   | interface Props { a?: number; }<br><br>let requiredProps: Required<Props> = { a: 5 };                       |
| **`Readonly<T>`**    | 将类型 `T` 的所有属性变为只读的，防止被修改 101。                    | const user: Readonly<User> = { id: 1, name: 'John' };<br><br>// user.name = 'Bob'; // Error                 |
| **`Pick<T, K>`**     | 从类型 `T` 中挑选出一组属性 `K` (字符串字面量或其联合) 来构造一个新类型 101。  | type UserPreview = Pick<User, 'name'>;<br><br>// { name: string; }                                          |
| **`Omit<T, K>`**     | 从类型 `T` 中移除一组属性 `K`，构造一个新类型。与 `Pick` 相反 101。     | type UserAuth = Omit<User, 'id'>;<br><br>// { name: string; }                                               |
| **`Record<K, T>`**   | 构造一个对象类型，其属性键为 `K`，属性值为 `T`。非常适合创建字典或映射表 101。    | type PageInfo = Record<'title' \| 'description', string>;<br><br>// { title: string; description: string; } |
| **`Exclude<T, U>`**  | 从联合类型 `T` 中排除所有可以赋值给 `U` 的类型。                    | type T0 = Exclude<"a" \| "b" \| "c", "a">;<br><br>// "b" \| "c"                                             |
| **`Extract<T, U>`**  | 从联合类型 `T` 中提取所有可以赋值给 `U` 的类型。与 `Exclude` 相反 105。 | type T1 = Extract<"a" \| "b" \| "c", "a" \| "f">;<br><br>// "a"                                             |
| **`NonNullable<T>`** | 从类型 `T` 中排除 `null` 和 `undefined`。                | type T2 = NonNullable<string \| number \| undefined>;<br><br>// string \| number                            |
| **`Parameters<T>`**  | 获取函数类型 `T` 的参数类型，并作为一个元组类型返回 101。                | type T3 = Parameters<(s: string) => void>;<br><br>// [s: string]                                            |
| **`ReturnType<T>`**  | 获取函数类型 `T` 的返回值类型 101。                           | type T4 = ReturnType<() => string>;<br><br>// string                                                        |

`Pick` 和 `Omit` 的存在，体现了类型安全 API 设计的一个核心原则：为特定上下文塑造数据。一个大的数据模型（如包含20个属性的 `User`）很少被完整使用。列表视图可能只需要 `Pick<User, 'id' | 'name'>`，而更新表单可能使用 `Partial<Omit<User, 'id'>>`。这些工具类型允许我们定义单一的数据源，然后为其创建类型安全的、上下文相关的“视图”，从而减少类型重复，并确保组件或函数只接收它们真正需要的数据 104。

## **第五部分：TypeScript 生态系统**

本部分将从语言本身扩展到其在广阔的 JavaScript 世界中的实际应用，重点关注模块化、与现有代码的互操作性以及项目配置。

### **第 12 节：模块与互操作性**

#### **ES 模块：`import` 和 `export`**

TypeScript 完全采用 ECMAScript 6 (ES6) 的模块标准来组织代码。任何包含顶级 `import` 或 `export` 声明的文件都被视为一个模块 106。

- **命名导出 (Named Exports)**：一个模块可以导出多个变量、函数或类。导入时需要使用花括号 `{}`，并且名称必须匹配 106。
    
    TypeScript
    
    ```
    // a.ts
    export const pi = 3.14;
    export function log(msg: string) { /*... */ }
    
    // b.ts
    import { pi, log } from './a';
    import { pi as PI } from './a'; // 使用 as 重命名
    ```
    
- **默认导出 (Default Export)**：每个模块最多只能有一个默认导出。导入时不需要使用花括号，并且可以为其指定任意名称 106。
    
    TypeScript
    
    ```
    // a.ts
    export default class MyClass { /*... */ }
    
    // b.ts
    import MyCoolClass from './a';
    ```
    
- **命名空间导入 (Namespace Import)**：将模块的所有命名导出收集到一个对象中 106。
    
    TypeScript
    
    ```
    // b.ts
    import * as math from './a';
    console.log(math.pi);
    ```
    

#### **命名导出 vs. 默认导出：深度分析**

关于使用命名导出还是默认导出的争论，实际上是关于 **代码可发现性** 和 **重构安全性** 的权衡。

- **规则**：一个模块可以有多个命名导出，但只能有一个默认导出 109。
    
- **灵活性 vs. 一致性**：默认导出允许导入方随意命名，这很灵活，但也可能导致在同一个项目中对同一个模块的引用名称不一致。命名导出则强制使用原始名称，保证了代码的一致性 111。
    
- **重构**：这是最关键的区别。如果你重命名一个默认导出的类，IDE 无法安全地更新所有导入它的文件。而对于命名导出，重命名操作可以被工具捕捉到，并安全地在整个项目中更新所有引用 111。
    

**最佳实践**：在项目内部，**强烈推荐优先使用命名导出**。这能最大化地利用 IDE 的重构能力，并使模块的公共 API 一目了然。仅在模块确实只有一个主要导出物（例如一个 UI 组件库的主组件）时，才考虑使用默认导出 111。

#### **为 JavaScript 库编写声明文件 (`.d.ts`)**

当你在 TypeScript 项目中使用一个纯 JavaScript 编写的库时，编译器不知道这个库的类型信息。**声明文件 (`.d.ts`)** 就是为了解决这个问题而存在的。它只包含类型声明，不包含任何实现代码，作用是向 TypeScript 描述 JavaScript 代码的“形状” 114。

- **模块声明**：为没有自带类型的 npm 包提供类型。
    
    TypeScript
    
    ```
    // a-js-lib.d.ts
    declare module 'a-js-lib' {
      export function someFunction(arg: string): number;
      export const someConstant: boolean;
    }
    ```
    
- **全局声明**：为那些在全局作用域（如 `window`）添加变量的传统 JS 库提供类型。
    
    TypeScript
    
    ```
    // global-lib.d.ts
    declare global {
      function myGlobalFunction(): void;
      var myGlobalVar: number;
    }
    // `export {}` 确保此文件被视为模块，从而使 `declare global` 生效
    export {};
    ```
    

对于库的作者，现代的做法是使用 JSDoc 注释来注解 JavaScript 代码，然后通过在 `tsconfig.json` 中设置 `"allowJs": true` 和 `"declaration": true`，让 TypeScript 编译器自动生成 `.d.ts` 文件 114。

#### **DefinitelyTyped 与 `@types` 包的角色**

为成千上万的 JavaScript 库手写声明文件是一项艰巨的任务。社区的解决方案是 **DefinitelyTyped**：一个庞大的、由社区维护的、高质量声明文件的中央仓库 117。

- **`@types` 作用域**：DefinitelyTyped 中的声明文件会被自动发布到 npm 的 `@types` 作用域下。例如，`lodash` 库的类型声明包就是 `@types/lodash` 120。
    
- **自动发现**：当你安装了 `typescript` 和一个 `@types` 包（例如 `npm install --save-dev @types/node`）后，TypeScript 编译器会自动在 `node_modules/@types` 目录下查找并使用这些类型定义，无需任何额外配置 121。
    

DefinitelyTyped 生态系统是 TypeScript 成功的基石。它通过社区协作，为庞大的 JavaScript 世界“追溯性地”添加了类型安全，完美解决了 TypeScript 的互操作性难题。

### **第 13 节：高级特性与 `tsconfig.json` 深度解析**

#### **装饰器 (Decorators)：类的元编程**

装饰器是一种特殊的声明，可以附加到类、方法、访问器、属性或参数上，用以观察、修改或替换它们。装饰器是一种元编程能力，在 Angular 等框架中被广泛使用 122。

TypeScript 中存在两个版本的装饰器，它们的行为和语法有所不同：

1. 遗留/实验性装饰器 (Legacy/Experimental Decorators)：
    
    这是 TypeScript 早年基于一个旧的 ECMAScript 提案实现的版本。它需要你在 tsconfig.json 中明确开启 "experimentalDecorators": true 选项 125。许多现有框架（如早期版本的 Angular）依赖此实现。
    
2. 现代/ECMAScript 装饰器 (Modern/ECMAScript Decorators)：
    
    从 TypeScript 5.0 开始，支持了与当前 TC39 提案一致的新版装饰器。当 "experimentalDecorators" 标志未开启时，这是默认行为 128。
    

装饰器的演进过程，体现了 TypeScript 作为未来 JavaScript 特性“试验田”的角色。它允许开发者提前使用前沿功能，同时通过编译选项保持对旧有生态的向后兼容。

TypeScript

```
// 一个简单的方法装饰器示例（现代语法）
function logged(originalMethod: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  function replacementMethod(this: any,...args: any) {
    console.log(`LOG: Entering method "${methodName}".`);
    const result = originalMethod.call(this,...args);
    console.log(`LOG: Exiting method "${methodName}".`);
    return result;
  }
  return replacementMethod;
}

class Person {
  @logged
  greet(message: string) {
    console.log(`Hello, ${message}`);
  }
}
```

#### **`tsconfig.json` 深度解析**

精通 TypeScript 意味着精通 `tsconfig.json`。它是管理大型项目和 monorepo 的关键。

- **核心编译选项 (`compilerOptions`)**：
    
    - `target`: 指定编译后的 JavaScript 版本 (e.g., "ES2016", "ESNext") 130。
        
    - `module`: 指定模块系统 (e.g., "CommonJS", "ESNext") 130。
        
    - `lib`: 指定需要包含的库文件 (e.g.,)。
        
    - `strict`: 启用所有严格类型检查选项，强烈推荐设为 `true` 131。
        
    - `outDir`: 指定编译输出目录 (e.g., "./dist") 130。
        
    - `rootDir`: 指定源文件根目录 (e.g., "./src") 132。
        
    - `sourceMap`: 生成 `.map` 文件，用于调试 9。
        
    - `esModuleInterop`: 允许 CommonJS 模块和 ES 模块之间更好地互操作，强烈推荐设为 `true` 130。
        
- **文件管理 (`files`, `include`, `exclude`)**：
    
    - `files`: 一个明确的文件列表，总是会被编译。
        
    - `include`: 一个 glob 模式数组，指定要编译的文件范围 (e.g., `["src/**/*"]`)。
        
    - `exclude`: 一个 glob 模式数组，从 `include` 匹配到的文件中排除一部分 (e.g., `["node_modules", "**/*.spec.ts"]`)。
        
    - **优先级规则**：`exclude` 过滤 `include` 的结果，但 `files` 中列出的文件永远不会被排除 15。
        
- **项目组织 (`extends`)**：
    
    - `extends` 属性允许一个 `tsconfig.json` 文件继承自另一个。这在 monorepo 结构中至关重要，可以创建一个基础配置供所有子项目共享 15。
        
    - 一个关键的细节是：路径相关的选项（如 `outDir`, `rootDir`, `include`）是相对于它们**所在**的配置文件解析的，而不是继承方的文件。这意味着这些选项通常必须在子配置中重新定义。而 `exclude` 可以通过通配符在基础配置中定义 134。
        
- **类型管理 (`typeRoots`, `types`)**：
    
    - `typeRoots`: 指定编译器查找 `@types` 包的目录。
        
    - `types`: 手动指定要包含的 `@types` 包名。如果设置为空数组 ``，则会禁用 `@types` 的自动包含 15。
        

### **第 14 节：实战应用：Node.js 与 Express**

本节将指导你如何使用 TypeScript 构建一个类型安全的 Node.js 后端服务。

#### **项目设置**

1. **初始化项目**：`npm init -y`。
    
2. **安装依赖**：
    
    - 运行时依赖：`npm install express`。
        
    - 开发时依赖：`npm install -D typescript ts-node nodemon @types/node @types/express` 14。
        
        `@types` 包是关键，它们为纯 JavaScript 的 Node.js 和 Express 库提供了丰富的类型定义，是实现类型安全的桥梁。
        
3. **配置 `tsconfig.json`**：使用 `npx tsc --init` 生成文件，并至少配置：
    
    JSON
    
    ```
    {
      "compilerOptions": {
        "module": "CommonJS",
        "target": "ES2020",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true
      }
    }
    ```
    
4. **配置 `package.json` 脚本**：
    
    JSON
    
    ```
    "scripts": {
      "build": "tsc",
      "start": "node dist/index.js",
      "dev": "nodemon src/index.ts"
    }
    ```
    
    `nodemon` 会监听 `src` 目录下的文件变化，并使用 `ts-node` 自动重启服务，实现高效的开发循环 132。
    

#### **构建类型安全的服务器**

在 `src/index.ts` 中创建你的 Express 应用。从 `express` 导入的 `Request`, `Response`, `NextFunction` 类型将为你的路由和中间件提供类型安全 132。

TypeScript

```
import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

#### **模块化路由**

最佳实践是将不同功能的路由拆分到独立的模块中 132。

1. **创建路由文件** (`src/routes/userRoutes.ts`)：
    
    TypeScript
    
    ```
    import { Router, Request, Response } from 'express';
    
    const router = Router();
    
    router.get('/', (req: Request, res: Response) => {
      res.json([{ id: 1, name: 'Alice' }]);
    });
    
    export default router;
    ```
    
2. **在主应用中使用路由** (`src/index.ts`)：
    
    TypeScript
    
    ```
    import userRouter from './routes/userRoutes';
    //...
    app.use('/api/users', userRouter);
    ```
    

TypeScript 的类型系统增强了这种分层架构。你可以在 `models` 目录中定义 `IUser` 接口，在 `controllers` 中使用它来约束数据处理逻辑，而 `routes` 模块则负责将 URL 路径与这些强类型的控制器函数连接起来，形成一个稳固的、类型安全的架构。

### **第 15 节：实战应用：React**

本节将展示如何在 React 项目中有效地利用 TypeScript 来构建健壮的 UI 组件。

#### **项目设置**

- **创建新项目**：最简单的方式是使用官方模板：`npx create-react-app my-app --template typescript` 138。
    
- **迁移现有项目**：
    
    1. 安装依赖：`npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest`。
        
    2. 将 `.js` 和 `.jsx` 文件重命名为 `.ts` 和 `.tsx` 138。
        
    3. 创建 `tsconfig.json` 文件（`npx tsc --init`）。
        

#### **为组件 Props 添加类型**

为组件的 `props` 定义类型是 TypeScript 在 React 中最核心的应用之一。

TypeScript

```
import React from 'react';

// 使用 interface 或 type 定义 props 的形状
interface GreetingProps {
  name: string;
  messageCount?: number; // 可选 prop
}

const Greeting: React.FC<GreetingProps> = ({ name, messageCount = 0 }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {messageCount > 0 && <p>You have {messageCount} new messages.</p>}
    </div>
  );
};

export default Greeting;
```

- `React.FC` (或 `React.FunctionComponent`) 是一个泛型类型，用于定义函数式组件。它会自动为 `props` 添加 `children` 属性。不过，现代实践中更倾向于直接为 `props` 参数添加类型，这样更明确 138。
    
- 对于 `children`，可以使用 `React.ReactNode` 类型，它代表了所有可以在 JSX 中渲染的类型 140。
    

#### **为 Hooks 添加类型**

精通 React 与 TypeScript 的关键在于掌握如何为 Hooks 提供正确的类型，这通常需要泛型知识。

- **`useState`**
    
    - **类型推断**：当初始值是明确的非 `null` 值时，TypeScript 通常能正确推断类型：`const [isActive, setIsActive] = useState(false);` (`isActive` 被推断为 `boolean`) 140。
        
    - **显式泛型**：当初始值为 `null` 或类型是联合类型时，必须使用泛型来显式指定类型：
        
        TypeScript
        
        ```
        type Status = "idle" | "loading" | "success" | "error";
        const = useState<Status>("idle");
        
        const [user, setUser] = useState<User | null>(null);
        ```
        
        `useState<User | null>(null)` 正是泛型的直接应用。开发者通过类型参数 `User | null` 告知 `useState` 这个泛型函数，其状态变量的类型以及其setter函数接收的参数类型。
        
- useReducer
    
    useReducer 的类型安全可以通过为 state 和 action 提供类型来实现。其中，为 action 使用 可辨识联合类型 是最强大的模式 141。
    
    TypeScript
    
    ```
    interface State { count: number; }
    
    type Action = 
    ```
    

| { type: 'increment'; payload: number }

| { type: 'decrement' };

````
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      // TS 知道 action.payload 是 number
      return { count: state.count + action.payload };
    case 'decrement':
      // TS 知道这里没有 payload
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```
这种模式为 Redux 风格的状态管理带来了完全的类型安全，是 React 与 TypeScript 结合的“杀手级应用”。
````

- useRef
    
    useRef 有两种主要用途，其类型定义也不同 141：
    
    1. **访问 DOM 元素**：`const inputRef = useRef<HTMLInputElement | null>(null);`
        
    2. **存储可变值**：`const intervalRef = useRef<number | null>(null);`
        
- useContext
    
    创建 Context 时，需要为其提供一个类型。通常初始值是 null 或 undefined，这需要在消费 Context 时进行检查 138。
    

### **第 16 节：实战应用：Vue 3**

Vue 3 的组合式 API (Composition API) 和 `<script setup>` 语法是为 TypeScript 量身打造的，提供了前所未有的类型支持。

#### **项目设置与 `<script setup lang="ts">`**

- 使用 Vite 或 Vue CLI 创建支持 TypeScript 的 Vue 3 项目 143。
    
- 在 SFC (单文件组件) 中使用 `<script setup lang="ts">` 来获得最佳的 TypeScript 支持和类型推断 144。
    

#### **为组件 Props 添加类型**

`defineProps` 是一个编译时宏，专门用于在 `<script setup>` 中声明 `props`。

- **类型驱动的声明（推荐）**：使用泛型参数来定义 `props` 的类型，这是最直接、最强大的方式 144。
    
    代码段
    
    ```
    <script setup lang="ts">
    interface Props {
      message: string;
      count?: number;
    }
    
    const props = defineProps<Props>();
    </script>
    ```
    
- **为类型驱动的 `props` 设置默认值**：由于无法在接口中定义默认值，需要使用 `withDefaults` 宏 144。
    
    代码段
    
    ```
    <script setup lang="ts">
    interface Props {
      message?: string;
      labels?: string;
    }
    
    const props = withDefaults(defineProps<Props>(), {
      message: 'hello',
      labels: () => ['one', 'two'] // 对象或数组默认值必须使用工厂函数
    });
    </script>
    ```
    

#### **为 Emits 添加类型**

`defineEmits` 宏同样支持泛型，可以精确地定义事件名称和载荷类型 146。

代码段

```
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();

emit('change', 123); // OK
// emit('change', '123'); // Error
</script>
```

#### **为组合式 API 函数添加类型**

- ref 和 Ref：
    
    ref 会从初始值推断类型。当需要更复杂的类型或初始值为 null 时，可以使用泛型或 Ref 工具类型进行显式声明 144。
    
    TypeScript
    
    ```
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    
    // 推断为 Ref<number>
    const count = ref(0);
    
    // 显式声明
    const user: Ref<User | null> = ref(null);
    const id = ref<string | number>('abc');
    ```
    
- reactive：
    
    reactive 的类型通常通过为其包裹的对象定义 interface 或 type 来实现 148。
    
    TypeScript
    
    ```
    import { reactive } from 'vue';
    
    interface Book { title: string; year: number; }
    
    const book: Book = reactive({ title: 'Vue 3 Guide', year: 2020 });
    ```
    
- computed：
    
    为计算属性的返回值添加明确的类型注解是一个好习惯，可以增加代码的清晰度 143。
    
    TypeScript
    
    ```
    import { ref, computed } from 'vue';
    
    const count = ref(0);
    const double: Ref<number> = computed(() => count.value * 2);
    ```
    

React 的 `useRef` 和 Vue 的 `ref` 虽然名称相似，但其类型模式反映了框架 reactivity 模型的根本差异。Vue 的 `ref` 是一个响应式容器，其类型 `Ref<T>` 关注的是它所 **持有** 的值。而 React 的 `useRef` 主要是一个获取稳定引用的“逃生舱”，其类型 `RefObject<T>` 关注的是它所 **指向** 的对象。

## **第六部分：综合与最佳实践**

本部分将通过一个完整的实战项目来巩固所学知识，并提供关于如何编写专业、高质量 TypeScript 代码的高级指导。

### **第 17 节：全栈教程：构建一个类型安全的待办事项应用**

本节将引导你完成一个端到端的全栈项目，将之前学到的所有概念融会贯通。我们将构建一个 React 前端和一个 Node.js/Express 后端。

这个项目的核心优势在于 **前后端共享类型**。通过在 monorepo 的共享包（例如 `common` 目录）中定义一个 `Todo` 接口，客户端和服务器都可以导入并使用完全相同的类型定义。这创建了数据模型的“单一事实来源”。如果 `Todo` 类型发生变化（例如增加 `priority` 字段），TypeScript 编译器将立即在前端和后端代码中标记出所有未正确处理此更改的地方，从而从根本上消除了一整类前后端数据不同步的 bug 149。

#### **后端 (Node.js / Express / MongoDB)**

1. **项目设置**：按照第 14 节的方法初始化 Node.js 项目，并安装 Express 和数据库驱动（如 `mongoose`）149。
    
2. **定义模型和接口**：
    
    - 在 `src/types/todo.ts` (或共享包) 中定义 `Todo` 接口。
        
        TypeScript
        
        ```
        export interface Todo {
          _id: string;
          text: string;
          completed: boolean;
        }
        ```
        
    - 创建 Mongoose Schema 和 Model，并使用 `Todo` 接口进行类型约束 149。
        
        TypeScript
        
        ```
        import { model, Schema } from 'mongoose';
        import { Todo } from '../types/todo';
        
        const todoSchema: Schema = new Schema({ /*... */ });
        export default model<Todo>('Todo', todoSchema);
        ```
        
3. **创建类型安全的 API 控制器**：为 CRUD (创建、读取、更新、删除) 操作编写控制器函数，确保请求体、参数和响应都经过类型检查。
    
4. **定义路由**：创建 Express 路由，将 API 端点连接到相应的控制器函数。
    

#### **前端 (React / TypeScript)**

1. **项目设置**：按照第 15 节的方法创建 React + TypeScript 项目 149。
    
2. **共享类型**：从共享位置导入 `Todo` 接口。
    
3. **构建组件**：
    
    - `TodoList.tsx`: 接收 `Todo` 数组并渲染列表。
        
    - `TodoItem.tsx`: 接收单个 `Todo` 对象作为 prop，并处理完成状态切换和删除事件 151。
        
    - `AddTodoForm.tsx`: 处理用户输入并调用 API 创建新的待办事项。
        
4. **状态管理与 API 调用**：
    
    - 使用 `useState` 管理待办事项列表状态：`const = useState<Todo>();`。
        
    - 使用 `useEffect` 在组件挂载时从后端 API 获取数据。
        
    - 编写类型安全的函数来处理添加、更新和删除操作，并与后端 API 进行交互。
        

通过这个项目，你将亲身体验到 TypeScript 在整个技术栈中提供的端到端类型安全所带来的巨大好处。

### **第 18 节：TypeScript 最佳实践与代码风格指南**

编写有效的 TypeScript 代码不仅关乎语法，更关乎一种“类型优先”的思维方式。优秀的 TypeScript 开发者会首先思考数据的形状，定义接口和类型来为领域建模，然后再编写符合这些契约的函数和组件。

#### **开启严格模式，铸就健壮代码库**

对于任何新项目，**强烈建议** 在 `tsconfig.json` 中开启 `"strict": true` 29。这将激活一系列严格的类型检查选项，包括：

- `noImplicitAny`: 禁止隐式的 `any` 类型。
    
- `strictNullChecks`: 严格处理 `null` 和 `undefined`，避免空指针错误。
    
- `strictFunctionTypes`: 更严格的函数类型检查。
    
- `strictPropertyInitialization`: 强制类属性在构造函数中初始化。
    

#### **代码组织与命名约定**

- **文件命名**：使用连字符命名法 (kebab-case)，例如 `user-profile.component.ts` 156。
    
- **标识符命名**：
    
    - 变量和函数：使用驼峰命名法 (camelCase) 157。
        
    - 类、接口、类型别名、枚举：使用帕斯卡命名法 (PascalCase) 157。
        
    - 不要为接口添加 `I` 前缀（如 `IUser`），这是过时的做法 157。
        
- **代码组织**：优先 **按功能组织** 代码，而不是按类型。例如，创建一个 `user` 文件夹，其中包含与用户相关的所有组件、服务和类型定义，而不是创建 `components`、`services`、`types` 等顶级文件夹 156。
    
- **导出**：优先使用命名导出而非默认导出，以提高重构能力和代码清晰度 159。
    

#### **常见陷阱与规避策略**

TypeScript 中的许多常见错误，都源于开发者试图用写动态 JavaScript 的思维来绕过类型系统。真正的精通，是学会利用类型系统（如联合类型、泛型、类型守卫）来安全地表达动态行为。

- **陷阱 1：滥用 `any`**
    
    - **问题**：`any` 会关闭类型检查，让你失去 TypeScript 的保护。
        
    - **对策**：优先使用 `unknown`。它强制你在执行任何操作前进行类型检查，是类型安全的选择 153。
        
- **陷阱 2：误用类型断言 (`as`)**
    
    - **问题**：类型断言 `value as string` 是在告诉编译器“相信我，我知道这是什么类型”。如果你的判断是错的，就会导致运行时错误。
        
    - **对策**：优先使用类型收窄（类型守卫）。只有在你明确知道类型而编译器无法推断时（例如处理 `JSON.parse` 的结果），才谨慎使用断言 155。
        
- **陷阱 3：忽略编译器错误**
    
    - **问题**：使用 `// @ts-ignore` 来临时屏蔽错误，往往会掩盖真正的问题。
        
    - **对策**：认真对待每一个编译器错误，理解其原因并从根本上修复它 160。
        
- **陷阱 4：不处理 `null` 和 `undefined`**
    
    - **问题**：在未开启 `strictNullChecks` 的情况下，`null` 和 `undefined` 可以被赋值给任何类型，这是大量运行时错误的来源。
        
    - **对策**：始终开启 `strictNullChecks`。使用可选链操作符 (`?.`) 和空值合并操作符 (`??`) 来安全地处理可能为空的值 155。
        
- **陷阱 5：忘记 `catch` Promise 错误**
    
    - **问题**：`async/await` 或 Promise 链中未处理的 `reject` 会导致静默失败或程序崩溃。
        
    - **对策**：始终为异步操作添加 `.catch()` 或 `try...catch` 块。使用 ESLint 规则（如 `@typescript-eslint/no-floating-promises`）可以帮助发现这类问题 162。
        

### **第 19 节：持续学习资源**

掌握 TypeScript 是一个持续的过程。以下资源可以帮助你不断深化理解，并紧跟社区的发展。

#### **官方与社区文档**

- **TypeScript 官方手册**：最权威、最全面的学习资源，应该作为你的首要参考 5。
    
- **TypeScript Playground**：一个无需安装即可在线编写和编译 TypeScript 的交互式环境，非常适合实验和分享代码 5。
    
- **React TypeScript Cheatsheets**：由社区维护的、非常详尽的 React + TypeScript 实践指南 139。
    
- **MDN Web Docs**：学习 TypeScript 离不开扎实的 JavaScript 基础，MDN 是学习 JavaScript 的最佳资源 5。
    

#### **值得研究的开源项目**

阅读高质量的、大规模的 TypeScript 代码是提升能力的重要途径。以下项目是 TypeScript 在业界的典范：

- **Visual Studio Code (VS Code)**：可能是世界上最著名的 TypeScript 项目，代码质量极高 164。
    
- **Ant Design / Material UI**：顶级的 React UI 组件库，展示了如何构建复杂的、类型安全的组件系统 164。
    
- **Prisma / TypeORM**：流行的 ORM 库，展示了如何利用 TypeScript 的高级类型来构建类型安全的数据库交互层 164。
    
- **tRPC**：一个创新的库，实现了无需代码生成即可在客户端和服务器之间共享类型的端到端类型安全 API 164。
    
- **DefinitelyTyped**：研究这个仓库本身，可以让你深入理解如何为复杂的 JavaScript 库编写声明文件 164。
    
- **Storybook**：一个用于独立开发和文档化UI组件的工具，本身用TypeScript构建 165。
    

#### **高级课程与博客**

- **Total TypeScript (Matt Pocock)**：一个广受好评的交互式课程，通过大量练习帮助你从入门到精通，尤其是在泛型和类型转换方面 166。
    
- **Frontend Masters**：提供多门高质量的 TypeScript 深入课程 163。
    
- **专业博客**：关注社区中知名专家的博客，如 `Angular Experts` (Kevin Kreuzer) 167、
    
    `Mark's Dev Blog` (Mark Erikson) 168 等，可以让你接触到最前沿的实践和思考。
    

### **附录：TypeScript 备忘单**

本附录包含一系列快速参考表，旨在总结讲义中的核心信息，为你日常开发提供便利。

#### **`tsconfig.json` 核心 `compilerOptions`**

|选项|描述|推荐值|
|---|---|---|
|`target`|指定输出的 JavaScript 版本。|`"ES2020"` 或更高|
|`module`|指定模块代码生成标准。|`"ESNext"` (前端), `"CommonJS"` (Node.js)|
|`strict`|启用所有严格类型检查选项。|`true`|
|`esModuleInterop`|改善 ES 模块与 CommonJS 模块的互操作性。|`true`|
|`skipLibCheck`|跳过对声明文件 (`.d.ts`) 的类型检查。|`true` (可加快编译速度)|
|`forceConsistentCasingInFileNames`|强制文件名大小写一致。|`true`|
|`outDir`|编译输出目录。|`"./dist"`|
|`rootDir`|TypeScript 源文件根目录。|`"./src"`|

#### **React Hooks 类型模式**

|Hook|场景|示例代码|
|---|---|---|
|`useState`|初始值为 `null` 或联合类型|`const [user, setUser] = useState<User \| null>(null);`|
|`useReducer`|状态和动作类型定义|interface State {... }<br><br>type Action = { type: 'A' } \| { type: 'B' };<br><br>const [state, dispatch] = useReducer(reducer, initialState);|
|`useRef`|DOM 元素引用|`const inputRef = useRef<HTMLInputElement \| null>(null);`|
|`useRef`|可变值存储|`const timerRef = useRef<number \| null>(null);`|
|`useContext`|上下文类型定义|`const ThemeContext = createContext<Theme \| null>(null);`|

#### **Vue 3 组合式 API 类型模式**

|API|场景|示例代码|
|---|---|---|
|`defineProps`|定义组件 props|<script setup lang="ts"><br><br>interface Props { msg: string; }<br><br>defineProps<Props>();<br><br></script>|
|`ref`|显式定义 ref 类型|import type { Ref } from 'vue';<br><br>const count: Ref<number \| string> = ref(0);|
|`reactive`|定义响应式对象|interface State {... }<br><br>const state: State = reactive({... });|
|`computed`|定义计算属性类型|`const double = computed<number>(() => count.value * 2);`|
|`defineEmits`|定义组件事件|`const emit = defineEmits<{(e: 'change', id: number): void}>();`|