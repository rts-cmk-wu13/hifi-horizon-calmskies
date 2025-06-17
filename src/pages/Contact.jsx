import { Form, useActionData } from "react-router";

export default function Contact() {
  const errors = useActionData();

  return (
    <>
      <h1 className=" justify-start text-[#495464] text-5xl font-normal  uppercase p-8">
        Get in touch with us
      </h1>
      <Form
        method="post"
        className="w-[1124px] h-[642px] bg-white shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] p-10 mx-10 flex flex-col space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-[747px] h-[38px] bg-[#e8e8e8] rounded-xs shadow-[1px_2px_4px_0px_rgba(0,0,0,0.25)]"
          />
          <p>{errors && errors?.name?.errors[0]}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[747px] h-[38px] bg-[#e8e8e8] rounded-xs shadow-[1px_2px_4px_0px_rgba(0,0,0,0.25)]"
          />
          <p>{errors && errors?.email?.errors[0]}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-[747px] h-[38px] bg-[#e8e8e8] rounded-xs shadow-[1px_2px_4px_0px_rgba(0,0,0,0.25)]"
          />
          <p>{errors && errors?.subject?.errors[0]}</p>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Message"
            className="w-[1029px] h-[150px] bg-[#e8e8e8] rounded-xs"
          ></textarea>
          <p>{errors && errors?.message?.errors[0]}</p>
        </div>
        <button type="submit">Submit</button>
      </Form>
      <h2 className="justify-start p-10">
        <span className="text-black text-2xl font-normal">
          Visit our sister companies{" "}
        </span>
        <span className="text-[#ff6900] text-2xl font-normal">Home Sound</span>
        <span className="text-black text-2xl font-normal"> and </span>
        <span className="text-[#ff6900] text-2xl font-normal">
          The Movie Rooms
        </span>
        <span className="text-black text-2xl font-normal">
          {" "}
          part of the HiFi Horizon Group.{" "}
        </span>
      </h2>
    </>
  );
}
