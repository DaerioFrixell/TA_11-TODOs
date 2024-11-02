import { Button } from "../../../shared/ui/components/button"

export const Navigation = () => {
  return (
    <div>
      <Button
        className=""
        text="добавить"
        iconPossition="left"
      />

      <div>пополните список</div>

      <Button
        className=""
        text="удалить"
        iconPossition="right"
      />
    </div >
  )
}