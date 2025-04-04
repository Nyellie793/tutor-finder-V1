/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import GigCard from "../cards.jsx/GigsCard";
import { useApi } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GigsPageSkeleton } from "../skeletons/GigSkeleton";

const GigsPage = () => {
  const { API } = useApi();
  const userDataString = localStorage.getItem("user");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [categories, setCategories] = useState([]);

  console.log("user: ", userData);
  console.log("userData.id: ", userData?.id);

   useEffect(() => {
      const fetchCategories = async () => {
        try {
          const fetchedCategories = await API.getAllCategories();
          setCategories(fetchedCategories.data);
          console.log("categories: ", fetchedCategories);
        } catch (error) {
          console.error("Error fetching categories:", error);
          toast.error("Failed to load categories");
        }
      };
  
      fetchCategories();
    }, []);

  useEffect(() => {
    const fetchGigs = async () => {
      setLoading(true); // Set loading to true when fetch starts
      try {
        const fetchedGigs = await API.getLearnerGigs(parseInt(userData?.id));
        setGigs(fetchedGigs.data);
        console.log("gigs: ", fetchedGigs);
      } catch (error) {
        console.error("Error fetching gigs:", error);
        // toast.error("Failed to load gigs");
      } finally {
        setLoading(false); // Set loading to false when fetch completes (success or error)
      }
    };

    fetchGigs();
  }, []);

  // If loading, return the skeleton
  if (loading) {
    return <GigsPageSkeleton />;
  }

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
        <Tabs defaultValue="all" className="w-full">
          <div className="w-full mb-6">
            <ScrollArea className="w-full p-1">
              <div className="flex min-w-max p-1">
                <TabsList>
                  <TabsTrigger value="all" className="px-4">
                    All Gigs ({gigs.length})
                  </TabsTrigger>
                  <TabsTrigger value="open" className="px-4">
                    Open ({gigs.filter((g) => g.status === "open").length})
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="px-4">
                    Completed (
                    {gigs.filter((g) => g.status === "completed").length})
                  </TabsTrigger>
                  <TabsTrigger value="cancelled" className="px-4">
                    Cancelled (
                    {gigs.filter((g) => g.status === "cancelled").length})
                  </TabsTrigger>
                </TabsList>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {/* Filter section remains the same */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search your gigs..." className="pl-10" />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="budget-high">
                    Budget: High to Low
                  </SelectItem>
                  <SelectItem value="budget-low">
                    Budget: Low to High
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories?.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* TabsContent sections remain the same */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {gigs.map((gig) => (
                <GigCard key={gig.id} gig={gig} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="open" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {gigs
                .filter((gig) => gig.status === "open")
                .map((gig) => (
                  <GigCard key={gig.id} gig={gig} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {gigs
                .filter((gig) => gig.status === "completed")
                .map((gig) => (
                  <GigCard key={gig.id} gig={gig} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="cancelled" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {gigs
                .filter((gig) => gig.status === "cancelled")
                .map((gig) => (
                  <GigCard key={gig.id} gig={gig} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GigsPage;
