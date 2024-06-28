"use client"
import { Search } from "@/app/features";

/**
* The Home component serves as the main page of the application.
* It renders the Search component, which provides the search functionality.
*
* @returns {JSX.Element} The Search component wrapped in a React Fragment.
*/
export default function Home(): JSX.Element {
  return (
    <Search />
  );
}
