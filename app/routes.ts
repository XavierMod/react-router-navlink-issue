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
