import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashedSeparator from "../DashedSeparator";
// eslint-disable-next-line no-unused-vars
import { Button } from "../ui/button";

const GigsCreateFormSkeleton = () => {
  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-0">
        <div className="text-xl sm:text-3xl font-bold text-[#0097A7] capitalize">
          <Skeleton height={36} width={250} />
        </div>
      </CardHeader>
      <div className="p-0">
        <DashedSeparator />
      </div>
      <CardContent className="p-0">
        <div className="flex flex-col gap-y-4">
          {/* Category */}
          <div>
            <div className="mb-2">
              <Skeleton height={20} width={100} />
            </div>
            <Skeleton height={40} />
          </div>

          {/* Title */}
          <div>
            <div className="mb-2">
              <Skeleton height={20} width={80} />
            </div>
            <Skeleton height={40} />
          </div>

          {/* Description */}
          <div>
            <div className="mb-2">
              <Skeleton height={20} width={120} />
            </div>
            <Skeleton height={128} />
          </div>

          {/* Budget Duration */}
          <div>
            <div className="mb-2">
              <Skeleton height={20} width={140} />
            </div>
            <Skeleton height={40} />
          </div>

          {/* Budget */}
          <div>
            <div className="mb-2">
              <Skeleton height={20} width={70} />
            </div>
            <Skeleton height={40} />
          </div>

          {/* Location */}
          <div>
            <div className="mb-2">
              <Skeleton height={20} width={160} />
            </div>
            <Skeleton height={40} />
          </div>
        </div>
        <DashedSeparator className="py-7" />
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-2 w-full">
          <div className="w-full sm:w-fit">
            <Skeleton height={44} width={100} />
          </div>
          <div className="w-full sm:w-fit">
            <Skeleton height={44} width={120} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { GigsCreateFormSkeleton };
