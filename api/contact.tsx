export const addContact = async ({ email, name, description }) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ email, name, description }),
  });
  return data.json();
};
