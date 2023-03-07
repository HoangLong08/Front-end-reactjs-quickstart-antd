import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useBackToTop from 'hooks/useBackToTop'

function HomePage() {
  const dispatch = useDispatch()
  useBackToTop()

  useEffect(() => {
    // dispatch(getListProductAction())
  }, [dispatch])

  return (
    <div>
      <Spin spinning={false}>
        <p>notthing</p>
      </Spin>
    </div>
  )
}

export default HomePage
