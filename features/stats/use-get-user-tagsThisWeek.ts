import {useQuery} from "@tanstack/react-query";
import {client} from "@/lib/hono"
import { useUser } from "@clerk/nextjs";


export const useGetUserTagsWeek = (from?: string, to?: string)=>{
    const {user} = useUser()
    const query = useQuery({
        enabled : !!user,
        queryKey: ["user-tags-week",{from,to}],
        queryFn: async ()=>{
            const response = await client.api.stats.labelsThisWeek.$get({
                query: {
                    ...(from ? { from } : {}),
                    ...(to ? { to } : {})
                }
            });

            if(!response.ok) throw new Error("failed to get labels");

            const data = await response.json();

            return data;
        },
        retry:1
    });

    return query;
}