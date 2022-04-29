import { useParams } from "react-router-dom"

export const ShipmentDetails = () => {
  const params = useParams()
  
  return(
    <div className="details">
      <div className="details-title">
        Shipment ID {params.id}
      </div>
    </div>
  )
}