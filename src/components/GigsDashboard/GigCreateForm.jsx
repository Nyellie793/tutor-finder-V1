import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import DashedSeparator from "../DashedSeparator";
import { useEffect, useState } from "react";
import { useApi } from "@/utils/fetcher";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { GigsCreateFormSkeleton } from "../skeletons/GigsCreateFormSkeleton";

// Updated Zod schema for form validation
const createGigSchema = z.object({
  category_id: z.string().min(1, "Please select a category"),
  title: z.string().min(10, "Title must be at least 10 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  budget: z
    .string()
    .min(1, "Budget is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 1000, {
      message: "Budget must be at least 1000",
    }),
  budget_period: z.string().min(1, "Budget duration is required"),
  location: z.string().min(1, "Location is required"),
});

const CreateGigForm = () => {
  const { API } = useApi();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(createGigSchema),
    defaultValues: {
      category_id: "",
      title: "",
      description: "",
      budget: "",
      budget_duration: "",
      location: "",
    },
  });
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true)

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

  // //If loading, return the skeleton
  // if (loading) {
  //   return <GigsCreateFormSkeleton />;
  // }

  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
    setIsLoading(true);
    const token = localStorage.getItem("auth_token");
    if (!token) {
      toast.error("User is not authenticated, Please login");
      setIsLoading(false);
      return;
    }

    try {
      const response = API.createGig(token, values);
      console.log("response", response);
      toast.success("Gig created successfully");
      navigate("/learner-dashboard/gigs");
    } catch (error) {
      console.log("CREATE_GIG", error);
      toast.error(error.message || "Failed to create gig");
    } finally {
      setIsLoading(false);
    }
  };

  // Get the budget duration value to determine if budget field should be enabled
  const budgetDuration = form.watch("budget_period");
  const isBudgetEnabled = !!budgetDuration;

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="text-xl sm:text-3xl font-bold text-[#0097A7] capitalize">
          Create a new Gig
        </CardTitle>
      </CardHeader>
      <div className="p-0">
        <DashedSeparator />
      </div>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              {/* Category */}
              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage />
                        <SelectContent>
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gig Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter gig title (min 10 characters)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Describe what you want to learn (min 50 characters)"
                        className="min-h-32 resize-y"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Budget Duration */}
              <FormField
                control={form.control}
                name="budget_period"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Duration</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget duration" />
                          </SelectTrigger>
                        </FormControl>
                        <FormMessage />
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Budget */}
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        min="1000"
                        placeholder="Enter your budget (min 1000)"
                        disabled={!isBudgetEnabled}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Location</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Where would you like to learn? (e.g. Online, City)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DashedSeparator className="py-7" />
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-2 w-full">
              <div className="w-full sm:w-fit">
                <Button
                  type="button"
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/learner-dashboard/gigs")}
                >
                  Cancel
                </Button>
              </div>
              <div className="w-full sm:w-fit">
                <Button
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                  type="submit"
                  size="lg"
                >
                  Create Gig
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateGigForm;
