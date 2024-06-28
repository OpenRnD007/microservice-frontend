import React from "react"
import List from "./List"
import Header from "./Header"

/**
* The Search component serves as a container for the search functionality.
* It renders the Header and List components to provide a complete search interface.
*
* @returns {JSX.Element} A div element containing the Header and List components.
*/
const Search = (): JSX.Element => {
    return (
        <div className="">
            <Header />
            <List />
        </div >
    )
}
export default Search