import './main.css';
import web from './web.png';
import host from './host.png';
function Service(){
    return (
        <>
                  <div className="s">
            <div className="s1">
              <div className="s_head">
                <img src={host} width={'100px'} height={'100px'} alt="" />
                <h5>Hosting</h5>
              </div>
              <div className="s_body">
                <center>
                  <p>Web hosting provides everything you need to get your idea online. From where your website lives in the digital world, to where your files and data are securely stored – find and manage it all in one place.

 <br/><br/> Optimized for speed, security and reliability, we’re trusted by over 3 million website owners worldwide.</p>
                </center>
              </div>
            </div>

            <div className="s1 s2">
              <div className="s_head s2_h">
                <img src={web} width={'100px'} height={'100px'} alt="" />
                <h5>Web development</h5>
              </div>
              <div className="s_body s2_body">
                <center>
                  <p>Build a website in seconds with our website builder. No coding or design skills required. Perfect for complete beginners, all the way to web-building pros.
                  <br/><br/>Follow simple steps to get your site built and filled with bespoke, search-engine friendly content. Customize it with an easy drag-and-drop editor before sharing your new website with the world.</p>
                </center>
              </div>
            </div>

          </div>
        </>
    );
}


export default Service;