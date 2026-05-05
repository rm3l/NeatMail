import {useQuery} from "@tanstack/react-query";
import {client} from "@/lib/hono"
import { useUser } from "@clerk/nextjs";

export const useGetReadVsUnread = (from?: string, to?: string)=>{
    const {user} = useUser()
    const query = useQuery({
        enabled : !!user,
        queryKey: ["read-vs-unread",{from,to}],
        queryFn: async ()=>{
            const response = await client.api.stats.readVsUnread.$get({
                query: {
                    ...(from ? { from } : {}),
                    ...(to ? { to } : {})
                }
            });

            if(!response.ok) throw new Error("failed to get data");

            const data = await response.json();

            return data;
        },
    });
    return query;
}
