import {
  TableCaption,
  TableContainer,
  Tbody,
  Tfoot,
  Thead,
  Table as TableCore,
  Spinner,
} from '@chakra-ui/react'

type TableProps<ElementType> = {
  data: ElementType[]
  /** Need to return a <Tr> that take many <Td> from "@chakra-ui/react" */
  renderItem: Function
  /** Need to return a <Tr> that take many <Th> from "@chakra-ui/react" */
  headRender?: Function
  /** Need to return a <Tr> that take many <Th> from "@chakra-ui/react" */
  footerRender?: Function
  emptyRender?: Function
  errorRender?: Function
  loading?: boolean
  error?: boolean
  caption?: string
}

function Table<ElementType>(props: TableProps<ElementType>) {
  return (
    <TableContainer>
      <TableCore>
        {props.caption ? <TableCaption>{props.caption}</TableCaption> : null}
        {props.headRender ? <Thead>{props.headRender()}</Thead> : null}
        {props.loading ? (
          <Spinner />
        ) : props.error ? (
          props.errorRender ? (
            props.errorRender()
          ) : null
        ) : props.data?.length > 0 ? (
          <Tbody>
            {props.data.map((element: ElementType, key) =>
              props.renderItem(element, key)
            )}
          </Tbody>
        ) : props.emptyRender ? (
          props.emptyRender()
        ) : null}
        {props.footerRender ? <Tfoot>{props.footerRender()}</Tfoot> : null}
      </TableCore>
    </TableContainer>
  )
}

export default Table
