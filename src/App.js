import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import { Movie } from "./Movie";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/movies-search-react-app" element={<Movie />} />
            <Route
              path="*"
              element={
                <div className="empty">
                  <h2>Page Not Found</h2>
                </div>
              }
            />
          </Routes>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
