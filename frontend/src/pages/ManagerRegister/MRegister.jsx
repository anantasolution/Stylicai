import React, { useState, useEffect } from "react";
import { Plus, UserPlus, Mail, Phone, Lock, ChevronRight } from "lucide-react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { toast } from "react-toastify";
import otpIcon from "../../assets/otp.png";
import { blocked_emails } from "../../components/variables/blockedEmails.js";

export default function ManagerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileno: "",
    credit_balance: 1,
    assignto: "67add6ea08ccee832594ed97",
  });
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [resendTimer]);

  const handleResendOtp = () => {
    setResendTimer(30); // Reset timer
  };

  const handleOtpChange = (e, index) => {
    e.stopPropagation()
    const value = e.target.value.replace(/\D/g, ""); // Allow only digits
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    e.stopPropagation()
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.stopPropagation()
    alert(`Entered OTP: ${otp.join("")}`);
    setIsPopupOpen(false)
    setOtp(['','','',''])
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    mobileno: "",
    credit_balance: 1,
    assignto: "67add6ea08ccee832594ed97",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    mobileno: false,
    credit_balance: 1,
    assignto: false,
  });

  const validateField = (name, value) => {
    if (!value) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (name === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const domain = value.split('@')
      if(blocked_emails.includes(domain[1


      ])){
        return "Invalid Email"
      }
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    if (name === "mobileno" && value.trim()) {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(value.replace(/\D/g, ""))) {
        return "Please enter a valid 10-digit mobile number";
      }
    }

    if (name === "password" && value.trim().length < 6) {
      return "Password must be at least 6 characters long";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTouched = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(newTouched);

    const newErrors = Object.keys(formData).reduce(
      (acc, key) => ({
        ...acc,
        [key]: validateField(key, formData[key]),
      }),
      {}
    );
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      setFormData({
        name: "",
        email: "",
        credit_balance: 1,
        password: "",
        mobileno: "",
        assignto: "67add6ea08ccee832594ed97",
      });
      setTouched({
        name: false,
        email: false,
        credit_balance: 1,
        password: false,
        mobileno: false,
        assignto: "67add6ea08ccee832594ed97",
      });
      setErrors({
        name: "",
        email: "",
        credit_balance: 1,
        password: "",
        mobileno: "",
        assignto: "67add6ea08ccee832594ed97",
      });
    }

    try {
      setLoading(true);
      //For Register new manager
      await axios.post(
        `${import.meta.env.VITE_API_BASE_DASHBOARD_URL}/auth/cmanager-register`,
        formData
      );
      //For send invitation mail
      await axios.post(
        `${import.meta.env.VITE_API_BASE_DASHBOARD_URL}/mail/send-manager-mail`,
        {
          managerMail: formData.email,
          managerName: formData.name,
          password: formData.password,
        }
      );

      toast.success("Manager created successfully.");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Something went wrong.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-28 md:py-32 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6">
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex flex-col gap-2 items-center">
              <img src={otpIcon} alt="otp" className="h-14 w-14" />
              <h2 className="text-center text-lg font-semibold">Enter OTP</h2>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 border border-golden text-center text-xl rounded-md"
                />
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  setIsPopupOpen(false)
                  setResendTimer(30)
                }}
                className="px-4 py-2 text-golden border border-golden rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleOtpSubmit}
                className="px-4 py-2 bg-golden text-white rounded-lg"
              >
                Verify
              </button>
            </div>
            <p className="text-golden/85 pt-4 text-center">
              Resend OTP in{" "}
              <span className="text-blue-400">
                {resendTimer > 0 ? (
                  `${resendTimer} seconds`
                ) : (
                  <a
                    href="#"
                    onClick={handleResendOtp}
                    className="text-blue-500 underline"
                  >
                    Resend OTP
                  </a>
                )}
              </span>
            </p>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-golden rounded-xl p-3">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-golden bg-clip-text text-transparent">
                Create User
              </h1>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-tr-full opacity-50" />

          <form onSubmit={handleSubmit} noValidate className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="relative group">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-4 border rounded-xl transition-all pl-12 ${
                      errors.name && touched.name
                        ? "border-red-300 bg-red-50 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-400 focus:ring-blue-100"
                    } focus:ring-4 focus:outline-none`}
                    placeholder="John Doe"
                  />
                  <UserPlus className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
                {errors.name && touched.name && (
                  <p className="mt-2 text-red-500 text-sm flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-4 border rounded-xl transition-all pl-12 ${
                      errors.email && touched.email
                        ? "border-red-300 bg-red-50 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-400 focus:ring-blue-100"
                    } focus:ring-4 focus:outline-none`}
                    placeholder="john@example.com"
                  />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <button
                    className="absolute right-2 top-[14%] flex justify-center item-center bg-golden p-2 rounded-md text-white"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation();
                      setIsPopupOpen(true);
                      setResendTimer(30)
                    }}
                  >
                    Verify
                  </button>
                </div>
                {errors.email && touched.email && (
                  <p className="mt-2 text-red-500 text-sm flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative group">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-4 border rounded-xl transition-all pl-12 ${
                      errors.password && touched.password
                        ? "border-red-300 bg-red-50 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-400 focus:ring-blue-100"
                    } focus:ring-4 focus:outline-none`}
                    placeholder="••••••••"
                  />
                  <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
                {errors.password && touched.password && (
                  <p className="mt-2 text-red-500 text-sm flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Mobile Field */}
              <div className="relative group">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="mobileno"
                    name="mobileno"
                    value={formData.mobileno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-4 border rounded-xl transition-all pl-12 ${
                      errors.mobileno && touched.mobileno
                        ? "border-red-300 bg-red-50 focus:ring-red-200"
                        : "border-gray-200 focus:border-blue-400 focus:ring-blue-100"
                    } focus:ring-4 focus:outline-none`}
                    placeholder="1234567890"
                  />
                  <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
                {errors.mobileno && touched.mobileno && (
                  <p className="mt-2 text-red-500 text-sm flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1" />
                    {errors.mobileno}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-golden text-white rounded-xl hover:bg-golden focus:ring-4 focus:ring-blue-100 transition-all flex items-center justify-center group"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <span className="animate-spin">
                      <LoaderCircle></LoaderCircle>
                    </span>
                    <span>Loading...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">Register</div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
