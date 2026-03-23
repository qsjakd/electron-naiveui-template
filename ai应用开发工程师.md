要成为一名合格的 AI 应用开发工程师，你需要从“传统软件开发”向“以模型为中心的开发”转型。基于你的前端背景（熟悉 JavaScript/TypeScript/Vue/NestJS），这是一个非常好的起点，因为目前许多 AI 应用的核心交互层和编排层都由这些技术驱动。

以下是你的核心学习路径：

### 1. 掌握 AI 基础概念

你需要理解 AI 是如何工作的，才能高效地调用它。

- **LLM (大语言模型) 原理：** 理解 Transformer 架构、Prompt Engineering（提示词工程）、Context Window（上下文窗口）、Token 的概念。
- **Prompt 模式：** 学习 Few-shot prompting, Chain-of-Thought (CoT), ReAct 等高级提示词设计技巧。

### 2. AI 应用开发技术栈 (核心)

这是将 AI 模型接入到业务应用中的关键：

- **LLM API 调用与编排：** 熟练使用 OpenAI API、Anthropic Claude API 等。学习如何使用 **LangChain** 或 **LlamaIndex**（这是目前 AI 应用开发的标配框架，用于连接数据源和模型）。
- **向量数据库 (Vector Database)：** 这是构建 AI 知识库的核心。你需要了解如何将文档转化为 Embedding（向量），并存入如 **Pinecone, Milvus, ChromaDB** 或 **pgvector**（PostgreSQL 插件）中。
- **RAG (检索增强生成) 架构：** 这是目前企业最核心的需求。你需要学会如何通过 RAG 让 AI 使用你的私有数据进行问答，而不是仅仅依赖模型自身的通用知识。

### 3. 前端与 AI 的深度结合

由于你具备 Vue/React 经验，你可以关注：

- **流式响应 (Streaming)：** 如何在页面上实现像 ChatGPT 那样的打字机效果（Server-Sent Events）。
- **多模态交互：** 如何接入语音识别 (Whisper) 和图像生成 (DALL-E/Stable Diffusion) 的 API。
- **本地模型运行：** 了解如何利用 WebLLM 等技术在浏览器端运行轻量级模型。

### 4. 推荐学习资源

我为你整理了相关的学习路径，帮助你系统入门：

- [Guide: Prompt Engineering](https://roadmap.sh/guides/prompt-engineering) - 提示词工程的快速入门。
- [Course: AI Developer](https://roadmap.sh/courses/ai-developer) - 如果你想系统化学习 AI 应用开发，推荐从这个课程开始。

<roadmap-recommendations>
<roadmap-slug>ai-engineer</roadmap-slug>
<roadmap-slug>nodejs</roadmap-slug>
<roadmap-slug>typescript</roadmap-slug>
</roadmap-recommendations>

### 职业建议

你拥有 4 年经验，且熟悉 NestJS，这意味着你可以直接从 **AI 后端服务 (AI Agent Backend)** 切入。不要试图去研究怎么训练模型（那是算法工程师的事），你的优势在于：**如何用代码高效地调用模型，并将其封装成稳定、易用的业务 API 提供给前端。**

你想先从“RAG（如何让 AI 读取你的文档）”开始深入了解，还是想先看看“如何构建一个 AI Agent（AI 智能体）”？我可以为你详细讲解。


__\
\

下面这份是 **2026年最完整的 AI应用开发工程师学习路线（中国就业版）**。\
我会给你：

- 技术栈（必须学什么）
- 学习顺序
- 每阶段做什么项目
- GitHub练习
- 企业真实需要什么

这条路线是根据企业招聘要求整理的，比如很多AI岗位要求 **Python、LLM应用、RAG系统、AI Agent、API开发等能力**。([Prosple Indonesia](https://id.prosple.com/graduate-employers/siemens-china/jobs-internships/ai-development-intern-llm-application-pipeline?utm_source=chatgpt.com "AI Development Intern (LLM Application Pipeline) di Siemens China"))


---

# 一、AI应用工程师的真实技术栈

先让你知道最终目标。

完整技术栈：

```text
Python
↓
Web开发
↓
AI API
↓
Prompt Engineering
↓
RAG知识库
↓
AI Agent
↓
向量数据库
↓
AI应用架构
↓
部署与工程化
```

常用技术：

类型

技术

语言

Python / JavaScript

后端

FastAPI / Flask

前端

Vue.js / React

AI框架

LangChain / LlamaIndex

向量数据库

Milvus / Pinecone

部署

Docker

模型API

OpenAI / DeepSeek / 阿里巴巴


---

# 二、完整学习路线（6-12个月）

## 第一阶段：Python基础（1-2个月）

目标：**可以写完整程序**

学习：

- Python语法
- 函数
- 类
- 文件读写
- JSON
- requests

示例：

```python
import requests

res = requests.get("https://api.example.com")
print(res.json())
```

必须掌握：

- Python项目结构
- pip
- 虚拟环境

推荐工具：

- Visual Studio Code
- Git


---

# 第二阶段：Web开发（2个月）

AI应用 **90%是Web应用**。

需要学：

### 后端

框架：

- FastAPI

示例：

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/chat")
def chat(q:str):
    return {"answer": q}
```

学会：

- API开发
- HTTP
- JSON
- REST接口


---

### 前端

学习基础：

- HTML
- CSS
- JavaScript

框架：

- Vue.js\
  或
- React

目标：

做一个 **聊天页面**。


---

# 第三阶段：大模型API开发（1个月）

学习：

- 调用AI模型
- Prompt Engineering
- Streaming输出

常见模型：

- OpenAI
- DeepSeek
- 阿里巴巴（通义千问）

示例：

```python
from openai import OpenAI

client = OpenAI()

res = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role":"user","content":"解释AI"}]
)

print(res.choices[0].message.content)
```


---

# 第四阶段：RAG知识库（2个月）

这是 **企业最需要的能力**。

RAG =\
**大模型 + 企业数据**

例如：

```text
公司文档
↓
embedding
↓
向量数据库
↓
AI回答
```

学习：

- LangChain
- LlamaIndex

向量数据库：

- Milvus
- Weaviate

企业招聘普遍要求 **RAG和向量数据库经验**。([CLTS](https://www.clts.com/jobs/clts04562?utm_source=chatgpt.com "AI Engineer (LLM / Python, $25-35K) | Jobs – CLTS"))


---

# 第五阶段：AI Agent（1-2个月）

Agent 是 **2025-2026 AI最大趋势**。

Agent可以：

- 自动规划任务
- 调用工具
- 自动执行

例如：

AI可以：

```text
查天气
↓
写报告
↓
发送邮件
```

常用框架：

- LangChain Agent
- AutoGPT

Agent + RAG 是现在企业重点方向。([DFCFW PDF](https://pdf.dfcfw.com/pdf/H3_AP202501091641865827_1.pdf?utm_source=chatgpt.com "2025
Tech 
预测
顶级技术趋势、工具和技
能"))


---

# 第六阶段：工程化（1个月）

必须掌握：

### Linux

常用命令：

```text
ssh
top
grep
ls
```


---

### Docker

AI部署必备。

工具：

- Docker


---

### Git

代码管理：

- GitHub
- GitLab


---

# 三、必须做的5个项目（求职关键）

企业最看重 **项目经验**。

建议做：


---

## 项目1 AI聊天网站

技术：

```text
FastAPI
Vue
LLM API
```

功能：

- AI聊天
- 历史记录
- 流式回答


---

## 项目2 AI知识库

技术：

```text
LangChain
Milvus
FastAPI
```

功能：

- 上传PDF
- 文档问答


---

## 项目3 AI Agent助手

功能：

AI可以：

- 查天气
- 查新闻
- 写报告


---

## 项目4 AI文档总结工具

功能：

```text
上传PDF
↓
AI总结
↓
生成报告
```


---

## 项目5 AI自动工作流

例如：

```text
邮件
↓
AI总结
↓
自动生成任务
```


---

# 四、GitHub项目推荐（必须练）

搜索关键词：

```text
llm-app
rag-chatbot
ai-agent
langchain-project
```

可以学习：

- AI chatbot
- AI knowledge base
- AI assistant


---

# 五、中国AI岗位薪资

初级：

```text
15k — 25k / 月
```

中级：

```text
30k — 50k / 月
```

高级：

```text
60k+ / 月
```


---

# 六、学习优先级（最重要）

千万不要乱学。

正确顺序：

```text
Python
↓
Web开发
↓
AI API
↓
LangChain
↓
RAG
↓
Agent
↓
项目
↓
部署
```


---

# 七、数学要求

你不用担心数学。

AI应用开发几乎不需要：

- 微积分
- 概率论
- 线性代数

只要会：

```text
Python
工程开发
AI框架
```

就可以。


---

💡 **最后给你一个很重要的建议**

如果你想在中国成为 **AI应用工程师**，最重要的是：

**做项目 + 做项目 + 做项目**

不是只看课程。


---

如果你愿意，我可以再给你一份：

**《AI应用工程师 2026最强学习资源清单》**

里面包括：

- 40个免费课程
- 50个AI项目
- 20个GitHub仓库
- 10个必须关注的AI工具

这份清单可以让你 **少走2-3年弯路**。