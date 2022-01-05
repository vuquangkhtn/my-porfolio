export const addContact = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({})
  })
    .then(r => r.json());
  return data;
};
