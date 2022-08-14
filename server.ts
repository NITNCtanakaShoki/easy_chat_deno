import { serve } from "https://deno.land/std@0.138.0/http/server.ts"
import { serveDir } from "https://deno.land/std@0.138.0/http/file_server.ts"

const route = (req: Request): Promise<Response> => {
    return serveDir(req, {
        fsRoot: "./public/",
        urlRoot: "",
        showDirListing: true,
        enableCors: true,
    });
}

await serve(route)