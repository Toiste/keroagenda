import * as z from 'zod'

export const ScheduleformSchema = z.object({
    title: z.string().min(1,{
        message: 'a title is required'
    }),
    slug: z.string().min(1,{
        message: 'a slug is required'
    })
})
