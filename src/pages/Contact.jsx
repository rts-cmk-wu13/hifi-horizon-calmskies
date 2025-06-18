import { Form, useActionData } from "react-router";

export default function Contact() {
  const errors = useActionData();

  return (
    <>
      <main className="bg-[#f4f4f2]">
        <h1 className=" justify-start text-[#495464] text-5xl font-normal  uppercase p-17 ">
          Get in touch with serafine
        </h1>
        <div className="flex justify-center items-center">
          <Form
            method="post"
            className="w-[1124px] h-[642px] bg-white shadow-[2px_4px_10px_0px_rgba(0,0,0,0.25)] p-12 mx-10 flex flex-col space-y-4"
          >
            <div className="flex flex-col">
              <label htmlFor="name">
                Full Name: <span style={{ color: "#ff0000" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-[747px] h-[38px] bg-[#e8e8e8] rounded-xs shadow-[1px_2px_4px_0px_rgba(0,0,0,0.25)]"
              />
              <p>{errors && errors?.name?.errors[0]}</p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">
                Email: <span style={{ color: "#ff0000" }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-[747px] h-[38px] bg-[#e8e8e8] rounded-xs shadow-[1px_2px_4px_0px_rgba(0,0,0,0.25)]"
              />
              <p>{errors && errors?.email?.errors[0]}</p>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject">
                Subject: <span style={{ color: "#ff0000" }}>*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-[747px] h-[38px] bg-[#e8e8e8] rounded-xs shadow-[1px_2px_4px_0px_rgba(0,0,0,0.25)]"
              />
              <p>{errors && errors?.subject?.errors[0]}</p>
            </div>

            <div>
              <label htmlFor="message">
                Message: <span style={{ color: "#ff0000" }}>*</span>
              </label>
              <textarea
                name="message"
                placeholder="Message"
                className="w-[1024px] h-[150px] bg-[#e8e8e8] rounded-xs"
              ></textarea>
              <p>{errors && errors?.message?.errors[0]}</p>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="justify-end w-[135px] h-[45px] bg-[#ff6900] rounded-xs shadow-[1px_2px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
        <h2 className="justify-center p-13 text-center text-[#495464] font-normal">
          <span className="text-black text-2xl font-normal">
            Visit our sister companies{" "}
          </span>
          <span className="text-[#ff6900] text-2xl font-normal">
            Home Sound
          </span>
          <span className="text-black text-2xl font-normal"> and </span>
          <span className="text-[#ff6900] text-2xl font-normal">
            The Movie Rooms
          </span>
          <span className="text-black text-2xl font-normal">
            {" "}
            part of the HiFi Horizon Group.{" "}
          </span>
        </h2>
      </main>
    </>
  );
}
