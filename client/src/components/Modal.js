import { Modal, Button } from "react-bootstrap";

export const ModalCentered = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Реєструся, бігом</h4>
        <p>
          Реєструйся Реєструйся Реєструйся Реєструйся Реєструйся Реєструйся
          Реєструйся Реєструйся Реєструйся Реєструйся Реєструйся Реєструйся
          Реєструйся Реєструйся.
        </p>
      </Modal.Body>
    </Modal>
  );
};
