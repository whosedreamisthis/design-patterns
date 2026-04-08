# React Design Patterns Lab

A modular collection of React design patterns implemented with **TypeScript**, **Tailwind CSS**, and **Lucide React**.

---

## 📂 Project Structure

Each pattern is contained within its own dedicated directory to ensure a clean **Separation of Concerns** and maintain **Fast Refresh** compatibility.

---

## 🚀 Implemented Patterns

### 1. CompoundPattern

**Directory:** `src/components/CompoundPattern/`

-   **Purpose**: Flexible UI layout and implicit state management.
-   **Why use it?**: It follows the **Open-Closed Principle**. You can change the UI (add icons, move tab positions) without touching the core logic.
-   **Files**:
    -   `TabsContext.tsx`: Manages shared state via React Context.
    -   `TabsProvider.tsx`: The orchestrator providing the state.
    -   `Tab.tsx`: The UI atoms consuming the state.

### 2. RenderPropsPattern

**Directory:** `src/components/RenderPropsPattern/`

-   **Purpose**: Sharing logic between components using a function prop.
-   **Why use it?**: It achieves **Inversion of Control**. The `DataFetcher` handles the "How" (fetching, loading), while the consumer handles the "What" (the specific UI).
-   **Key Implementation**: Uses the `children` prop as a function to inject `data`, `loading`, and `error` states.

### 4. Higher-Order Component (HOC)

**Directory:** `/src/components/HOCPattern/`

-   **Demo File**: `HOC.tsx`
-   **Intent**: Enhance components with cross-cutting concerns (like logging) by wrapping them in a decorator function.
-   **Key Concept**: `EnhancedComponent = withLogger(BaseComponent)`.

---

## 📖 Key Principles

-   **API Surface Area**: Focused, minimal props for better maintainability.
-   **Separation of Logic & View**: Logic stays in Providers; UI stays in pure components.
-   **HMR Compliance**: Context and Types are separated from Component files to prevent full page reloads.

---
