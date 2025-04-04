import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { registerSchema } from "@/schemas/RegisterSchema";

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

import addImage from "/images/add-image.png";

import { useApi } from "@/utils/fetcher";
import toast from "react-hot-toast";

const SignupScreen = () => {
  const [userType, setUserType] = useState("learner");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const { API } = useApi();
  const navigate = useNavigate();

  // Initialize form with zodResolver
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone_number: "",
      whatsapp_number: "",
      location: "",
      user_type: userType,
      profile_image: undefined,
    },
  });

  const { errors } = form.formState;

  const handleUserTypeChange = (type) => {
    setUserType(type);
    form.setValue("user_type", type);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Update the form value
      form.setValue("profile_image", file);

      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Create FormData for file upload
      const formData = new FormData();

      // Append all form fields to FormData
      Object.keys(data).forEach((key) => {
        if (key === "profile_image" && data[key]) {
          formData.append(key, data[key]);
        } else if (data[key] !== undefined) {
          formData.append(key, data[key]);
        }
      });

      // Send the registration request
      const response = await API.registerUser(formData);

      // Handle successful registration
      toast.success("Account created successfully");
      console.log("user: ", response);

      form.reset();
      setPreviewUrl(null);

      navigate("/login", {
        replace: true,
        state: {
          registrationSuccess: true,
        },
      });
    } catch (error) {
      console.error("Error during signup:", error);

      // Fixed this line to use toast.error instead of toast as an object
      toast.error(
        error.message || "An error occurred during signup. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom styles based on the color scheme
  const styles = {
    gradientBg: "bg-gradient-to-r from-[#c7b8ea] to-[#87ceeb]",
    primaryButton: "bg-[#0097a7] hover:bg-[#007c89] text-white",
    secondaryButton:
      "border border-[#c7b8ea] text-[#333333] hover:bg-[#f7f7f7]",
    activeTab: "bg-[#c7b8ea] text-[#333333] border-[#c7b8ea]",
    inactiveTab: "border-gray-300 text-gray-700 hover:bg-[#f7f7f7]",
    link: "text-[#0097a7] hover:text-[#007c89]",
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col justify-center px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="text-center">
          <div className="w-full flex items-center justify-center">
            <Logo showIcon={true} />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-[#333333]">
            Create your Tutor Finder account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className={styles.link}>
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 bg-white py-8 px-6 sm:shadow-md rounded-lg sm:px-10">
          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#333333] mb-2">
              I want to join as:
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`flex-1 py-2 px-4 border rounded-md font-medium cursor-pointer ${
                  userType === "learner" ? styles.activeTab : styles.inactiveTab
                }`}
                onClick={() => handleUserTypeChange("learner")}
              >
                Learner
              </button>
              <button
                type="button"
                className={`flex-1 py-2 px-4 border rounded-md font-medium cursor-pointer ${
                  userType === "tutor" ? styles.activeTab : styles.inactiveTab
                }`}
                onClick={() => handleUserTypeChange("tutor")}
              >
                Tutor/Expert
              </button>
            </div>
          </div>

          {/* Profile Picture Section */}
          <div className="flex flex-col items-center space-y-2 mb-6">
            <div
              onClick={handleImageClick}
              className="cursor-pointer w-24 h-24 relative border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center overflow-hidden"
            >
              <img
                src={previewUrl || addImage}
                alt="Profile preview"
                className="w-full h-full object-cover rounded-full"
              />
              {!previewUrl && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-60">
                  <span className="text-gray-600 text-xs text-center">
                    Click to add
                    <br />
                    profile photo
                  </span>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            {errors.profile_image && (
              <p className="text-sm text-red-500">
                {errors.profile_image.message}
              </p>
            )}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        placeholder="Minimum 8 characters"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Number */}
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. +123 456 7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* WhatsApp Number
              <FormField
                control={form.control}
                name="whatsapp_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      WhatsApp Number
                      <span className="ml-1 text-xs text-gray-500">
                        (For connecting with{" "}
                        {userType === "learner" ? "tutors" : "learners"})
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. +123 456 7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="City, Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <a href="#" className={styles.link}>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className={styles.link}>
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${styles.primaryButton}`}
              >
                {isSubmitting ? "Creating account..." : "Create account"}
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

            <div className="mt-6">
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
