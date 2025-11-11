export const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || // Allow override for ngrok/tunnels
  (process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : process.env.NETLIFY
    ? // Netlify deployment
      (process.env.CONTEXT === "production"
        ? process.env.URL
        : process.env.DEPLOY_URL)
    : // Vercel deployment
      "https://" +
      (process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        : process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL));
