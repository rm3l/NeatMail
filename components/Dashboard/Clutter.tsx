"use client";

import { useGetClutter } from "@/features/stats/use-get-clutter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useUnsubscribeDomain } from "@/features/email/use-post-unsubscribe";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";

const Clutter = () => {
  const { data, isLoading, isError } = useGetClutter();
  const unsubscribeMutation = useUnsubscribeDomain();

  const handleUnsubscribe = (domain: string) => {
    unsubscribeMutation.mutateAsync({ domain: domain });
  };

  const maxUnread = useMemo(() => {
    if (!data?.clutterData) return 1;
    return Math.max(...data.clutterData.map((d) => d.unreadCount || 0), 1);
  }, [data?.clutterData]);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 w-full min-h-[300px]">
        <Skeleton className="h-6 w-1/2 mb-8" />
        <div className="flex justify-between mb-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-8 w-5/6" />
        </div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 bg-white rounded-xl p-6 shadow-sm border border-gray-100">Failed to load clutter data.</div>;
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full">
      <h2 className="text-lg font-bold text-gray-900 mb-6">
        Top Email Senders
      </h2>

      <div className="flex justify-between items-center text-sm text-gray-500 font-medium mb-4">
        <span>Domain</span>
        <span>Emails</span>
      </div>

      <div className="space-y-3">
        {data?.clutterData?.map((item) => {
          const percentage = Math.max(10, ((item.unreadCount || 0) / maxUnread) * 100);
          
          return (
            <div
              key={item.domain}
              className="group flex items-center justify-between"
            >
              <div className="relative flex-1 mr-4">
                <div 
                  className="absolute inset-0 bg-[#dbeafe] rounded-md transition-all duration-500 ease-in-out" 
                  style={{ width: `${percentage}%` }}
                />
                <div className="relative px-3 py-1.5 text-sm text-gray-700 truncate font-medium">
                  {item.domain}
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="text-sm text-gray-600 font-medium w-8 text-right">
                  {item.unreadCount}
                </span>
                
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={unsubscribeMutation.isPending}
                  onClick={() => handleUnsubscribe(item.rawDomain ?? "")}
                  className="hidden sm:flex opacity-0 md:group-hover:opacity-100 h-7 px-3 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all rounded-md absolute right-6 bg-white shadow-sm border"
                >
                  Unsubscribe
                </Button>
              </div>
            </div>
          );
        })}
        
        {(!data?.clutterData || data.clutterData.length === 0) && (
          <div className="text-sm text-center text-gray-500 py-6">
            No clutter sources found.
          </div>
        )}
      </div>

      <Link
        href="/unsubscribe"
        className="w-full mt-6 flex items-center justify-center py-2 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg text-sm font-semibold text-gray-700 transition-colors"
      >
        <ChevronDown className="w-4 h-4 mr-2" />
        Show more
      </Link>
    </div>
  );
};

export default Clutter;
