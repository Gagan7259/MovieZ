import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './details.css'
import Axios from 'axios'
import { img_not_available, img_300 } from '../../Config'
import { useParams } from 'react-router-dom'


const Details = () => {
  const params = useParams();
  console.log('params', params);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [creadits, setCredits] = useState();
  const id = params.moviesid || '';
  const _media_type = params.mediatype || '';
  const API_KEY = process.env.REACT_APP_SECRET_CODE
  const fetchData = async () => {
    try {
      const { data } = await Axios(`https://api.themoviedb.org/3/${_media_type}/${id}?api_key=${API_KEY}&language=en-US`)
      setContent(data)
    } catch (error) {
      console.error(error);
    }
  }
  const fetchVideo = async () => {
    try {
      const { data } = await Axios(`https://api.themoviedb.org/3/${_media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`)
      setVideo(data.results[0].key)
    } catch (error) {
      console.error(error);
    }
  }
  const creditsFetch = async () => {
    try {
      const { data } = await Axios.get(`https://api.themoviedb.org/3/${_media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`);
      setCredits(data.cast);
      // console.log('sdata',  data);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchVideo();
    fetchData();
    creditsFetch();
  })
  return (
    <div>

    </div>
  )
}

export default Details
