import { Button } from "../../../shared/ui/components/button";

import './navigation.scss';

export const Navigation = () => {
  return (
    <div className="navigation">
      <Button
        className="button-standard"
        text="добавить"
        iconPossition="left"
      />

      <div>пополните список</div>

      <Button
        className="button-danger"
        text="удалить"
        iconPossition="right"
      />
    </div >
  )
}