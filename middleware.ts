
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from './lib/auth';


 
// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
  
  const session = request.cookies.get("session")?.value;

 
  
  if(request.url.includes('account') && !session){
    
      return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if(request.url.includes('auth') && session){
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/:path*'],
}