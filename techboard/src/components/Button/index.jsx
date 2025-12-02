import "./button.style.css"

export function Button({children, ...props}) {
  return (
    <button {...props} className="button">
      {children}
    </button>
  )
}