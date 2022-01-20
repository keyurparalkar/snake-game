import {
    Flex, Kbd, Modal, ModalBody,
    ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import { useEffect } from "react";

const Instruction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>How to Play</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="row">
            <Flex flexDirection={"column"}>
              <span>
                <Kbd>w</Kbd> Move Up
              </span>
              <span>
                <Kbd>a</Kbd> Move Left
              </span>
              <span>
                <Kbd>s</Kbd> Move Down
              </span>
              <span>
                <Kbd>d</Kbd> Move Right
              </span>
            </Flex>
            <Flex flexDirection="column">
              <span>
                <Kbd>r</Kbd> Reset game
              </span>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default Instruction;
