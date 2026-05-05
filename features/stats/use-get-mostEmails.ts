import {useQuery} from "@tanstack/react-query";
import {client} from "@/lib/hono"
import { useUser } from "@clerk/nextjs";


export const useGetMostEmails = (from?: string, to?: string)=>{
    const {user} = useUser()
    const query = useQuery({
        enabled : !!user,
        queryKey: ["user-most-emails",{from,to}],
        queryFn: async ()=>{
            const response = await client.api.stats.mostEmails.$get({
                query: {
                    ...(from ? { from } : {}),
                    ...(to ? { to } : {})
                }
            });

            if(!response.ok) throw new Error("failed to get most emails stats");

            const data = await response.json();

            return data;
        },
        retry:1
    });

    return query;
}