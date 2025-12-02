import { FormFieldset } from "../FormFieldset";
import { FormTextInput } from "../FormTextInput";
import { FormTitle } from "../FormTitle";
import { FormLabel } from "../FormLabel";
import './event-form.style.css'
import { Button } from "../Button";
import { DropDownList } from "../DropDownList";

export function EventForm(){
  return (
    <form className="event-form">
      <FormTitle >
        Preencha para criar um evento:
      </FormTitle>
      <div className="fieldsets">
        <FormFieldset>
          <FormLabel htmlFor='name'>
            Qual o nome do evento?
          </FormLabel>
          <FormTextInput type="text" id='name' placeholder="Nome do evento" />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='dataEvento'>
            Data do evento
          </FormLabel>
          <FormTextInput type="date" id='dataEvento' />
        </FormFieldset>
        <FormFieldset>
          <FormLabel >
            Data do evento
          </FormLabel>
          <DropDownList  />
        </FormFieldset>
      </div>
      <div className="actions">
        <Button type="submit">
          Criar evento
        </Button>
      </div>
    </form>
  )
}