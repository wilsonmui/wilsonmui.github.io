import {
    Box, Button, Heading,
    Image,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {PDFDisplay} from "./PDFDisplay";

export const PortfolioCard = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <div className=' relative border-[1px] border-black h-[500px] w-[500px] mb-8 md:max-w-[100%]'>
          <Image className='h-3/5 w-full object-cover' src={props.image}></Image>
          <Text className='m-2' fontSize='lg'>{props.name}</Text>
          <Text className='ml-2'fontSize='sm'>{props.desc}</Text>
          <button
              onClick={onOpen}
              className="ml-2 mt-8 mb-4 absolute bottom-0 bg-transparent font-semibold hover:text-white py-2 px-4 border border-black rounded">
              View Project
          </button>

          <Modal isOpen={isOpen} onClose={onClose} size='full'>
              <ModalOverlay />
              <ModalContent className=''>
                  <ModalHeader>{props.name}</ModalHeader>
                  <ModalCloseButton />
                  <PDFDisplay url={props.url}/>
                  <div className='grid grid-cols-1 place-items-center'>

                      <PDFDisplay url={props.url}/>
                      <Text>example</Text>


                  </div>

                  <ModalBody>

                  </ModalBody>

                  <ModalFooter>
                  </ModalFooter>
              </ModalContent>
          </Modal>

      </div>
    );

}