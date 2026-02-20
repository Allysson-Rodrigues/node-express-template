# Backend TypeScript Foundations 🏗️

![CI Status](https://github.com/Allysson-Rodrigues/backend-ts-foundations/actions/workflows/main.yml/badge.svg)

A professional, high-performance, and production-ready foundation for scalable RESTful APIs. Built with **TypeScript**, **Node.js 24+**, and **Clean Architecture** principles.

---

### 🛠️ Core Stack

- **Runtime**: [Node.js 24+ (LTS)](https://nodejs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [Express.js v5+](https://expressjs.com/)
- **Environment**: Optimized for WSL2/Linux.

---

### ✨ Engineering Features

- **Strict Typing**: Full TypeScript implementation for maximum reliability.
- **Modern ESM**: Native ECMAScript Modules support.
- **Standards-First**: Pre-configured ESLint, Prettier, and EditorConfig.
- **Performance Optimized**: Low-overhead architecture designed for high throughput.

---

### 🚀 Getting Started

1. **Clone & Setup**
   ```bash
   git clone https://github.com/Allysson-Rodrigues/backend-ts-foundations.git
   cd backend-ts-foundations
   npm install
   ```

2. **Environment**
   Create a `.env` file based on your infrastructure needs:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

3. **Development**
   ```bash
   npm run dev
   ```

---

### 📂 Architecture Overview

```plaintext
.
├── src/
│   ├── controllers/ # Business logic handlers
│   ├── routes/      # Explicit route definitions
│   ├── app.ts       # Express application setup
│   └── server.ts    # Application entry point
├── dist/            # Compiled JavaScript (Gitignored)
├── .env             # Infrastructure secrets
└── package.json     # Scripts and dependencies
```

---

**Allysson Rodrigues**
Backend Infrastructure & AI Engineering
