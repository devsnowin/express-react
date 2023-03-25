import express from "express";
import cors from 'cors'
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express'
import { inferAsyncReturnType } from "@trpc/server/dist/types";

import { createTRPCRouter, publicProcedure } from "./trpc";
import { userRouter } from "./router/user";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({});

type Context = inferAsyncReturnType<typeof createContext>

export const t = initTRPC.context<Context>().create();
export const appRouter = createTRPCRouter({
  user: userRouter,
  hello: publicProcedure.query(() => {
    return {
      hello: "hello from trpc!"
    }
  })
})

const app = express();
const port = 8080;

// middlewres
app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json())

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;
