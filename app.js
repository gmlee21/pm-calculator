var supabase = require('@supabase/supabase-js')
var db = supabase.createClient("https://lmdlehleccqnvvktqguh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtZGxlaGxlY2NxbnZ2a3RxZ3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3OTM4ODUsImV4cCI6MjAxNjM2OTg4NX0.7ZB-DQvTNzaGGrZS9dPFSLOlhWe9mEPOn5V9ILEYlXc");

async function fetchData() {
  try {
    const { data, error } = await db
      .from('rtCOTS')
      .select();

    if (error) {
      console.error('Error fetching data:', error.message);
      return;
    }

    // Log the data to the console
    console.log('Fetched data:', data);

    // Add logic here to display the data in your application (e.g., update the UI)

  } catch (error) {
    console.error('An unexpected error occurred:', error.message);
  }
}

// // Call the fetchData function
  fetchData();