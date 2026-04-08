# 🧪 React Pattern Lab

A modular exploration of React design patterns, architected for **Type Safety**, **Logic Reuse**, and **Fast Refresh** (HMR) compatibility.

---

## 🏗️ Core Architecture
The project is structured as a **Documentation Shell**.
* **Sidebar Navigation**: Centralized control for pattern switching.
* **Modular Folders**: Each pattern is self-contained with its own logic, types, and UI.
* **Inversion of Control**: Heavy focus on patterns that separate *how it works* from *how it looks*.

---

## 🚀 Implemented Patterns

### 1. CompoundPattern (Layout & Composition)
**Directory:** `/src/components/CompoundPattern/`
* **Intent**: Manage complex UI state (like Tabs or Accordions) implicitly.
* **Key Files**: `TabsProvider.tsx`, `TabsContext.tsx`, `Tab.tsx`.
* **Concept**: Uses the **Context API** to share state between a parent and its children without "Prop Drilling."

### 2. RenderPropsPattern (Logic Injection)
**Directory:** `/src/components/RenderPropsPattern/`
* **Intent**: Share reusable logic (like Data Fetching) while delegating UI rendering to the consumer.
* **Key Files**: `DataFetcher.tsx`.
* **Concept**: Uses a **Function as a Child** to "inject" internal state into a custom UI template provided by the parent.

### 3. Layout Pattern (App Shell)
**Directory:** `/src/components/Layout/`
* **Intent**: Decouple the application's navigation and global structure from the content.
* **Concept**: Uses state-driven conditional rendering to switch between different high-level modules.

### 4. Higher-Order Component (HOC)

**Directory:** `/src/components/HOCPattern/`

-   **Demo File**: `HOC.tsx`
-   **Intent**: Enhance components with cross-cutting concerns (like logging) by wrapping them in a decorator function.
-   **Key Concept**: `EnhancedComponent = withLogger(BaseComponent)`.

---

## 🛠️ Tech Stack
* **React 19** & **Vite**
* **TypeScript** (Generics & Context Types)
* **Tailwind CSS** (Utility-first styling)
* **Lucide React** (Iconography)

---

## 💡 Why this structure?
By keeping **Context** and **Logic** in separate files from the **UI Components**, we ensure that Vite's **Hot Module Replacement (HMR)** works perfectly. Changing a style won't reset your application state!
