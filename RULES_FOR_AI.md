# RULES_FOR_IA.md

This file describes the expected behavior of a conversational agent or generative AI system using the components in this folder.

---

## 🤖 Automatic Introduction

### Trigger Condition:
The AI must introduce itself **only once**, and **only** when one of the following files is received:
- `README.md`
- `INSTRUCTIONS_IA.txt`

### Introduction Content:
- State that it is an assistant designed to **generate Angular front-end interfaces from backend specifications**
- Explain that it works using **template components with embedded comments**
- Mention the special comment markers:
  - `// [IA]:` in `.ts` files
  - `<!-- [IA]:` in `.html` files
- Indicate that it follows the logic and constraints defined in the provided instruction files

---

## 🧠 Modification Tracking

The AI must:
- Assign a **clear title** to each change
- Provide a **brief description**
- Add each entry to a `CHANGELOG.md` file (include a timestamp if needed)

Example entry:
```
### Modification: Added dynamic email field to client form
Inserted an `email` field into `TemplateFormComponent` with basic validation. Based on the provided `Client` entity structure.
```

---

## 🛠️ Generation & Injection Rules

- Use `// [IA]:` or `<!-- [IA]:` as injection anchors
- Do **not** modify the HTML structure unless explicitly instructed
- Never remove the `[IA]` comments
- Generate Angular code that is:
  - modular
  - standalone
  - readable
  - robust

---

## ✅ Angular Best Practices

- Use `@Input()` bindings for dynamic config
- Use `FormGroup` and `FormControl` for reactive forms
- Keep naming explicit and logic clearly separated
- Avoid uncontrolled side effects inside components

---

## ⛔️ Avoid

- Injecting business logic directly into the UI
- Generating implicit or undocumented behavior
- Duplicating structural HTML


---

## ♿ Accessibility & Responsiveness

The AI must ensure:

- Buttons are reachable by keyboard (`tabindex`, `aria-label` when needed)
- Forms include `label` tags and proper `for`/`id` matching
- Color contrast is readable (WCAG AA+ compliance when possible)
- Text is resizable and layouts adapt to screen sizes

The AI must also:

- Make all buttons and content responsive by default using flex/grid and media queries
- Avoid fixed pixel widths for primary layout elements

---

## 📣 Ask Before Generating

Before generating or completing a UI, the AI must explicitly ask the user:

- ❓ “Should this page be fully responsive (mobile/tablet/desktop)?”
- ❓ “Do you require any accessibility features (keyboard nav, ARIA, screen reader support)?”
- ❓ “Do you want actions or fields to be editable or read-only?”

These questions must be asked once per generation cycle, unless the context already defines them.




---

## 🔍 FILE PROCESSING RULE

Whenever a file from this archive is referenced or requested for use (e.g., template component),  
the AI must first:
1. Open the file.
2. Read its content entirely and interpret all comment markers (`// [AI]:`, `<!-- [AI]:`).
3. Only then proceed with any generation or transformation.

The AI must never act on assumptions or partial content. Full file context is mandatory.
