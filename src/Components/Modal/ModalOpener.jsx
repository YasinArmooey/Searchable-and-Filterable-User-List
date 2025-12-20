import { Button } from '../Ui'
import SearchModalPanel from './SearchModalPanel';
import { useState } from 'react';

const ModalOpener = () => {
  // Modal open state
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='w-full'>
      {/* Modal button opener */}
      <Button className={"uppercase font-bold w-full rounded-4xl py-3 "} onClick={() => setOpenModal(true)} >wake me up!</Button>
      {/* Modal open state lagic */}
      {openModal && <SearchModalPanel closeModal={setOpenModal} />}
    </div>
  )
}

export default ModalOpener