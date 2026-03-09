/**
 * POST /api/subscribe
 * Proxies newsletter signups to Brevo (brevo.com — free up to 300 emails/day).
 *
 * Required env vars in Vercel dashboard:
 *   BREVO_API_KEY   — your Brevo API key  (Account → API Keys)
 *   BREVO_LIST_ID   — numeric ID of the contact list (Contacts → Lists)
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, lang } = req.body ?? {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    console.error("Missing BREVO_API_KEY or BREVO_LIST_ID env vars");
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,          // update if contact already exists
        attributes: {
          LANG: lang ?? "es",
          SOURCE: "website-newsletter",
        },
      }),
    });

    // 201 = created, 204 = updated (already existed)
    if (response.status === 201 || response.status === 204) {
      return res.status(200).json({ ok: true });
    }

    const data = await response.json();
    // Brevo error code 16 = contact already in the list — treat as success
    if (data.code === "duplicate_parameter") {
      return res.status(200).json({ ok: true });
    }

    console.error("Brevo error:", data);
    return res.status(500).json({ error: "Could not subscribe" });
  } catch (err) {
    console.error("Subscribe handler error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
