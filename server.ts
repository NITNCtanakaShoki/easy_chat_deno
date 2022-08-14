import { serve } from "https://deno.land/std@0.138.0/http/server.ts"

const route = async (req: Request): Response => {
    return new Response('Hello, Sudo!')
}

await serve(route)