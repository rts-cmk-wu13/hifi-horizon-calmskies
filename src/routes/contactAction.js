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
    contactSchema.parse(data);
    // Her kan man sende e-mail eller gemme besked
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
  