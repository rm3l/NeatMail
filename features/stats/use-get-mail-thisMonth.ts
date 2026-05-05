import {useQuery} from "@tanstack/react-query";
import {client} from "@/lib/hono"
import { useUser } from "@clerk/nextjs";


export const useGetUserMailsThisMonth = (from?: string, to?: string)=>{

    const {user} = useUser()
    const query = useQuery({
        enabled : !!user,
        queryKey: ["user-mail-month", { from, to }],
        queryFn: async ()=>{
            const response = await client.api.stats.mailsThisMonth.$get({
                query: {
                    ...(from ? { from } : {}),
                    ...(to ? { to } : {})
                }
            });

            if(!response.ok) throw new Error("failed to get data");

            const data = await response.json();

            return data;
        },
        retry:1
    });

    return query;
}