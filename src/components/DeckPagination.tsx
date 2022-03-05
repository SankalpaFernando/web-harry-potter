import { Pagination } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { setCurrentPage } from '../redux/util.reducer'

const DeckPagination: React.FC = () => {
  const dispatch = useDispatch();
  const {totalPages,currentPage} = useSelector((state: RootState) => state.util.pages);
  return (
    <div style={{display:"flex",justifyContent:"center",margin:"6rem 0"}}>
      <Pagination boundaries={2} noWrap={true} page={currentPage} onChange={(page)=>dispatch(setCurrentPage(page))} size="md" radius="md" total={totalPages} />
    </div>
  )
}

export default DeckPagination