import './form-title.style.css'

export function FormTitle({children}){
  return (
    <h2 className='form-title'>
        {children}
    </h2>
  )
}