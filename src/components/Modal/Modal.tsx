import { Formik } from "formik";
import { ModalProps } from "types";
import CloseIcon from "assets/images/close_icon.png"
import { deliveryInitialValues } from "../../constants";

export const Modal = ({ open, setOpen, onSubmit }: ModalProps) => {
  return(
    <div className={open? "modal" : "modal-close"}>
      <div className="modal__container">
        <button className="modal__container-close" onClick={() => setOpen(false)}>
          <img src={CloseIcon} alt="close_icon" />
        </button>
        <div className="modal__container-text">
          <span className="modal__container-text-title">New delivery</span>
          <span className="modal__container-text-subtitle">Please select the order ID and a technician to deploy the cargo. All elements are mandatory.</span>
        </div>
        <Formik
          initialValues={deliveryInitialValues}
          onSubmit={onSubmit}
        >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="modal__container-form">
              <div className="modal__container-form-textfield">
                <span className="modal__container-form-textfield-text">Order ID</span>
                <input id="order_id" onChange={handleChange} value={values.order_id} className="modal__container-form-textfield-input" type="text" />
              </div>
              <div className="modal__container-form-textfield">
                <span className="modal__container-form-textfield-text">Technician</span>
                <input id="technician" onChange={handleChange} value={values.technician} className="modal__container-form-textfield-searchinput" placeholder="Search" type="text" />
              </div>
            </div>
            <div className="modal__container-form">
              <div className="modal__container-form-textfield">
                <span className="modal__container-form-textfield-text">Platform</span>
                <select id="platform" onChange={(e) => setFieldValue('platform', e.target.value)} value={values.platform} className="modal__container-form-textfield-select">
                  <option className="modal__container-form-textfield-option" value="Tetha">Tetha</option>
                  <option className="modal__container-form-textfield-option" value="Beta">Beta</option>
                </select>
              </div>
              <div className="modal__container-form-textfield">
                <span className="modal__container-form-textfield-text">Drone</span>
                <select id="drone" onChange={(e) => setFieldValue('drone', e.target.value)} value={values.drone}  className="modal__container-form-textfield-select">
                  <option className="modal__container-form-textfield-option" value="DJI-004Q">DJI-004Q</option>
                  <option className="modal__container-form-textfield-option" value="DJI-004A">DJI-004A</option>
                </select>
              </div>
            </div>
            <div className="modal__container-actions">
              <button className="modal__container-actions-cancel" onClick={()=> setOpen(false)}>Cancel</button>
              <button type="submit" className="modal__container-actions-submit" >Create New Delivery</button>
            </div>
          </form>
        )}
        </Formik>
      </div>
    </div>
  )
}