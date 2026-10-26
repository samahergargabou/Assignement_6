# Assignment 6: Post Dashboard

## File Organization
- `src/api/postsApi.js`: Encapsulates asynchronous API calls with `fetch` and network validation. Contains zero JSX/React imports.
- `src/reducer/postsReducer.js`: Pure reducer handling state transitions (`FETCH_START`, `FETCH_SUCCESS`, `FETCH_ERROR`).
- `src/components/Post.jsx`: Pure presentational component for rendering a single post title and body.
- `src/components/PostList.jsx`: Pure rendering component using `.map()` with stable keys to display posts.
- `src/components/FilterForm.jsx`: Controlled input form component for managing text filter inputs.
- `src/App.jsx`: Root component orchestrating `useReducer`, `useEffect` lifecycle with `AbortController` cleanup, and in-render derived filtering.

## Challenges Faced
- Managing async cleanup with `AbortController` to cancel pending fetch requests safely when components unmount.
- Keeping state strictly un-duplicated by deriving the filtered posts list during render instead of caching it in component state.
- Structuring pure reducer transitions without mutating state objects.