"use server"

export async function sendEmail(formData: FormData) {
  console.log("running on the server");
  console.log(formData.get("email"));
  console.log(formData.get("message"));
}