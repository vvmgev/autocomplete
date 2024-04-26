1. In regular component developer needs to implement custom logic (based on that need to check) inside of `ShouldComponentUpdate` to prevent re-renders. `PureComponent` has own implementation of `ShouldComponentUpdate` it automatically prevents re-renders
2. Never used `Context` and `ShouldComponentUpdate` together
3. - Passing callback as a props and child calls it with some data
     - `ForwardRef` child have to assign data to `ref.current` and parent can get it
     - `Context API` or other some 3rd party lib \
       &nbsp;
4. - `ShouldComponentUpdate` for class component
     - `Memo` for function component \
       &nbsp;

5. The `Fragment` need to use when component tries render one+ JSX in the same level and React will throw an error, it will work if put JSX inside of Fragment. In other words the Fragment is wrapper which isn't DOM node.
6. - Share logic/state
   - Treat as middleware
   - Props Modification

7. The difference is only in syntax.

   - For `Promise` need to use `catch` to get an error
   - For `callback` it recevie error as an argument
   - Async await is the wrapper of `Promise` but need to use `try catch` block to catch the error

8. In Class component `setState` expect two arguments.

   - The new data which is requeired
   - The callback which called after updating and it is optional \
      For Function component one argument.\
     It is async because React doesn't update immediately, but saves it inside the queue, and schedules a re-render. There might be a few `setState` calls sequentially and React will consider all change as one called `Batching Update`.

9. - remove constructor
   - remove `this` keyword
   - remove `getDerivedStateFromError` and `componentDidCatch` functions it is not supported in function component instead use `ErrorBoundary`
   - use `Memo` instead `ShouldComponentUpdate`
   - Use `useEffect` hook to cover lifecycle (in case used class component lifecycle)
   - Use `useState` hook to to replace a state (in case used state)
   - Use other hooks like `useRef`, `useContext`, `useReducer` ...etc
   - declate functions and variables with `let` or `const`
   - ...

10. - Regular CSS in seperate file (or SASS, LESS)
    - Inline CSS
    - CSS-in-JS (Styled-component, JSS)
    - Tailwind (Best one)
11. There is a special prop called `dangerouslySetInnerHTML`

    ```
    <div dangerouslySetInnerHTML={ __html: '<h1>HTML from server</h1>' }> </div>
    ```
