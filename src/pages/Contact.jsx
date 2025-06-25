import { Form, useNavigate, useActionData } from "react-router";
import { contactSchema } from "../schema/contactSchema";

export default function Contact() {
    const navigate = useNavigate();
  const errors = useActionData();
console.log("Contact errors:", errors);
if (errors?.success) navigate("/");
  return (
    <main className="bg-[#f4f4f2] py-10 px-4">
      <h1 className="text-[#495464] text-4xl md:text-5xl font-normal uppercase mb-8">
        Get in touch with us
      </h1>

      <div className="flex justify-center">
        <Form
          method="post"
          className="w-full max-w-[1124px] h-[647px] bg-white shadow-md p-6 md:p-12 flex flex-col space-y-4"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name">
              Full Name: <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full Name"
              className="w-full h-10 bg-[#e8e8e8] rounded shadow-inner px-2"
            />
            <p className="text-red-500 text-sm">{errors?.name?.errors[0]}</p>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email">
              Email: <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="w-full h-10 bg-[#e8e8e8] rounded shadow-inner px-2"
            />
            <p className="text-red-500 text-sm">{errors?.email?.errors[0]}</p>
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label htmlFor="subject">
              Subject: <span className="text-red-600">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              autoComplete="off"
              placeholder="Subject"
              className="w-full h-10 bg-[#e8e8e8] rounded shadow-inner px-2"
            />
            <p className="text-red-500 text-sm">{errors?.subject?.errors[0]}</p>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message">
              Message: <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              placeholder="Message"
              className="w-full h-[150px] bg-[#e8e8e8] rounded shadow-inner p-2"
            />
            <p className="text-red-500 text-sm">{errors?.message?.errors[0]}</p>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-32 h-12 bg-[#ff6900] text-white font-semibold rounded-xs shadow-[1px_2px_4px_0px_rgba(0,0,0,0.25)] hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>

      {/* Footer tekst */}
      <h2 className="text-center text-[#495464] text-lg mt-10">
        <span className="text-black">Visit our sister companies </span>
        <span className="text-[#ff6900]">Home Sound</span>
        <span className="text-black"> and </span>
        <span className="text-[#ff6900]">The Movie Rooms</span>
        <span className="text-black"> – part of the HiFi Horizon Group.</span>
      </h2>
    </main>
  );
}