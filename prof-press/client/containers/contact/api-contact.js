export async function contact(userInfo) {
  try {
    let response = await fetch("/api/contact/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    return await response.json();
  } catch (err) {
    console.log("ERROR:", err);
  }
}
