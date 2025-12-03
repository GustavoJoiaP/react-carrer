import "./drop-down-list.style.css"

export function DropDownList({itens}) {
  return (
    <select className="drop-down-list" name="theme" defaultValue="">
      <option value="" disabled> Selecione uma opção</option>
      {itens.map(item => (
        <option key={item.themeId} value={item.themeId}>{item.name}</option>
      ))}
    </select>
  )
}