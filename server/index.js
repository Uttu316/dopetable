import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Add custom middleware for CORS
server.use(middlewares);

// Add delay to simulate real API
server.use((_, __, next) => {
  setTimeout(next, 500);
});

server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
