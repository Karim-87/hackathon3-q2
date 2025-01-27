import {clerkMiddleware , createRouteMatcher } from '@clerk/nextjs/server';


const isProtectedRoute = createRouteMatcher([ 'forum'])



export default clerkMiddleware(async (auth , req) => {

  if (req.nextUrl.pathname.startsWith('/studio')) {
    // console.log('Bypassing Clerk for Sanity Studio route:', req.nextUrl.pathname);
    return; // Skip Clerk processing for this route
  }

  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [ 
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).)',
    // Always run for API routes
    '/(api|trpc)(.)',
    // Include the /studio 
    '/studio',
    // Include the /studio route
    '/studio/:path',

  ],
}

// import { clerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export default clerkMiddleware((req: any) => {
//   const url = req.nextUrl.pathname;

//   // path
//   if (url.startsWith("/studio")) {
//     return NextResponse.next();
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     "/((?!_next|favicon.ico|studio).*)", // Exclude `_next`, `favicon.ico`, and `studio` paths
//     "/api/(.*)",
//     ' /studio',
//     '/studio/:path*'                        // Always include API routes
//   ],
// };


