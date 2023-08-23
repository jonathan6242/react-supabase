  import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://juerhbempyngvwrniqns.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1ZXJoYmVtcHluZ3Z3cm5pcW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNjE2ODQsImV4cCI6MjAwNzczNzY4NH0.vNllxBdRIwHBaEa6kQg7fnmYDr4rzOkeDvCBgvJb8aE");

  function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select();
      setCountries(data);
    }

    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    );
  }

  export default App;