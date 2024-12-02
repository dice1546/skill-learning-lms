import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", 
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: [
//     "/",
//     "/api/webhook",
//     "/about",
//     "/learning(.*)",
//     "/contact",
//     "/pricing"
//   ]
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };