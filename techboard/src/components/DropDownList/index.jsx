import "./drop-down-list.style.css"

export function DropDownList({itens}) {
  return (
    <select className="drop-down-list" defaultValue="">
      <option value="" disabled> Selecione uma opção</option>
      {itens.map(item => (
        <option key={item.themeId} value={item.name}>{item.name}</option>
      ))}
    </select>
  )
}