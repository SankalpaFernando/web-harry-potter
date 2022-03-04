import { Pagination } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setCurrentPage } from '../redux/util.reducer'

const DeckPagination: React.FC = () => {
  const dispatch = useDispatch();
  const {totalPages} = useSelector((state: RootState) => state.util.pages);
  return (
    <div style={{display:"flex",justifyContent:"center",margin:"6rem 0"}}>
      <Pagination onChange={(page)=>dispatch(setCurrentPage(page))} size="lg" radius="xl" total={totalPages} />
    </div>
  )
}

export default DeckPagination