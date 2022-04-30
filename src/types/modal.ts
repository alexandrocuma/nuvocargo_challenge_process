import { Dispatch, SetStateAction } from "react"

export type ModalProps = {
  open: boolean
  onSubmit: (values: any, actions: any) => void
  setOpen: Dispatch<SetStateAction<boolean>>
}
