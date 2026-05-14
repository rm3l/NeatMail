import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.user.updateWatchedFolders)["$put"]
>;
type RequestType = InferRequestType<
  (typeof client.api.user.updateWatchedFolders)["$put"]
>["json"];

export const useUpdateWatchedFolders = () => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.user.updateWatchedFolders["$put"]({
        json,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update watched folders");
      }

      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["active-folders"] });
      toast.success("Watched folders updated successfully!");
    },

    onError: (error) => {
      console.log(error);
      toast.error("Failed to update watched folders");
    },
  });
};
