
export default function Layout({ children, page }) {
  return (
    <main className={ !! page ? `page-${page}` : '' }>
      { children }
    </main>
  )
}
