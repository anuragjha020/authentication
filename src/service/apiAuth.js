import supabase from "./supabase";

//Create new user
export async function signup({ userName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

//Login user
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Supabase Login Error:", error.message);
    throw new Error(error.message);
  }

  return data;
}

//Update user
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

//Forget password
export async function forgetPassword({ email }) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw new Error(error.message);
  return data;
}
