# Vue3 Technical Test

This project is a technical test built using Vue3 and the Composition API. It includes two tasks: a parent-child component communication and a real-time LESS compiler.

## Setup

To set up the project, follow these steps:

1. **Clone the Repository:**
    ```bash
        git clone https://github.com/Timmsy1998/edukudu.git
    ```
2. **Navigate to the Project Directory:**
    ```bash
        cd edukudu
    ```
3. **Install Dependencies:**
    ```bash
        npm install
    ```
4. **Run the Development Server:**
    ```bash
        npm run serve
    ```
  
  
## Tasks

### Task 1: Parent-Child Communication

**Requirements:**
- Create two components: parent and child
- The parent component should have two variables: one boolean and one string
- The child component should have a button to toggle the boolean variable and a  textbox to edit the string variable
  
  
**Explanation of Method:**
- **Reactive State Management:** The `parentData` object in `ParentComponent.vue` is made reactive using `reactive`. This allows the parent component to manage its state and react to changes
- **Component Communication:** The `ChildComponent.vue` uses `defineProps` to receive `parentData` and `defineEmits` to emit events back to the parent. This ensures that the child component can communicate with the parent component effectively
- **Event Handling:** The `toggleBool` and `updateString` methods in `ParentComponent.vue` handle the events emitted by the child component. This allows the parent component to update its state based on the actions performed in the child component.

### Task 2: Real-Time LESS Compilation

**Requirements:**
- Create a page with two text boxes and a preview area
- One text box is for HTML code, and the other is for LESS code
- The LESS code should be compiled in real-time and scoped to the preview area

**Explanation of Method:**
- **Reactive Data:** `htmlCode` and `lessCode` are defined as reactive references using `ref()`. This allows the component to reactively update the preview when the user inputs new HTML or LESS code. `compiledHtml` is a computed property that directly reflects the `htmlCode` input, ensuring that the preview div always displays the latest HTML code.
- **Watching for Changes:** The `watch` function is used to monitor changes to `lessCode`. Whenever the LESS code changes, the `less.render` function is called to compile the LESS code into CSS. If the compilation is successful, a new `<style>` element is created and appended to the document head. This ensures that the compiled CSS is applied globally to the document, including the preview div.
- **Immediate Watcher:** The `{ immediate: true }` option ensures that the watcher runs immediately when the component is mounted. This is useful for initializing the preview with any existing LESS code.