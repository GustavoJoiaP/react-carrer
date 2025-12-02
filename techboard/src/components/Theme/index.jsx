import "./theme-section.style.css"

export function ThemeSection({theme}) {
  return (
    <h3 className="title-theme-section">{theme.name}</h3>
  )
}