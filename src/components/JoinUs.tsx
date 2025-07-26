import React, { useState } from 'react';
import { Send, User, Mail, GraduationCap, Code } from 'lucide-react';

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Form Data:', formData);
    alert("Thank you for applying to DroneX! We'll get back to you soon.");
  };

  return (
    <section id="join" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Join <span className="text-blue-600">DroneX</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fill out the form to become part of the most innovative drone club at Shivalik College!
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Personal Info */}
            <SectionHeader icon={<User className="w-5 h-5 mr-2" />} title="Personal Details" />
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="First Name *" name="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="e.g. John" />
              <InputField label="Last Name *" name="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="e.g. Doe" />
              <InputField label="Email *" type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="e.g. john@example.com" />
              <SelectField
                label="Academic Year *"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
                options={['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate']}
              />
            </div>

            {/* Academic Info */}
            <SectionHeader icon={<GraduationCap className="w-5 h-5 mr-2" />} title="Academic Information" />
            <InputField
              label="Major / Field of Study *"
              name="major"
              value={formData.major}
              onChange={handleInputChange}
              required
              placeholder="e.g. B.Tech CSE"
            />

            {/* Experience & Interests */}
            <SectionHeader icon={<Code className="w-5 h-5 mr-2" />} title="Experience & Interests" />
            <div className="space-y-6">
              <TextareaField
                label="Previous Experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Mention any relevant experience (optional)"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
              <TextareaField
                label="Why do you want to join DroneX? *"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                placeholder="Share your motivation and how you'd like to contribute..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Submit Application</span>
              </button>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                You’ll receive a confirmation within 7 working days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// --- Utility Components ---

const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <h3 className="text-xl font-semibold flex items-center text-gray-800 dark:text-white mb-4">
    {icon} {title}
  </h3>
);

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder = '',
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">Select</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt.toLowerCase()}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder = '',
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      rows={4}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

export default JoinUs;
