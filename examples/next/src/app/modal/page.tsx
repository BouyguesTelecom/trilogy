import { Modal, ModalBody, ModalFooter, ModalSize } from '@trilogy-ds/react/lib/components/modal'
import { Text } from '@trilogy-ds/react/lib/components/text'

export default function ModalSSR() {
  return (
    <div>
      <main>
        <Modal title='Hello' size={ModalSize.SMALL} trigger={<button className='button'>Open modal</button>}>
          <ModalBody>
            <Text>Modal content</Text>
          </ModalBody>
          <ModalFooter>
            <button className='button is-primary' type='button'>
              Close modal
            </button>
          </ModalFooter>
        </Modal>
      </main>
    </div>
  )
}
