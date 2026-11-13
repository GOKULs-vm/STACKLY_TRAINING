import { useState } from 'react'

const Form = () => {
  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
  };

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation logic for all 10 fields
  const validateForm = (data) => {
    const newErrors = {};

    // 1. First Name
    if (!data.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    } else if (data.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters.';
    }

    // 2. Last Name
    if (!data.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }

    // 3. Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // 4. Mobile Number (10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!data.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!mobileRegex.test(data.mobile.trim())) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits.';
    }

    // 5. Password (min 8 chars, at least 1 letter and 1 number)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!data.password) {
      newErrors.password = 'Password is required.';
    } else if (!passwordRegex.test(data.password)) {
      newErrors.password =
        'Password must be at least 8 characters and include a letter and a number.';
    }

    // 6. Confirm Password
    if (!data.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    // 7. Date of Birth (must be in the past & at least 13 years old)
    if (!data.dob) {
      newErrors.dob = 'Date of birth is required.';
    } else {
      const selectedDate = new Date(`${data.dob}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const minAgeDate = new Date(today);
      minAgeDate.setFullYear(today.getFullYear() - 13);
      if (Number.isNaN(selectedDate.getTime())) {
        newErrors.dob = 'Please enter a valid date of birth.';
      } else if (selectedDate > today) {
        newErrors.dob = 'Date of birth cannot be in the future.';
      } else if (selectedDate > minAgeDate) {
        newErrors.dob = 'You must be at least 13 years old to register.';
      }
    }

    // 8. Gender
    if (!data.gender) {
      newErrors.gender = 'Please select a gender.';
    }

    // 9. Address
    if (!data.address.trim()) {
      newErrors.address = 'Street address is required.';
    } else if (data.address.trim().length < 5) {
      newErrors.address = 'Please enter a complete address.';
    }

    // 10. City
    if (!data.city.trim()) {
      newErrors.city = 'City is required.';
    }

    return newErrors;
  };

  // Handle input changes and clear field-specific errors on type
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    // All conditions satisfied
    setErrors({});
    setIsSubmitted(true);

  };

  // Reset form to initial state
  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setIsSubmitted(false);
  };

  // Helper for consistent Tailwind input styling
  const getInputClasses = (fieldName) =>
    `w-full rounded-lg border px-3.5 py-2 text-sm text-slate-900 shadow-xs transition focus:outline-none focus:ring-2 ${errors[fieldName]
      ? 'border-red-500 bg-red-50/30 focus:border-red-500 focus:ring-red-200'
      : 'border-slate-300 bg-white focus:border-indigo-600 focus:ring-indigo-200'
    }`;

  return (
    <div className='max-w-5xl mx-auto mt-10 mb-10 px-8 py-8 rounded-xl shadow-xl'>
      <div className=" bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <div className="mb-6 border-b border-slate-200 pb-4">
            <h1 className="text-2xl font-bold text-slate-900">Create an Account</h1>
            <p className="mt-1 text-sm text-slate-500">
              Fill in all required details below to complete your registration.
            </p>
          </div>

          {/* Success Banner */}
          {isSubmitted && (
            <div
              role="alert"
              className="mb-6 flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
            >
              <div>
                <span className="font-semibold">Form validated!</span> Your
                account details passed validation.
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="ml-4 font-medium text-emerald-700 underline hover:text-emerald-900"
              >
                Register another
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  aria-invalid={!!errors.firstName}
                  className={getInputClasses('firstName')}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  aria-invalid={!!errors.lastName}
                  className={getInputClasses('lastName')}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Row 2: Email & Mobile Number */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane.doe@example.com"
                  aria-invalid={!!errors.email}
                  className={getInputClasses('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  maxLength={10}
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="9876543210"
                  aria-invalid={!!errors.mobile}
                  className={getInputClasses('mobile')}
                />
                {errors.mobile && (
                  <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Row 3: Password & Confirm Password */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  aria-invalid={!!errors.password}
                  className={getInputClasses('password')}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-600">{errors.password}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  aria-invalid={!!errors.confirmPassword}
                  className={getInputClasses('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Row 4: Date of Birth & Gender */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="dob"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  aria-invalid={!!errors.dob}
                  className={getInputClasses('dob')}
                />
                {errors.dob && (
                  <p className="mt-1 text-xs text-red-600">{errors.dob}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  aria-invalid={!!errors.gender}
                  className={getInputClasses('gender')}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                {errors.gender && (
                  <p className="mt-1 text-xs text-red-600">{errors.gender}</p>
                )}
              </div>
            </div>

            {/* Row 5: Address */}
            <div>
              <label
                htmlFor="address"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                rows={2}
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street, Apt 4B"
                aria-invalid={!!errors.address}
                className={getInputClasses('address')}
              />
              {errors.address && (
                <p className="mt-1 text-xs text-red-600">{errors.address}</p>
              )}
            </div>

            {/* Row 6: City */}
            <div>
              <label
                htmlFor="city"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="Chennai"
                aria-invalid={!!errors.city}
                className={getInputClasses('city')}
              />
              {errors.city && (
                <p className="mt-1 text-xs text-red-600">{errors.city}</p>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Reset
              </button>
              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
