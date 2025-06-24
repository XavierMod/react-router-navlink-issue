// export const loader = async ({ request }: Route.LoaderArgs): Promise<{ user: AuthenticatedUser }> => {
//   // Authenticate and fetch user info (including tenantId)
//   const user = await authenticatedLoader(request)
//   return { user }
// }

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
