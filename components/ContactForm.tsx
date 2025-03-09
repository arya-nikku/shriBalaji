"use client"

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        firstName: false,
        contact: false, // Either phone or email must be filled
        message: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        let newErrors = {
            firstName: !formData.firstName.trim(),
            contact: !(formData.phone.trim() || formData.email.trim()), // At least one required
            message: !formData.message.trim(),
        };

        setErrors(newErrors);

        if (!newErrors.firstName && !newErrors.contact && !newErrors.message) {
            alert("Form submitted successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            });
        }
    };

    return (
        <div className="bg-yellow-400 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white text-sm font-semibold">First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="p-3 rounded-md w-full border border-gray-300"
                            placeholder="First Name"
                        />
                        {errors.firstName && <p className="text-red-600 text-sm mt-1">First Name is required</p>}
                    </div>
                    <div>
                        <label className="block text-white text-sm font-semibold">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="p-3 rounded-md w-full border border-gray-300"
                            placeholder="Last Name"
                        />
                    </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white text-sm font-semibold">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="p-3 rounded-md w-full border border-gray-300"
                            placeholder="Phone"
                        />
                    </div>
                    <div>
                        <label className="block text-white text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 rounded-md w-full border border-gray-300"
                            placeholder="Email"
                        />
                    </div>
                </div>
                {errors.contact && <p className="text-red-600 text-sm mt-1">Either Phone or Email is required</p>}

                {/* Subject */}
                <div>
                    <label className="block text-white text-sm font-semibold">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="p-3 rounded-md w-full border border-gray-300"
                        placeholder="Subject"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-white text-sm font-semibold">Message *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="p-3 rounded-md w-full border border-gray-300"
                        placeholder="Message"
                    ></textarea>
                    {errors.message && <p className="text-red-600 text-sm mt-1">Message is required</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-white text-yellow-500 px-6 py-3 rounded-full font-semibold w-full hover:bg-gray-100 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}




// export default function ContactForm() {
//     return (
//         <div className="bg-yellow-400 p-8 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
//             <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                     <input type="text" placeholder="First Name" className="p-3 rounded-md w-full" />
//                     <input type="text" placeholder="Last Name" className="p-3 rounded-md w-full" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                     <input type="text" placeholder="Phone" className="p-3 rounded-md w-full" />
//                     <input type="email" placeholder="Email" className="p-3 rounded-md w-full" />
//                 </div>
//                 <input type="text" placeholder="Subject" className="p-3 rounded-md w-full" />
//                 <textarea placeholder="Message" rows={4} className="p-3 rounded-md w-full"></textarea>
//                 <button className="bg-white text-yellow-500 px-6 py-3 rounded-full font-semibold w-full hover:bg-gray-100 transition">
//                     Send Message
//                 </button>
//             </form>
//         </div>
//     );
// }
