import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios'

import CardMovie from '../../Components/CardMovies/CardMovie';
import Pagination from '../../Components/Pagination/Pagination';

const Home = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1)
  const [paginationno, setPaginationno] = useState(0)
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;


  
  const GetDataTrending = async ()=>{
      const {data} = await Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`)
      setContent(data.results);
      setPaginationno(data.total_pages);
  }

  useEffect(()=>{
      console.log('Trending Component did mount');
      GetDataTrending();
      //eslint-disable-next-line
  }, [])

  const handleClick = (number)=>{
      setPageno(number);
  }
  useEffect(()=>{
      console.log('Trending Component didupdate mount');
      GetDataTrending();
      //eslint-disable-next-line
  }, [pageno])
  return (
      <main className='homePage'>
          <Container>
              <Row>
                  <Col className='col-12'>
                      <section>
                          <h1 className='txtCenter'>Top Trending </h1>
                          <h3 className='txtCenter'>Tv and Movie For You</h3>
                      </section>
                  </Col>
                  {
                      content && content.length > 0 ? content.map((item, index)=>{
                          return (<CardMovie key={index} data={item} />)
                      }) : 'Loading ....'
                  }

              {
                  paginationno && paginationno > 1 ? <Pagination maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
              }
                  
              </Row>
          </Container>
      </main>
  )
}

export default Home
