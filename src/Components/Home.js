import React from 'react';
import "../Components/Home.css";
import NewsData from "../Alldata.json";
import { Carousel } from 'react-bootstrap';
import phone from "../Components/image/phone.png"

function Home() {
  
  const chunkedSlides = [];
  for (let i = 0; i < NewsData.mslider.length; i += 3) {
    chunkedSlides.push(NewsData.mslider.slice(i, i + 3));
  }
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 column1">
            <div className='row'>
              <div className="col-md-6 col1">
                {NewsData.Newsec1 && NewsData.Newsec1.map((item) => (
                  <div key={item.id} className="news-item">
                    <a className='n1' href={item.link}>
                      <h5 className='title-col1'>{item.title}</h5>
                      <img className='image-col1' src={item.img} alt={item.title} />
                      <p className='sec1-description'>{item.desc}</p>
                    </a>
                  </div>
                ))}
              </div>
              <div className="col-md-6 col2">
                {NewsData.Newsec2 && NewsData.Newsec2.map((item, index) => (
                  <div key={item.id}>
                    <h5>
                      <a className='col2-link' href={item.link}>
                        {item.title}
                      </a>
                      {index < NewsData.Newsec2.length - 1 && <hr className='lineOfList' />}
                    </h5>
                  </div>
                ))}
              </div>
              <div className='col-md-12 carousel1'>
                <div className='col-md-6 car1 '>
                  {
                    NewsData.slider1 && NewsData.slider1.map((item)=>(
                      <h4 className='slider_title'>{item.title}</h4>
                    ))
                  }
                </div>
                <div className='col-md-6 car2 ' >
                {
                    NewsData.slider1 && NewsData.slider1.map((item)=>(
                      <a href={item.link}><button className='slider_button'>{item.sbtn}</button></a>
                    ))
                  }            
                </div>
                <div className='col-md-12 car3'>
                <Carousel interval={null} indicators={true}>
                  {chunkedSlides.map((group, index) => (
                    <Carousel.Item key={index}>
                      <div className="row">
                      {group.map((slide) => (
                      <div key={slide.id} className="col-md-4">
                          <a href={slide.link} target="_blank" className='carausel_item' rel="noopener noreferrer">
                          <div className="carousel-card ">
                          <img
                            className="d-block w-100"
                            src={slide.img}
                            alt={`Slide ${slide.id}`}
                            style={{ height: '150px', objectFit: 'cover' }}
                          />
                              <h6 className='cap'>{slide.caption}</h6>
                            </div>
                          </a>
                          </div>
                        ))}
                      </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                                  
                </div>
              </div>
              <div className='gap'><br/></div>
              <div className='col-md-6 top_news'>
                  <div className='top_news_title'>
                    {NewsData.top_news_title && NewsData.top_news_title.map((item)=>(
                      <h5 className='top_title'>
                        {item.title}
                      </h5>
                    ))}
                  </div>
                  <div className='top_news_section'>
                    {
                      NewsData.top_news && NewsData.top_news.map((item)=>(
                        <div key={item.id}>
                          <div className='top_news_box'>
                            <div className='top_news_box1'>
                              <a className='top_text' href={item.link}>{item.caption}</a>
                            </div>
                            <div className='top_news_box2'>
                              <a href={item.link}><img src={item.img} /></a>
                            </div>
                          <hr/>
                        </div>
                      </div>
                      ))
                    }
                  </div>
              </div>
              <div className='col-md-6 latest_news'>
                  <div className='b1'>
                  <div className='latest_news_title'>
                    {
                      NewsData.latest_news_title && NewsData.latest_news_title.map((item)=>(
                        <div>
                          <h5 className='latest_title'>
                            {item.title}
                          </h5>
                          {
                            NewsData.latest_news && NewsData.latest_news.map((item,index)=>(
                              <div key={item.id} className='latest_news_box'>
                                <a className='latest_text' href={item.link}>{item.data}</a>
                                {index < NewsData.latest_news.length - 1 && <hr className='divider'/>}
                               
                              </div>
                            ))
                          }
                        </div>
                        
                      ))
                    }
                  </div>
                  </div>
                  {/* <div className='latest_news_section'>
                    {
                      NewsData.latest_news && NewsData.latest_news.map((item)=>(
                        <div key={item.id}>
                          <div className='latest_news_box'>
                            <a href={item.link}>{item.caption}</a>
                          </div>
                        </div>
                      ))
                    }
                  </div> */}
              </div>
            </div>
            
          </div>
          <div className="col-md-4 column2">
            {NewsData.Newsec3 && NewsData.Newsec3.map((item) => (
              <div className='paper-sec' key={item.id}>
                <h4 className='sec3-title'>{item.title}</h4>
                <hr className="L1" />
                <br />
                <div className='paper'>
                  <div>
                    <img className='paper-image' src={item.img} alt={item.title} />
                  </div>
                </div>
                <div>
                  <a href={item.link}>
                    <button className='read-btn'><span>{item.btn}</span></button>
                  </a>
                </div>
              </div>
            ))}
            <div className='opinion'>
              {NewsData.opinion && NewsData.opinion.map((item) => (
                <div key={item.id} className='opin'>
                  <h4 className='sec3-title'>{item.title}</h4>
                  <hr className="L1" />
                  <div className='images'>
                    <div className='box1'>
                      <a className='col3-desc' href={item.link1}>{item.desc}</a><br />
                      <a className='col3-name' href={item.link2}><b>{item.name}</b></a>
                    </div>
                    <div className='circle1'>
                      <a href={item.link1}><img src={item.img} alt="" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            
            <div className='Express-view'>
              <div className='title_col3-_express'>
                <h5>Express View</h5>
                <hr className='L1'/>
                <hr className='L1'/>
                <Carousel indicators={true} controls={false}>
                  {NewsData.Express && NewsData.Express.map((item) => (
                    <Carousel.Item key={item.id}>
                      <div className="row">
                        <div className="col-md-7 slide_data">
                        <div className="carousel-data">
                          <h6 className='slider_caption'>
                            <a href={item.link} className="carousel-link">{item.data}</a>
                          </h6>
                        </div>
                      </div>
                    <div className="col-md-5 slide_image">
                      <a href={item.link}><img
                        className="d-block w-100 slide_image"
                        src={item.img}
                      /></a>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
              </div>
            </div>

            <div className='mobile'>
              <img className='iphone' src={phone} alt='mobile'/>
              <span className='content'>
              {
                NewsData.mobile && NewsData.mobile.map((item,index)=>(
                  <div key={index} className='content-item'>
                    <div className='express_logo'>
                      <a href={item.logo_link}><img className='logo' src={item.logo}/></a>
                    </div>
                    <div className='main_sec'>
                      <a href={item.img_link}>
                        <img src={item.img} alt='news'/>
                      </a>
                      <div className='title_box'>
                        <a href={item.title_link} className='img_title'>{item.title}</a>
                      </div>
                      <div className='time'>
                        <a className='time_title'>{item.time_title}</a>: <a>{item.time_desc}</a>
                      </div>
                      <div className='mob_desc'>
                        <a className='phone_description' href={item.description_link}><p>{item.description}</p></a>
                      </div>
                    </div>
                    <div className='phone_btn'>
                      <a className='mob_btn' href='https://indianexpress.com/shorts/?ref=shorts_hp'>{item.btn}</a>
                    </div>
                  </div>
                ))
              }
              </span>
            </div>
            
            <div className='thoughts'>
              <div className='thought_box'>
                {
                  NewsData.box && NewsData.box.map((item)=>(
                    <>
                      <div className='box_title'>
                        <a className='text1' href={item.title_link}>{item.title}</a>
                      </div>
                      <div>
                        <a href={item.title_link}><img className='box_img' src={item.image}/></a>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
