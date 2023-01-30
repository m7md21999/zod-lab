import { z , TypeOf} from "zod";



export const RideSchema = z.object({
    body: z.object({
        id: z.string({
            required_error:"ID is required!"
        }).min(2,{message: "Must be 2 or more characters long" }),
        name: z.string({
            required_error:"Name is required!"
        }).min(4,"Name must be at least 4 chrs!"),
        type: z.enum(["rollercoaster","thriller","water"],{required_error:"Type is mandtory!"}),
        tickets: z.number({
            required_error:"Tickets is mandotry!"
        }),
        price: z.number({
            required_error: "Price is required"
        })
    })   
});


export type RideSchemaType = TypeOf<typeof RideSchema>["body"];