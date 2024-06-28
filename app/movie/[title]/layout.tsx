/**
* The MovieLayout component serves as a layout wrapper for pages or nested layouts.
* It takes a single child element and wraps it within a section tag.
*
* @param {{ children: React.ReactNode }} - The props object containing 'children', which is the content to be rendered within the layout.
* @returns {JSX.Element} A section element wrapping the children content.
*/
export default function MovieLayout({
  children, // This will be a page or nested layout that is passed as a child to the MovieLayout.
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <section>
      {children}
    </section>
  )
}