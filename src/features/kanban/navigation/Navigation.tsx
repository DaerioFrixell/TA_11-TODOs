import { Button } from "../../../shared/ui/components/button";
import { Input } from "../../../shared/ui/components/input";
import { Modal } from "../../../shared/ui/components/modal";
import { useModal } from "../../../shared/hooks/useModal";

import './navigation.scss';

export const Navigation = () => {
  const { hideModal, isVisible, showModal } = useModal()

  const onClose = () => {
    hideModal()
  }

  const onOpen = () => {
    showModal()
  }

  return (
    <div className="navigation">
      <Button
        className="button-standard"
        text="добавить"
        iconPossition="left"
        onClick={() => onOpen()}
      />

      <div>пополните список</div>

      <Button
        className="button-danger"
        text="удалить"
        iconPossition="right"
        onClick={() => { }}
      />

      <Modal isVisible={isVisible} >
        <h2 className="modal-title">Добавление нового дела</h2>

        <Input
          placeholder="введите текст"
          value={''}
          onChange={() => { }} />

        <div className='modal-navigation'>
          <Button
            className="button-danger"
            onClick={() => { }}
            text="добавить" />

          <Button
            className='button-standard'
            text='закрыть'
            onClick={() => onClose()} />
        </div>
      </Modal>
    </div >
  )
}