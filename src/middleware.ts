//Without a defined matcher, this one line applies next-auth to the entire project

//this export applies next-auth to the entire website
export { default } from "next-auth/middleware"

//Applies next-auth only to matching route - can be regex
//Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

//these will be different endpoints
export const config = { matcher: ["/extra", "/dashboard"]}

