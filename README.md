console.log("App") in root.tsx is logging/rendering twice (not sure if this is expected)

This only happens when the root has a component that calls NavLink. Removing NavLink makes the root render only once.

# Detailed bug explanation

In `root.tsx`:

```ts
export default function App() {
  console.log("App");
  return <Outlet />;
}
```

That console.log is rendering twice in the browser's console when a specific condition is met.

I have set up a `routes.ts` file, which looks like this:

```ts
import { index, layout, prefix, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  // Authenticated routes
  layout('pages/Layout.tsx', [
    // index("pages/home.tsx"),

    ...prefix("orders/obsolete", [
      route("dashboard", 'pages/dashboard.tsx'),
      route('test', 'pages/test.tsx'),
    ]),
  ]),
] satisfies RouteConfig
```

My `Layout.tsx` component, which wraps both routes, looks like this:

```ts
import { Outlet } from "react-router";
import Navbar from "~/navbar";

export default function BaseLayout() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Outlet />
    </main>
  );
}
```

This layout includes a `NavBar` component, which looks like this:

```ts
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/orders/obsolete/test">Test</NavLink>
        <NavLink to="/orders/obsolete/dashboard">Dashboard</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
```

If <NavLink>'s are being used in that component, `console.log('App')` in `root.tsx` will render twice.
If we comment out both <NavLink>'s, it will only render once.

Is this expected?