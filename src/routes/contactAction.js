import { redirect } from "react-router";
import { contactSchema } from "../schema/contactSchema";

export async function contactAction({ request }) {
  const formData = await request.formData();

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    let result = contactSchema.parse(data);
    console.log("Validation result:", result);

    fetch("https://hifi-api-uytm.onrender.com/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    })

    return { success: true };

  } catch (err) {
    const formattedErrors = {};
    err.errors.forEach((error) => {
      formattedErrors[error.path[0]] = {
        message: error.message,
        errors: [error.message], // så visning virker
      };
    });
    return formattedErrors;
  }

}
  