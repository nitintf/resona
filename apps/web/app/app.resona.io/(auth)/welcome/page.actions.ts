'use server';

export const submitWelcomeForm = async (formData: FormData) => {
  const email = formData.get('email') as string;

  console.log(email);
};
