import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

export function InputSearch() {
  return (
    <>
      <InputGroup width="350px">
        <InputLeftElement children={<Search2Icon color="#a2884f" />} />
        <Input
          type="text"
          placeholder="Buscar por palavra chave"
          width={{ sm: "300px", md: "350px", lg: "400px", xl: "450px" }}
        />
      </InputGroup>
    </>
  );
}
