import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Axios from 'axios'
import CardMovie from '../../Components/CardMovies/CardMovie';
const Home = () => {
  const [content, setContent] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const [paginationNo, setPaginationNo] = useState(0)
  const API_KEY = process.env.REACT_APP_SECRET_CODE
  const GetDataTrending = async () => {
    const { data } = await Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageNo}`);
    //set dataF
    setContent(data.results)
    setPaginationNo(data.toatal_pages)
    console.log('data', data);
  }
  useEffect(() => {
    GetDataTrending();
  }, [])
  return (
    <main className='homePage'>
      <Container>
        <Row>
          <Col className='col-12'>
            <section>
              <h1 className='txtCenter'>Top Trending</h1>
              <h3 className='txtCenter'>Tv and Movies for You</h3>
            </section>
          </Col>
          {
            content && content.length > 0 ? content.map((item) => {
              return (
                <CardMovie key={item.id} data={item}
                  mediatype="tv"
                />
              )
            }) : 'Loading content.....'
          }
        </Row>
      </Container>
    </main>
  )
}

export default Home
