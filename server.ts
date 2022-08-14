import { serve } from "https://deno.land/std@0.138.0/http/server.ts"
import { serveDir } from "https://deno.land/std@0.138.0/http/file_server.ts"

const route = (req: Request): Promise<Response> => {
    return serveDir(req, {
        fsRoot: "./public/"
    })
}

await serve(route)