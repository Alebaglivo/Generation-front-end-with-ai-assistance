
## 📚 Purpose

This repository contains reusable Angular components designed as templates for dynamic front-end generation.

They are intentionally minimal and generic, ready to be populated with dynamic backend-driven data or used as foundational building blocks in your Angular applications.

---

⚠️ **Disclaimer**

This repository supports generative AI systems for building front-end templates.  
However, AI-generated results — especially in **visual design and UX** — may not always be optimal or accessible.

It is strongly recommended that a **human developer reviews and refines** every component and layout before using it in production.

---

## 📦 Included Components

### 1. `TemplateCardComponent`
Displays key-value data in a clean card format.

### 2. `TemplateFormComponent`
Renders a reactive form from field definitions.

### 3. `TemplateListComponent`
Displays a list of items with optional descriptions.

### 4. `TemplateTableComponent`
Creates a dynamic data table with column definitions.

### 5. `TemplateNavbarComponent`
Responsive top navbar with action icons.

### 6. `TemplateSidebarComponent`
Vertical navigation sidebar with dynamic links.

### 7. `TemplateIconActionComponent`
Reusable icon button with tooltip and callback.

### 8. `TemplateDropdownComponent`
Toggleable dropdown menu with list of options.

### 9. `TemplateDetailViewComponent`
Displays full record details as a list.

### 10. `TemplateEmptyStateComponent`
Empty-state UI message for when no content is available.

### 11. `TemplateTabsComponent`
Renders tabs with simple content sections.

### 12. `TemplateCheckboxListComponent`
Displays a list of checkbox items with bindable state.

### 13. `TemplateSelectComponent`
Renders a dropdown `<select>` element with dynamic options.

### 14. `TemplateStepperComponent`

### 15. `TemplateDemoPageComponent`
Example layout combining navbar, sidebar, card, and accordion in a functional demo page.

Multi-step navigation UI for forms or guided flows.

---


## 🧰 Setup Instructions

To use these Angular components:

### 1. Prerequisites

- Node.js (v18+ recommended): https://nodejs.org
- Angular CLI (v16+): `npm install -g @angular/cli`

### 2. Create a new project (if needed)

```bash
ng new my-project --standalone
cd my-project
```

### 3. Add one of the components

- Copy the folder (e.g., `template-card/`) into `src/app/components/`
- Import it in any route or component:

```ts
import { TemplateCardComponent } from './components/template-card/template-card.component';
```

### 4. Run the app

```bash
ng serve
```



---

## 🧩 Custom Templates

You are free to add your own reusable components inside the `templates/` folder.  
Just follow the same naming structure (`template-[name]`) and include comments where applicable for AI compatibility.

These custom components will be automatically recognized by future tools and AI systems built on top of this framework.

## 📁 Folder Structure

```
composants-templates/
│
├── templates/
│   ├── template-card/
│   ├── template-form/
│   ├── template-list/
│   ├── template-table/
│   ├── template-navbar/
│   ├── template-sidebar/
│   ├── template-icon-action/
│   ├── template-dropdown/
│   ├── template-detail-view/
│   ├── template-empty-state/
│   ├── template-tabs/
│   ├── template-checkbox-list/
│   ├── template-select/
│   └── template-stepper/
│
├── RULES_FOR_AI.md
└── README.md ← (you are here)
```

---
