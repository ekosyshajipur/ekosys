import { useParams, Navigate } from "react-router-dom";
import CityLandingPage from "../components/CityLandingPage";
import { cities } from "../data/cityData";

export default function CityPage() {
  const { citySlug } = useParams();
  
  // Find the city data based on the slug
  const cityData = cities.find(c => c.slug === citySlug);
  
  // If city not found, redirect to home or a 404 page
  if (!cityData) {
    return <Navigate to="/" replace />;
  }

  return <CityLandingPage cityData={cityData} />;
}
