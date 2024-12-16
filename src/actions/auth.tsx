import { SignupFormSchema, FormState } from "@/lib/definitions";
import { createSession } from "@/lib/session";
//import bcrypt from "bcrypt";

export async function signup(state: FormState, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { username, email, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it
  //const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Call API
  const response = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validatedFields.data),
  });

  const user = await response.json();

  // 4. Create user session
  //await createSession(user.id); // revisar aca, creo que da error
}
