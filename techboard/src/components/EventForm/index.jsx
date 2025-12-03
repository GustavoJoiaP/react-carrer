import { FormFieldset } from "../FormFieldset";
import { FormTextInput } from "../FormTextInput";
import { FormTitle } from "../FormTitle";
import { FormLabel } from "../FormLabel";
import './event-form.style.css'
import { Button } from "../Button";
import { DropDownList } from "../DropDownList";

export function EventForm({themes, toSubmit}) {
  function SubmitFormEvent(formData){
    
    const event = {
      name: formData.get('name'),
      description: formData.get('description'),
      cover: formData.get('cover'),
      date: new Date(formData.get('dataEvento')),
      theme: themes.find(function (item){
        return item.themeId == formData.get('theme')
      })
    }
    toSubmit(event);
  }

  return (
    <form className="event-form" action={SubmitFormEvent}>
      <FormTitle >
        Preencha para criar um evento:
      </FormTitle>
      <div className="fieldsets">
        <FormFieldset>
          <FormLabel htmlFor='name'>
            Qual o nome do evento?
          </FormLabel>
          <FormTextInput type="text" id='name' name='name' placeholder="Nome do evento" />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='description'>
            Qual a descrição do evento?
          </FormLabel>
          <FormTextInput type="text" id='description' name='description' placeholder="Descripção do evento" />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='cover'>
            Qual o nome do evento?
          </FormLabel>
          <FormTextInput type="text" id='cover' name='cover' placeholder="https://...." />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='dataEvento'>
            Data do evento
          </FormLabel>
          <FormTextInput type="date" id='dataEvento' name='dataEvento'/>
        </FormFieldset>
        <FormFieldset>
          <FormLabel >
            Tema do evento
          </FormLabel>
          <DropDownList id="theme" itens={themes} />
        </FormFieldset>
      </div>
      <div className="actions">
        <Button >
          Criar evento
        </Button>
      </div>
    </form>
  )
}