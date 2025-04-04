import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";

// Skeleton for individual gig cards
const GigSkeletonCard = () => {
  return (
    <Card className="overflow-hidden p-4 pb-2">
      <CardContent className="p-0">
        <div className="flex justify-between items-start mb-2">
          <div className="w-3/4">
            <Skeleton height={24} width="90%" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton height={24} width={60} />
            <Skeleton height={24} width={24} circle={true} />
          </div>
        </div>

        <div className="mb-3">
          <Skeleton count={2} height={16} />
        </div>

        <div className="flex justify-between items-center">
          <Skeleton height={24} width={100} />
          <Skeleton height={24} width={80} />
        </div>
      </CardContent>

      <CardFooter className="py-3 border-t bg-gray-50">
        <div className="w-full">
          <Skeleton height={16} width={150} />
        </div>
      </CardFooter>
    </Card>
  );
};

// Skeleton loading state for the entire gigs page
const GigsPageSkeleton = () => {
  return (
    <div className="container mx-auto w-full">
       <div className="flex flex-wrap justify-between items-center mb-8 gap-4 w-full">
            <div className="w-full">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-3xl font-bold text-[#0097A7]">My Gigs</h1>
                <Button
                  asChild
                  className="bg-[var(--teal)] hover:bg-[var(--teal)]/90 flex items-center justify-center"
                >
                  <Link to={`/learner-dashboard/gigs/create`}>
                    <PlusCircle className="sm:mr-2 h-4 w-4" />
                    <span className="hidden sm:inline-block"> Create New Gig</span>
                  </Link>
                </Button>
              </div>
              <p className="text-gray-600 mt-2">Manage your service offerings</p>
            </div>
          </div>

      <div className="mb-8">
        <div className="w-full mb-6">
          <Skeleton height={40} width="100%" />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="w-full sm:max-w-sm">
            <Skeleton height={40} width="100%" />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Skeleton height={40} width={180} className="mr-2" />
            <Skeleton height={40} width={180} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <GigSkeletonCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export { GigSkeletonCard as GigSkeleton, GigsPageSkeleton };
