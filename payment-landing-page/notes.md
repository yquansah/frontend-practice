## Notes
- JSX makes it easier to write and add HTML in React
- When JSX is rendered it translates `className` to `class` attributes
- React components work in isolation and return HTML
- Props are like function arguments and you can send them into a component as attributes
- React events are written in camelCase instead so `onClick` instead of `onclick`
- The `Outlet` renders the child component if it exists
- You can do styling in many different ways explained [here](https://www.w3schools.com/REACT/react_css_styling.asp)

### 10/18/2023
- I want to understand common patterns as I do frontend dev (I do not want to question too much on how to do certain things)
- I want multiple `div`s to be horizontally next to each other
    - Wrap all the child `div`s in a overall `div` and give it a `flex` property
    - Make sure you get the spacing right for all of the child `div`s
        - You can do the above by using spacing in between the `div`s like `justify-between`, etc
- The preferred way of rendering lists in React is to map over that list within the rendering
- How to know how `div` sizes are calculated?

### 10/19/2023
- Don't start setting heights/widths of `div`s unless you have to
- Should we design for bigger screens first or smaller screens first from a tailwind perspective?
- How to work with icons in React? Should you bundle them in?

### 10/24/2023
- To align divs, you can use `text-center`, `text-left`, and `text-right` properties