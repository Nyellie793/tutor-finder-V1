/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Importing the logo

const SignupScreen = () => {
  const [userType, setUserType] = useState("learner");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone_number: "",
      whatsapp_number: "",
      location: "",
    },
  });

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Here you would send the data to your API
      // const response = await fetch('your_api_endpoint/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(submitData),
      // });

      // if (!response.ok) {
      //   throw new Error('Registration failed');
      // }

      // const result = await response.json();
      // console.log('Registration successful:', result);

      reset(); // Reset the form after successful submission
      console.log("form data: ", { ...data, user_type: userType });

      // Redirect to login or onboarding page
      // history.push('/login');
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const password = watch("password");

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

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("user_type")} value={userType} />

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#333333]"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.name ? "border-red-300" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#87ceeb] focus:border-[#87ceeb] sm:text-sm`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#333333]"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#87ceeb] focus:border-[#87ceeb] sm:text-sm`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#333333]"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.password ? "border-red-300" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#87ceeb] focus:border-[#87ceeb] sm:text-sm`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-[#333333]"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm_password"
                  type="password"
                  {...register("confirm_password", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.confirm_password
                      ? "border-red-300"
                      : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#87ceeb] focus:border-[#87ceeb] sm:text-sm`}
                />
                {errors.confirm_password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium text-[#333333]"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone_number"
                  type="tel"
                  {...register("phone_number", {
                    required: "Phone number is required",
                  })}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.phone_number ? "border-red-300" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#87ceeb] focus:border-[#87ceeb] sm:text-sm`}
                  placeholder="e.g. +123 456 7890"
                />
                {errors.phone_number && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone_number.message}
                  </p>
                )}
              </div>
            </div>

            {/* WhatsApp Number */}
            <div>
              <label
                htmlFor="whatsapp_number"
                className="block text-sm font-medium text-[#333333]"
              >
                WhatsApp Number
                <span className="ml-1 text-xs text-gray-500">
                  (This will be used to connect with{" "}
                  {userType === "learner" ? "tutors" : "learners"})
                </span>
              </label>
              <div className="mt-1">
                <input
                  id="whatsapp_number"
                  type="tel"
                  {...register("whatsapp_number", {
                    required: "WhatsApp number is required",
                  })}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.whatsapp_number
                      ? "border-red-300"
                      : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#87ceeb] focus:border-[#87ceeb] sm:text-sm`}
                  placeholder="e.g. +123 456 7890"
                />
                {errors.whatsapp_number && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.whatsapp_number.message}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-[#333333]"
              >
                Location
              </label>
              <div className="mt-1">
                <input
                  id="location"
                  type="text"
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.location ? "border-red-300" : "border-gray-300"
                  } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#87ceeb] focus:border-[#87ceeb] sm:text-sm`}
                  placeholder="City, Country"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.location.message}
                  </p>
                )}
              </div>
            </div>

            {/* Terms and privacy policy */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="focus:ring-[#87ceeb] h-4 w-4 text-[#0097a7] border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-[#333333]">
                  I agree to the{" "}
                  <a href="#" className={styles.link}>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className={styles.link}>
                    Privacy Policy
                  </a>
                </label>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.terms.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium ${
                  styles.primaryButton
                } ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </div>
          </form>

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

            <div className="mt-6 w-auto sm:w-full">
              <button
                type="button"
                className={`w-full inline-flex justify-center py-2 px-4 border rounded-md shadow-sm bg-white text-sm font-medium ${styles.secondaryButton}`}
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
