let BASE_URL = "http://13.51.72.239:4000/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://13.51.72.239:4000/";
}

export { BASE_URL };
