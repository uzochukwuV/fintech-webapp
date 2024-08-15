
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SignJWT, jwtVerify } from 'jose';


// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
  
  
  
  const session = request.cookies.get("session")?.value;
  // await updateSession(request);
  
  
  if(request.url.includes('account') && !session){
    
      return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if(request.url.includes('auth') && session){
    return NextResponse.redirect(new URL("/", request.url));
  }

  if(session){
    const key = new TextEncoder().encode('secret');
  const {payload} = await jwtVerify(session!, key, {
    algorithms: ["HS256"],
})

  payload.expires = new Date(Date.now() + 60 * 60 * 1000)


  const cy = await new SignJWT(payload)
  .setProtectedHeader({alg:'HS256'})
  .setIssuedAt()
  .setExpirationTime("12 hours")
  .sign(key)

    const res = NextResponse.next();

    res.cookies.set({
      name: "session",
      value: cy,
      httpOnly: true,
      expires: new Date(Date.now() + 12*60 * 60 * 1000),
      
  })
  return res;
  }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/:path*'],
}