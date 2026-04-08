# React Design Patterns Lab

A living laboratory of modern React design patterns, implemented with **TypeScript**, **Tailwind CSS**, and **Lucide React**.

---

## 🚀 Implemented Patterns

### 1. Compound Component Pattern

**File:** `/src/components/Compound.tsx`  
**Purpose:** Flexible UI Layout and Implicit State Management.

-   **Description**: Allows a set of related components to share state implicitly while giving the user full control over the DOM structure.
-   **Key Concepts**:
    -   **Context API**: Used to share `activeTab` state without prop drilling.
    -   **Open-Closed Principle**: The component is open for visual extension (adding icons, badges) but closed for internal logic modification.
    -   **API Surface Area**: Extremely small; the user only interacts with a few semantic components rather than a massive configuration object.

---

### 2. Render Props Pattern

**File:** `/src/components/MouseTracker.tsx`  
**Purpose:** Logic Reuse and Decoupling UI from Behavior.

-   **Description**: A technique for sharing code between React components using a prop whose value is a function.
-   **Key Concepts**:
    -   **Inversion of Control**: The parent component handles the "How" (tracking mouse logic), while the consumer handles the "What" (rendering an icon, text, or coordinates).
    -   **Dynamic Rendering**: Allows the same logic to drive completely different UI representations without duplicating the underlying state management.

---

## 🛠️ Tech Stack

-   **React 19**
-   **TypeScript** (Type safety for Context and Props)
-   **Tailwind CSS** (Utility-first styling)
-   **Lucide React** (Iconography)
-   **Vite** (Fast Refresh & HMR)

---

## 📖 Glossary of Principles

-   **Open-Closed Principle (OCP)**: Software entities should be open for extension, but closed for modification.
-   **API Surface Area**: The total number of points (props/methods) through which a developer interacts with a component. Smaller is usually better for maintenance.
-   **HMR (Hot Module Replacement)**: Vite's ability to swap modules without a full page reload.

---

_Keep adding to this as we explore more patterns!_
