import React from "react"
import { chakra, VStack } from "@chakra-ui/react"
import InputLabel from "@/components/InputLabel"
import { DatePicker as ChakraDatePicker } from "@orange_digital/chakra-datepicker"

const styles = {
  body: {
    bg: "gray.100",
    w: "100%",
    minH: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}

const Home = () => {
  return (
    <chakra.div {...styles.body}>
      <VStack alignItems='flex-start'>
        <InputLabel>chakra-datepicker</InputLabel>
        <ChakraDatePicker
          initialValue={new Date()}
          onDateChange={(d) => console.log("ChakraDatePicker::d", d)}
        />
      </VStack>
    </chakra.div>
  )
}

export default Home
