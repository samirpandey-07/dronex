import React, { useState, useRef } from 'react';
import { Send, User, Mail, GraduationCap, Code, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  major: string;
  year: string;
  experience: string;
  interests: string[];
  reason: string;
}

interface FormErrors {
  [key: string]: string;
}

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    major: '',
    year: '',
    experience: '',
    interests: [],
    reason: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Add ref to control scrolling
  const formSectionRef = useRef<HTMLDivElement>(null);

  const interestOptions = [
    'Drone Racing',
    'Autonomous Systems',
    'AI/Machine Learning',
    'Hardware Development',
    'Photography/Videography',
    'Competitions',
    'Research Projects',
    'Teaching/Mentoring',
  ];

  const yearOptions = ['1st', '2nd', '3rd', '4th'];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.major.trim()) newErrors.major = 'Major is required';
    if (!formData.year) newErrors.year = 'Academic year is required';
    if (!formData.reason.trim()) newErrors.reason = 'Please tell us why you want to join';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Save to Firebase Firestore
      await addDoc(collection(db, "applications"), {
        ...formData,
        createdAt: Timestamp.now(),
        status: 'pending'
      });

      console.log('✅ Application submitted to Firebase!');
      setIsSubmitted(true);
      
      // Scroll to top of the section after successful submission
      if (formSectionRef.current) {
        formSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    } catch (error) {
      console.error('❌ Error submitting application:', error);
      setErrors({ submit: 'Failed to submit application. Please try again.' });
      
      // Scroll back to form on error
      if (formSectionRef.current) {
        formSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="join" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Application Submitted Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for applying to DroneX! We've received your application and will review it carefully.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>What's next?</strong> We'll contact you within 7 working days for the next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="join" 
      ref={formSectionRef} // Added ref here
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Join <span className="text-blue-600">DroneX</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to take flight with the most innovative drone club at Shivalik College? 
            Fill out the form below and let's build the future together!
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Personal Info */}
            <SectionHeader 
              icon={<User className="w-5 h-5 mr-2" />} 
              title="Personal Details" 
              description="Tell us a bit about yourself"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <InputField 
                label="First Name *" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleInputChange} 
                error={errors.firstName}
                required 
                placeholder="e.g. John" 
              />
              <InputField 
                label="Last Name *" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleInputChange} 
                error={errors.lastName}
                required 
                placeholder="e.g. Doe" 
              />
              <InputField 
                label="Email *" 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                error={errors.email}
                required 
                placeholder="e.g. john@example.com" 
              />
              <SelectField
                label="Academic Year *"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                error={errors.year}
                required
                options={yearOptions}
              />
            </div>

            {/* Academic Info */}
            <SectionHeader 
              icon={<GraduationCap className="w-5 h-5 mr-2" />} 
              title="Academic Information" 
              description="Your educational background"
            />
            <InputField
              label="Major / Field of Study *"
              name="major"
              value={formData.major}
              onChange={handleInputChange}
              error={errors.major}
              required
              placeholder="e.g. B.Tech CSE"
            />

            {/* Experience & Interests */}
            <SectionHeader 
              icon={<Code className="w-5 h-5 mr-2" />} 
              title="Experience & Interests" 
              description="What excites you about drones?"
            />
            <div className="space-y-6">
              <TextareaField
                label="Previous Experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Mention any relevant experience with drones, programming, electronics, or related fields (optional)"
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${
                        formData.interests.includes(interest)
                          ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800'
                          : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                        formData.interests.includes(interest)
                          ? 'bg-blue-600 border-blue-600'
                          : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-500'
                      }`}>
                        {formData.interests.includes(interest) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{interest}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <TextareaField
                label="Why do you want to join DroneX? *"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                error={errors.reason}
                required
                placeholder="Share your motivation, what you hope to achieve, and how you'd like to contribute to our community..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              {errors.submit && (
                <div className="flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 mb-4">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">{errors.submit}</span>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
              
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                By submitting, you agree to our privacy policy. We'll contact you within 7 working days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Utility Components (unchanged)
const SectionHeader = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string;
  description?: string;
}) => (
  <div className="border-l-4 border-blue-500 pl-4">
    <h3 className="text-xl font-semibold flex items-center text-gray-800 dark:text-white mb-2">
      {icon} {title}
    </h3>
    {description && (
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    )}
  </div>
);

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder = '',
  error = '',
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
        error 
          ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
          : 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
    />
    {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
      <AlertCircle className="w-4 h-4" />
      <span>{error}</span>
    </p>}
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error = '',
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
        error 
          ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
          : 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
    >
      <option value="">Select your year</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
      <AlertCircle className="w-4 h-4" />
      <span>{error}</span>
    </p>}
  </div>
);

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder = '',
  error = '',
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      rows={4}
      className={`w-full px-4 py-3 rounded-xl border transition-colors ${
        error 
          ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
          : 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none`}
    />
    {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
      <AlertCircle className="w-4 h-4" />
      <span>{error}</span>
    </p>}
  </div>
);

export default JoinUs;