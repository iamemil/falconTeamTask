import React from "react";
import {useState} from "react";
import { Box, Center, Container, Button, Image, Text } from "@chakra-ui/react"
import SnapshotService from "../../service/snapshotService";
function AddSnapshot(props) {

    const [image, setImage] = useState(null)

    let snapshotService = new SnapshotService();

    const pasteFromClipboard = (e) => {
      if(e.clipboardData.files.length > 0){
        if(e.clipboardData.files[0].type.startsWith("image/")){
          setSnapshotImage(e.clipboardData.files[0]);
        }
      }
    }

    const sendSnapshot = (image) => {
      const data = new FormData();
      data.append('file', image);
      snapshotService.sendSnapshot(data);
    }
  
    const setSnapshotImage = (file) => {
      const fileReader = new FileReader();
  
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setImage(fileReader.result);
      }
  
    }
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Container my={4}>
            <Center>
            <Image borderRadius="10" htmlHeight="450px" fallbackSrc="https://via.placeholder.com/400" onPaste={pasteFromClipboard} src={image}/>
            </Center>
            <Text color="gray.500" fontSize="sm" mt={3}>Ctrl + V to paste your image</Text>
    <Button
            mt={4}
            size="lg"
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
            onClick={sendSnapshot}
          >
            Submit
          </Button>
    </Container>
        </Box>
)
}

export default AddSnapshot;