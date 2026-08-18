# Contact forms

Implemented in `src/components/ContactForms.tsx`, configured in `src/lib/contactForms.ts`, and
rendered on `/contact`. Two tabs, two separate n8n production webhooks.

## Stack

- `react-hook-form` for state, `zod` for schema validation via `@hookform/resolvers`.
- Submission is `POST` with `multipart/form-data` to the n8n endpoint.
- Field names are mapped positionally to match the n8n workflow's expected form fields — if you
  rename a field in the UI, update the mapping, not just the label.

## Form 1 — Basic query

Short intake for general enquiries: name, email, subject/topic, message. Intended for people who
just want to reach out.

## Form 2 — Advanced query

Qualification intake for project enquiries: contact details plus scope, current process, tools
in use, timeline, and budget context. Feeds richer data into the n8n lead pipeline.

## Submission UX

On success the form is replaced by a success card that is:

- given `role`/`aria-live` attributes so screen readers announce it,
- programmatically focused,
- smoothly scrolled into the center of the viewport.

This was added because the confirmation could otherwise render off-screen. Errors surface
inline per field, and the submit button is disabled while a request is in flight.

## Changing endpoints

Edit the URLs in `src/lib/contactForms.ts`. They are public webhook URLs, not secrets — the
posts are made directly from the browser. Do not put credentials in this file.

## Operational notes

- The n8n workflows own delivery, storage, and notification. This repository stores nothing.
- If submissions stop arriving, check the n8n workflow status first, then the browser network
  tab for the response status of the webhook POST.
- The tab list wraps on narrow screens to avoid overflow at 320px.
