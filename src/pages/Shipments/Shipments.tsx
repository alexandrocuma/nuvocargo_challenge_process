import { useEffect, useState } from "react"
import { Item, Modal } from "components"
import { ItemProps } from "types"

export const Shipments = () => {
  const [openModal, setOpenModal] = useState(false)
  const [shipments, setShipments] = useState<ItemProps[]>([])

  const onSubmit = (values: ItemProps) => {
    setShipments(prevState => [values, ...prevState])
    localStorage.setItem('nuvocargo_shipments', JSON.stringify([values, ...shipments]))
  }

  useEffect(() => {
    const items = localStorage.getItem('nuvocargo_shipments')
    if(items) {
      setShipments(JSON.parse(items))
    }
  }, [])

  return(
    <div className="shipments">
      <div className="shipments__toolbar">
        <div className="shipments__toolbar-title">
          <span className="shipments__toolbar-title-selected">Delivery</span>
          <span className="shipments__toolbar-title-unselected">History</span> 
        </div>
        <div className="shipments__toolbar-actions">
          <input className="shipments__toolbar-actions-input" placeholder="Search" type="text" />
          <button className="shipments__toolbar-actions-button" onClick={()=> setOpenModal(true)}>New Delivery</button>
        </div>
      </div>
      <Modal onSubmit={onSubmit} open={openModal} setOpen={setOpenModal} />
      <div className="shipments__content">
        {shipments.map((shipment, index) => <Item key={`ship_${index}_${shipment.order_id}`} {...shipment} />)}
      </div> 
    </div>
  )
}