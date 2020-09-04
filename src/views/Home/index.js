import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from './Layout'
import data from './data'
import PropTypes from 'prop-types'

export default function Home(props) {
  const dispatch = useDispatch()
  const example = useSelector((state) => {})

  useEffect(() => {
    // componentDidMount
    return () => {
      //component willUnmount
    }
  }, [])

  return <Layout {...props} data={data} />
}

Home.navigationOptions = {
  header: null,
}

Home.defaultProps = {}

Home.propTypes = {}
