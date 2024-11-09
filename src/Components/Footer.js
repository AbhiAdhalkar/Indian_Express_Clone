import React from 'react';
import NewsData from "../Alldata.json";
import "../Components/Footer.css";

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function Footer() {
  const chunkedData = chunkArray(NewsData.top_data, 4);  
  const chunkedData1 = chunkArray(NewsData.trending_data, 4);  
  const chunkedData2 = chunkArray(NewsData.latest_data, 4);
  const chunkedData3 = chunkArray(NewsData.express_data,2);

  return (
    <footer className="footer f1">
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="4">TOP CATEGORIES</th>
              </tr>
            </thead>
            <tbody>
              {
                chunkedData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {
                      row.map((item, colIndex) => (
                        <td key={colIndex}>
                          <a className="table_link" href={item.link}>
                            {item.text}
                          </a>
                        </td>
                      ))
                    }
                    {row.length < 4 && [...Array(4 - row.length)].map((_, i) => <td key={`empty-${i}`}></td>)}
                  </tr>
                ))
              }
            </tbody>
          </table>
          

          <table className="table">
            <thead>
              <tr>
                <th colSpan="4">TRENDING NEWS</th>
              </tr>
            </thead>
            <tbody>
              {
                chunkedData1.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {
                      row.map((item, colIndex) => (
                        <td key={colIndex}>
                          <a className="table_link" href={item.link}>
                            {item.text}
                          </a>
                        </td>
                      ))
                    }
                    {row.length < 4 && [...Array(4 - row.length)].map((_, i) => <td key={`empty-${i}`}></td>)}
                  </tr>
                ))
              }
            </tbody>
          </table>

          
          <table className="table">
            <thead>
              <tr>
                <th colSpan="4">LATEST STORIES</th>
              </tr>
              
            </thead>
            
            <tbody>
              {
                chunkedData2.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {
                      row.map((item, colIndex) => (
                        <td key={colIndex}>
                          <a className="table_link" href={item.link}>
                            {item.text}
                          </a>
                        </td>
                      ))
                    }
                    {row.length < 4 && [...Array(4 - row.length)].map((_, i) => <td key={`empty-${i}`}></td>)}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <hr/>
        <div className='row col-md-12 foot_bottom'>
        <div className='col-md-3 follow1'>
          {
            NewsData.follow && NewsData.follow.map((item) => (
              <>
                <div>
                  <h6 className='text'>{item.title1}</h6>
                </div>
                <div className='f2'>
                  <a href={item.facebook_link}>
                    <img className='m1' src={item.facebook} alt="Facebook"></img>
                  </a>
                  <a href={item.twitter_link}>
                    <img className='m1' src={item.twitter} alt="Twitter"></img>
                  </a>
                  <a href={item.linkedin_link}>
                    <img className='m1' src={item.linkedin} alt="LinkedIn"></img>
                  </a>
                  <a href={item.instagram_link}>
                    <img className='m1' src={item.instagram} alt="Instagram"></img>
                  </a>
                </div>
                <div>
                  <h6 className='text'>{item.title2}</h6>
                </div>
                <div className='f3'>
                  <a href={item.android_link}>
                    <img className='m2' src={item.android} alt="Facebook"></img>
                  </a>
                  <a href={item.apple_link}>
                    <img className='m2' src={item.apple} alt="Twitter"></img>
                  </a>
                </div> 

                <div className='newsguard'>
                  <hr/> 
                  <img loading='lazy' className='ng1' src={item.newsguard}/>
                  <ul>
                    <li>
                      {item.newsguard_text}
                    </li>
                  </ul>
                </div>
              </>
            ))
          }
        </div>
                  
          <div className='col-md-6 follow1'>
          <table>
            <thead>
              <tr>
                <strong>EXPRESS GROUP</strong>
              </tr>
            </thead>
             {
              NewsData.express1 && NewsData.express1.map((item)=>(
                <tbody className='ex_body'>
                  {
                chunkedData3.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {
                      row.map((item, colIndex) => (
                        <td key={colIndex}>
                          <a className="express_link" href={item.link}>
                            {item.text}
                          </a>
                        </td>
                      ))
                    }
                    {row.length < 2 && [...Array(4 - row.length)].map((_, i) => <td key={`empty-${i}`}></td>)}
                  </tr>
                ))
              }
              </tbody>
              ))
             }  
             </table>
          </div>                   
                            
          <div className='col-md-3 '>
              <strong>QUICK LINKS</strong>
              {
                NewsData.quick_data && NewsData.quick_data.map((item)=>(
                  <div key={item.id}>
                    <a className='quick' href={item.link}>{item.text}</a>  
                  </div>
                ))
              }
          </div>                   
        </div>
        <hr/>
        <div className='row'>
          {
            NewsData.copyright && NewsData.copyright.map((item)=>(
              <>
                <div className='col-md-8 copy1'>
                    <p className='last_text'>{item.text}</p>
                </div>
                <div className='col-md-4 copy2'>
                  <a href={item.link}><img className='last_img'  src={item.img}/></a>
                </div>
              </>
            ))
          }
           
        </div>
      </div>
    </footer>
  );
}

export default Footer;
