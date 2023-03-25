import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    getById: publicProcedure.input(z.object({id: z.string()})).query(({ctx, input}) => {
        return {
            sucess: true,
            message: `user id: ${input.id}`
        }
    })
})