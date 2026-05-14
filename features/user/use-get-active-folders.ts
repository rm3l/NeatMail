import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetActiveFolders = () => {
  const query = useQuery({
    queryKey: ["active-folders"],
    queryFn: async () => {
      const response = await client.api.user.activeFolders.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch active folders");
      }

      const data = await response.json();
      return data;
    },
  });

  return query;
};
