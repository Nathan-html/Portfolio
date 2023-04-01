import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { useRef } from 'react'

type DialogDeleteProps = {
  show: boolean
  header: string
  body: string
  cancelLabel: string
  cancelAction: Function
  deleteLabel: string
  deleteAction: Function
}

function DialogDelete(props: DialogDeleteProps) {
  const cancelRef = useRef()
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isOpen={props.show}
      leastDestructiveRef={cancelRef}
      onClose={() => props.cancelAction()}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {props.header}
          </AlertDialogHeader>
          <AlertDialogBody>{props.body}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => props.cancelAction()}>
              {props.cancelLabel}
            </Button>
            <Button
              colorScheme="red"
              onClick={() => props.deleteAction()}
              ml={3}
            >
              {props.deleteLabel}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default DialogDelete
