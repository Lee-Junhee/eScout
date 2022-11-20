import { createRouter }from "../create-router";
import { userRouter } from "./user-router";
import { teamRouter } from "./team-router";
import { entryRouter } from "./entry-router";
import { compRouter } from "./comp-router";
import { pitRouter } from "./pit-router";
import { metaware } from "../middleware/metaware";

export const appRouter = createRouter()
    .middleware(metaware)
    .merge("user.", userRouter)
    .merge("team.", teamRouter)
    .merge("entry.", entryRouter)
    .merge("comp.", compRouter)
    .merge("pit.", pitRouter);

export type AppRouter = typeof appRouter;
