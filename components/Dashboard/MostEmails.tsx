"use client";

import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { useGetMostEmails } from "@/features/stats/use-get-mostEmails";

const MostEmails = ({ from, to }: { from?: string; to?: string }) => {
  const { data, isLoading, isError } = useGetMostEmails(from, to);
  

  const maxUnread = useMemo(() => {
    if (!data?.mostEmailsData) return 1;
    return Math.max(...data.mostEmailsData.map((d) => d.count || 0), 1);
  }, [data?.mostEmailsData]);

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
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-1">
        Top Email Senders
      </h2>
       <p className="text-sm text-gray-500 mb-8">
        Your most active incoming email sources
      </p>


      <div className="flex justify-between items-center text-sm text-gray-500 font-medium mb-4">
        <span>Sender</span>
        <span>Emails</span>
      </div>

      <div className="space-y-3">
        {data?.mostEmailsData?.map((item) => {
          const percentage = Math.max(10, ((item.count || 0) / maxUnread) * 100);
          
          return (
            <div
              key={item.domain}
              className="group flex items-center justify-between"
            >
              <div className="relative flex-1 min-w-0 mr-4">
                <div 
                  className="absolute inset-0 bg-[#e4f8eb] rounded-md transition-all duration-500 ease-in-out" 
                  style={{ width: `${percentage}%` }}
                />
                <div className="relative px-3 py-1.5 text-sm text-gray-700 truncate font-medium">
                  {item.domain}
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="text-sm text-gray-600 font-medium w-8 text-right">
                  {item.count}
                </span>

              </div>
            </div>
          );
        })}
        
        {(!data?.mostEmailsData || data.mostEmailsData.length === 0) && (
          <div className="text-sm text-center text-gray-500 py-6">
            No clutter sources found.
          </div>
        )}
      </div>

     <Link
      href="/unsubscribe"
      className="w-full mt-auto flex items-center justify-center py-2 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-lg text-sm font-semibold text-gray-700 transition-colors"
   >
      <ChevronDown className="w-4 h-4 mr-2" />
      Show more
   </Link>
    </div>
  );
};

export default MostEmails;
