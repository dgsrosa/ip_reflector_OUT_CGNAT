export default {
  async fetch(request) {
    return new Response(request.headers.get("x-forwarded-for"), {
      headers: { "content-type": "text/plain" },
    });
  },
};
