import React from 'react'
import { Link, graphql } from 'gatsby'
import Video from '../Assets/Video/homepage-video.mp4'
import globe from '../Assets/images/globe.gif'
import star from '../Assets/images/star.svg'
import Ai from '../Assets/images/artificial-intelligence.png'
import Telerad from '../Assets/images/x-ray.png'
import Nighthawk from '../Assets/images/phone-call.png'
import collab from '../Assets/images/team-work.png'
import footerFourth from '../Assets/images/footer-fourth.png'
import satellite from '../Assets/images/sat-img.png'
import radImage from '../Assets/images/rad-img.jpg'
import dashboard from '../Assets/images/dashboard.png'
import vision from '../Assets/images/vision-img.png'
import ecoTimes from '../Assets/images/eco-times.svg'
import techCrunch from '../Assets/images/tech-crunch.svg'
import facebook from '../Assets/images/social-platform-logos/facebook.svg'
import linkedin from '../Assets/images/social-platform-logos/linkedin.svg'
import twitter from '../Assets/images/social-platform-logos/twittter.svg'
import medium from '../Assets/images/social-platform-logos/medium.svg'
import footerVideo from '../Assets/Video/footer-video.webm'


const HomePage = ({ data }) => {
    const articles = data.allStrapiHome.edges[0].node.menuItems;
    const content = data.allStrapiUnseen.nodes[0];
    const thirdDivision = data.allStrapiProdigi.nodes[0];
    const about = data.allStrapiAbout.nodes[0];
    const statistics = data.allStrapiStat.nodes[0];
    const findings = data.allStrapiFinding.nodes[0];
    const dataset = data.allStrapiDataset.nodes[0];
    const service = data.allStrapiQuote.nodes[0];
    const newsSection = data.allStrapiCompanynew.nodes[0];
    const footer = data.allStrapiFooter.nodes[0];
    const footermenus = data.allStrapiFootermenu.nodes[0].footeroption;
    return (
        <div className='bg-black'>
            <div className='absolute w-full max-w-full flex flex-col items-center bg-transparent' style={{ zIndex: '2', color: 'rgba(255, 255, 255, 0)', top: '0' }}>
                <div className='w-full max-w-full pt-3 pb-3 ml-auto mr-auto' style={{ width: '79%' }}>
                    <nav className=' w-full max-w-full justify-around items-center flex relative float-right font-use'>
                        {articles.map(({ title }) => (
                            <Link to='#' className=' inline-block ml-6 mr-6 text-base align-top relative uppercase font-semibold' style={{ maxWidth: '1200px', color: '#fff', letterSpacing: '2px', padding: '6px 0', lineHeight: '26.6px', textAlign: 'left', backgroundColor: 'rgba(255, 255, 255, 0)' }}>{title}</Link>
                        ))}
                    </nav>
                </div>
            </div>
            <div className='flex flex-col relative items-center justify-start overflow-hidden h-screen' style={{ zIndex: '0', top: '0' }}>
                <video autoPlay loop muted className=' w-full h-full m-auto absolute object-cover bg-cover inline-block align-baseline ' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
                    <source src={Video} type="video/mp4" />
                </video>
            </div>
            <div>

            </div>
            <div className='relative flex flex-col justify-center w-full items-center overflow-hidden' style={{ padding: '240px 16px' }}>
                <div className='relative mr-auto ml-auto' style={{ maxWidth: '1200px' }}>
                    <div className='relative flex flex-col pl-4 pr-4 max-w-full z-10  second-content'>
                        <div>
                            <h2 className='text-slate-50 uppercase text-5xl mt-0 mb-0 font-normal' style={{ lineHeight: '60px' }}>{content.title}</h2>
                            <h1 className='text-slate-50 uppercase  max-w-full font-normal mt-0 mb-0 ' style={{ letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{content.subtitle}</h1>
                        </div>

                        <div className='max-w-full flex flex-col justify-center items-start secondDivContent'>
                            <div className='max-w-full mt-10 container-content'>
                                <p className='text-xl leading-8 mb-0 secondDivParaContent'>
                                    <div dangerouslySetInnerHTML={{ __html: content.content.data.content }}></div>
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-around items-center absolute' style={{ top: '0%', bottom: '0%', left: 'auto', right: '-34%' }}>
                            <div className='relative'>
                                <img src={globe} className=' h-auto inline-block align-middle  rotation-effect' style={{ width: '700px' }}></img>
                                <img src={star} className=' absolute max-w-full align-middle object-cover' style={{ width: '264px', height: '171px', display: 'none', top: '456px', bottom: '0', left: '247px' }}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about section(third division) */}
            <div className='bg-black mt-25 mb-20'>
                <div className='max-w-full flex justify-center ml-auto mr-auto'>
                    <div className='flex max-w-full w-full justify-center bg-auto third-div-img'>
                        <div className='flex flex-col align items-end'>
                            <h1 className='uppercase mt-0 mb-0 font-norma font-barlow text-slate-50 ' style={{ fontSize: '50px', lineHeight: '60px', letterSpacing: '3px' }}>{thirdDivision.title}</h1>
                        </div>
                        <div className='flex max-w-full flex-col items-start ml-6 justify-center' style={{ width: '482px' }}>
                            <div className='max-w-full' style={{ width: '882px' }}>
                                <p className='mb-0 mt-0 text-xl leading-8 font-barlow text-slate-50 third-div-content'><div dangerouslySetInnerHTML={{ __html: thirdDivision.content.data.content }}></div></p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about container(fourth division) */}
            <div className='bg-black relative mt-60 pl-0 pr-0 overflow-hidden'>
                <div className='relative flex flex-col items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <div className='max-w-full relative ml-0 pl-4 pr-4 '>
                        <h2 className='uppercase mt-0 mb-0 font-normal fourth-div-content text-slate-50' style={{ letterSpacing: '2px', fontFamily: '', fontSize: '50px', lineHeight: '60px' }}>{about.title}</h2>
                        <h1 className='max-w-full uppercase mt-0 mb-0 font-normal text-slate-50' style={{ width: '1074px', fontSize: '80px', lineHeight: '100px', letterSpacing: '2px' }}>
                            <span className='hyperspectral-text'>{about.rainbowtext}</span>
                            {about.subtitle}
                        </h1>
                        <div className='max-w-full mt-20' style={{ marginLeft: '100px' }}>
                            <p className='font-normal mb-0 mt-0 text-xl hyper-content text-slate-50' style={{ lineHeight: '32px', width: '72%' }}>
                                <div dangerouslySetInnerHTML={{ __html: about.content.data.content }}></div>
                            </p>
                            <div className=' mt-20' style={{ width: '900px' }} >
                                <div className='grid icons-grid'>
                                    <div className='flex flex-col items-start justify-between'>
                                        <div className='flex flex-col items-center'>
                                            <img src={Ai} style={{ width: '50%' }}></img>
                                            <div className=' mt-4'></div>
                                            <div className='uppercase text-lg logo-content-name'>
                                                {about.logo1title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start justify-between'>
                                        <div className='flex flex-col items-center'>
                                            <img src={Telerad} style={{ width: '50%' }}></img>
                                            <div className=' mt-4'></div>
                                            <div className='uppercase text-lg logo-content-name'>
                                                {about.logo2title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start justify-between'>
                                        <div className='flex flex-col items-center'>
                                            <img src={Nighthawk} style={{ width: '50%', marginTop: '8px' }}></img>
                                            <div className=' mt-4'></div>
                                            <div className='uppercase text-lg logo-content-name' style={{ marginTop: '8px' }}>
                                                {about.logo3title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start justify-between'>
                                        <div className='flex flex-col items-center'>
                                            <img src={collab} style={{ width: '50%' }}></img>
                                            <div className=' mt-4'></div>
                                            <div className='uppercase text-lg logo-content-name' style={{ marginTop: '-7px' }}>
                                                {about.logo4title}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={footerFourth} className=' inline-block max-w-full w-full object-cover'
                    style={{ height: '499px', marginTop: '-211px' }}></img>
            </div>
            <div className='pt-60 pl-4 pr-4 overflow-hidden'>
                <div className='flex flex-col overflow-hidden items-start ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
                    <div className='relative max-w-full' style={{ width: '1200px' }}>
                        <h2 className='text-slate-50 uppercase mt-0 mb-0 font-normal fifth-div-sec'>{statistics.title}</h2>
                        <h1 className='max-w-full text-slate-50 uppercase mt-0 mb-0 font-normal fifth-div-sec-title'>
                            <span className='hyperspectral-text'>{statistics.rainbowtext}&nbsp;</span>
                            {statistics.subtitle}
                        </h1>
                    </div>
                    <div className='relative flex flex-col items-start mt-20 max-w-full' style={{ zIndex: '1', width: '1000px', marginLeft: '100px' }}>
                        <div className='status-container justify-between grid max-w-full'>
                            <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{statistics.stats1title}</h5>
                                <p className='uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{statistics.stats1content}</p>
                            </div>
                            <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{statistics.stats2title}</h5>
                                <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{statistics.stats1content}</p>
                            </div>
                            <div className='separator-effect'></div>
                            <div className='separator-effect'></div>
                            <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{statistics.stats3title}</h5>
                                <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{statistics.stats1content}</p>
                            </div>
                            <div className='w-auto max-w-full flex flex-col' style={{ marginRight: '100px', height: '110px' }}>
                                <h5 className='w-full max-w-full text-slate-50 uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '3px', fontSize: '40px', lineHeight: '48px', letterSpacing: '3px' }}>{statistics.stats4title}</h5>
                                <p className='text-slate-50 uppercase mt-12px leading-7 font-use-one mb-0' style={{ color: 'rgba(255, 255, 255, .65)', marginTop: '12px', fontSize: '18px' }}>{statistics.stats1content}</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-full flex' style={{ width: '1000px', marginTop: '50px' }}></div>
                    <div className='relative flex w-full justify-center' style={{ marginTop: '60px', height: '459px' }}>
                        <img src={satellite} className='max-w-full inline-block align-middle' style={{ width: '459px', height: '459px' }}></img>
                    </div>
                </div>
            </div>
            {/* fifth section */}
            <div className='' style={{ padding: '240px 16px' }}>
                <div className='flex flex-col relative items-start justify-center ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
                    <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '2px', fontSize: '50px', lineHeight: '60px', color: '#fff' }}>{findings.title}</h2>
                    <div>
                        <h1 className='max-w-full uppercase mt-0 mb-0 font-semibold font-use' style={{ letterSpacing: '2px', fontSize: '80px', lineHeight: '100px', color: '#fff' }}> {findings.subtitle}</h1>
                    </div>
                    <div className='max-w-full mt-20 relative' style={{ width: '1000px', marginLeft: '100px' }}>
                        <div className='mb-10'>
                            <p className='text-center text-xl mb-0 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', lineHeight: '38px' }}>{findings.content.data.content}</p>
                        </div>
                        <div className='image'>
                            <img src={radImage} style={{ height: '553px', marginLeft: '76px' }}></img>
                        </div>
                    </div>
                </div>
            </div>
            {/* card hover section */}


            {/* card hover end section */}

            {/* sixth division */}
            <div className=' pl-4 pr-4' style={{ margin: '240px 0 0' }}>
                <div className=' ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
                    <div className='max-w-full flex flex-col relative justify-between'>
                        <div className='flex flex-col items-start'>
                            <h2 className='uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{dataset.title}</h2>
                            <h1 className=' max-w-full uppercase font-semibold mt-0 mb-0 font-use' style={{ color: '#fff', letterSpacing: '2px', lineHeight: '100px', fontSize: '80px' }}>{dataset.subtitle}</h1>
                        </div>
                        <div className='flex justify-between' style={{ marginTop: '50px', marginLeft: '100px' }}>
                            <div className='max-w-full flex flex-col items-start' style={{ width: '800px' }}>
                                <div className=' w-full max-w-full' style={{ marginBottom: '30px' }}>
                                    <p className=' text-xl mb-0 mt-0 leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>{dataset.content.data.content}</p>
                                </div>
                            </div>
                        </div>
                        <img src={dashboard} className='inline-block mt-20 max-w-full align-middle rounded-sm' style={{ width: '900px', marginLeft: '100px', border: '0' }}></img>
                    </div>
                </div>
            </div>
            {/* seventh division */}
            <div className='flex flex-col items-center justify-center m-0 pt-60 overflow-hidden'>
                <div className='flex flex-col relative' style={{ width: '900px' }}>
                    <div className='flex pl-0' style={{ borderLeft: '8px #00d4ff' }}>
                        <div className='side-line-effects'></div>
                        <div className='quote'>
                            <h1 className='max-w-full w-full uppercase mt-0 mb-0 text-left font-semibold not-italic  font-quote ' style={{ color: '#fff', letterSpacing: '2px', fontSize: '40px', lineHeight: '46.88px' }}>{service.quotes}</h1>
                            <div className='uppercase mt-4 not-italic leading-10 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', fontSize: '24px' }}>{service.author}</div>
                        </div>
                    </div>
                    <div className='max-w-full flex flex-col items-start' style={{ width: '670px', marginTop: '60px', marginLeft: '140px' }}>
                        <p className=' text-xl leading-8 mb-0 mt-0 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)' }}>
                            <div dangerouslySetInnerHTML={{ __html: service.content.data.content }}></div>
                        </p>
                    </div>
                </div>
                <div className='vision-img-container'>
                    <img src={vision} className='object-cover max-w-full inline-block align-middle mt-0 w-screen h-full' style={{ color: '#e4e3e3', zIndex: '-2', border: '0' }}></img>
                </div>
            </div>
            {/* eighth division */}
            <div className='news-recents'>
                <div className='flex flex-col relative items-start ml-auto mr-auto' style={{ zIndex: '1', maxWidth: '1200px' }}>
                    <div className='w-full flex items-end justify-between' style={{ maxWidth: '1078px' }}>
                        <div className=' box-border'>
                            <h2 className='uppercase mt-0 mb-0 font-semibold font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '50px', lineHeight: '60px' }}>{newsSection.title}</h2>
                            <h1 className='max-w-full uppercase mt-0 mb-0 font-semibold  font-use' style={{ color: '#fff', letterSpacing: '2px', fontSize: '80px', lineHeight: '100px' }}>{newsSection.subtitle}</h1>
                        </div>
                        <div className=' mb-5 more-from-news-button'></div>
                    </div>
                    <div className='flex max-w-full mt-20 justify-between' style={{ width: '1000px', marginLeft: '100px' }}>
                        <Link className='inline-block uppercase text-lg max-w-full' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px', border: '1px solid #000', textDecoration: 'none' }}>
                            <div className=' pt-5 pl-5 pr-5' style={{ width: '484px', height: '271px', backgroundColor: '#19191a' }}>
                                <div className='flex items-start justify-between mb-10'>
                                    <img src={ecoTimes} className='max-w-full inline-block align-middle' style={{ border: '0', height: '30px' }}></img>
                                    <div className='uppercase text-xs font-use-one' style={{ color: 'rgba(255, 255, 255, .8)', lineHeight: '15px' }}>{newsSection.newscontent[0].date}</div>
                                </div>
                                <p className='mt-0 mb-0 normal-case font-use-one' style={{ color: 'rgba(255, 255, 255, .95)', fontSize: '28px', lineHeight: '38px' }}>
                                    {newsSection.newscontent[0].content.data.content}
                                </p>
                            </div>
                        </Link>
                        <Link className='inline-block uppercase text-lg max-w-full' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px', border: '1px solid #000', textDecoration: 'none' }}>
                            <div className=' pt-5 pl-5 pr-5' style={{ width: '484px', height: '271px', backgroundColor: '#19191a' }}>
                                <div className='flex items-start justify-between mb-14'>
                                    <img src={techCrunch} className='max-w-full w-20 inline-block align-middle' style={{ border: '0', height: '40px', opacity: '.85' }}></img>
                                    <div className='uppercase text-xs font-use-one' style={{ color: 'rgba(255, 255, 255, .8)', lineHeight: '15px' }}>{newsSection.newscontent[1].date}</div>
                                </div>
                                <p className='mt-0 mb-0 normal-case font-use-one' style={{ color: 'rgba(255, 255, 255, .95)', fontSize: '28px', lineHeight: '38px' }}>
                                    <strong className=' font-normal'>{newsSection.newscontent[1].content.data.content}</strong>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

            {/* footer section */}
            <div className='footer section'>
                <div className='relative ml-auto mr-auto' style={{ maxWidth: '1200px' }}>
                    <div className='flex justify-between items-start pb-0 pl-4 pr-4 mb-8' style={{ marginTop: '101px', border: '1px #7c4c4c', borderBottomColor: 'rgba(255, 255, 255, .5)' }}>
                        <div className='flex flex-col items-start'>
                            <div className='uppercase font-semibold font-use' style={{ color: 'rgba(255, 255, 255, .85) ', lineHeight: '48px', fontSize: '40px' }}>{footer.title}</div>
                            <p className=' text-xl leading-8 font-use-one' style={{ color: 'rgba(255, 255, 255, .85)', width: '441px', marginTop: '30px', marginBottom: '30px' }}>{footer.content.data.content}</p>
                            {/* getintouchbutton */}
                            <div className='social-platform font-use'>
                                <Link to="https://www.facebook.com/5cnetwork" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={facebook} alt='facebook' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://www.linkedin.com/company/5c-network?trk=top_nav_home" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={linkedin} alt='Linkedin' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://twitter.com/5c_network" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={twitter} alt='Twitter' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                                <Link to="https://medium.com/pixxel-labs" className=' mt-6 mr-6 max-w-full inline-block uppercase text-lg' style={{ color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)', lineHeight: '26px' }}>
                                    <img src={medium} alt='Medium' className='mr-0 max-w-full inline-block align-middle'></img>
                                </Link>
                            </div>
                        </div>

                        <div className='flex'>

                            <div className='flex flex-col font-use' style={{ marginLeft: '60px' }}>
                                {footermenus.filter((data, id) => { if (id < 7) { return data } }).map(({ title }) => (
                                    <Link to="/about" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>{title}</Link>
                                ))}

                            </div>


                            <div className='flex flex-col font-use' style={{ marginLeft: '60px' }}>
                                {footermenus.filter((data, id) => { if (id > 7) { return data } }).map(({ title }) => (
                                    <Link to="/about" className='uppercase mb-4 text-sm leading-5 font-semibold' style={{ color: 'rgba(255, 255, 255, .85)', letterSpacing: '2px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>{title}</Link>
                                ))}

                            </div>

                        </div>

                    </div>
                </div>
                <div className='relative flex flex-row items-end mt-0 overflow-hidden' style={{ color: '#fff', height: '400px' }}>
                    <video autoPlay loop muted className=' w-full h-full absolute m-auto object-cover bg-cover inline-block align-baseline ' style={{ backgroundPosition: '50%', top: '-100%', bottom: '-100%', left: '-100%', right: '-100%' }}>
                        <source src={footerVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default HomePage

export const pageQuery = graphql`
query MyQuery {
    allStrapiHome {
      edges {
        node {
          menuItems {
            title
          }
        }
      }
    }
    allStrapiUnseen {
      nodes {
        title
        subtitle
        content {
          data {
            content
          }
        }
      }
    }
    allStrapiProdigi {
      nodes {
        title
        content {
          data {
            content
          }
        }
      }
    }
    allStrapiAbout {
      nodes {
        title
        rainbowtext
        subtitle
        logo1title
        logo2title
        logo3title
        logo4title
        content {
          data {
            content
          }
        }
      }
    }
    allStrapiStat {
      nodes {
        title
        rainbowtext
        subtitle
        stats1title
        stats1content
        stats2title
        stats2content
        stats3title
        stats3content
        stats4title
        stats4content
      }
    }
    allStrapiFinding {
      nodes {
        title
        subtitle
        content {
          data {
            content
          }
        }
      }
    }
    allStrapiDataset {
      nodes {
        title
        subtitle
        content {
          data {
            content
          }
        }
      }
    }
    allStrapiQuote {
      nodes {
        quotes
        author
        content {
          data {
            content
          }
        }
      }
    }
    allStrapiCompanynew {
      nodes {
        title
        subtitle
        newscontent {
          date
          content {
            data {
              content
            }
          }
        }
      }
    }
    allStrapiFooter {
      nodes {
        title
        content {
          data {
            content
          }
        }
      }
    }
    allStrapiFootermenu {
      nodes {
        footeroption {
          title
        }
      }
    }
  }
`
