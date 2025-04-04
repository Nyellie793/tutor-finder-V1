import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Logo from "./Logo";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useApi } from "@/utils/fetcher";

// Create login validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean().optional(),
});

const LoginScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { API } = useApi();

  // Initialize form with zodResolver
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // Custom styles based on the color scheme
  const styles = {
    gradientBg: "bg-gradient-to-r from-[#c7b8ea] to-[#87ceeb]",
    primaryButton: "bg-[#0097a7] hover:bg-[#007c89] text-white",
    link: "text-[#0097a7] hover:text-[#007c89]",
  };

const onSubmit = async (data) => {
  try {
    setIsSubmitting(true);
    console.log("Login data:", data);

    // Make API call to authenticate user
    const response = await API.loginUser({
      email: data.email,
      password: data.password,
    });

    console.log("res: ", response);

    // Check if response is an array
    const responseData = Array.isArray(response) ? response[1] : response;
    console.log('r da', responseData)

    // Extract token
    if (responseData.token) {
      localStorage.setItem("auth_token", responseData.token);
    } else {
      throw new Error(responseData.message);
    }

    // Extract user data - check for "authenticated user" (with space) or other possible keys
    const userData =
      responseData["authenticated user"] ||
      responseData.user ||
      responseData.userData;

    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Login successful!");

      // Navigate based on user_type
      if (userData.user_type === "tutor") {
        navigate("/tutor-dashboard");
      } else {
        navigate("/learner-dashboard");
      }
    } else {
      throw new Error("User data not found in response");
    }
  } catch (error) {
    console.error("Login error:", error);
    toast.error(
      error.message || "Invalid email or password. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="w-full flex items-center justify-center">
            <Logo showIcon={true} />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-[#333333]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link to="/signup" className={styles.link}>
              create a new account
            </Link>
          </p>
        </div>

        <div className="mt-8 bg-white py-8 px-6 sm:shadow-md rounded-lg sm:px-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                  )}
                />
                <div className="text-sm">
                  <Link to="/forgot-password" className={styles.link}>
                    Forgot your password?
                  </Link>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${styles.primaryButton}`}
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="inline-flex justify-center"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Button>

              <Button
                type="button"
                variant="outline"
                className="inline-flex justify-center"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
