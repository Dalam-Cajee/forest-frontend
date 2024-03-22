import React, { useState } from "react"
import {
  Button,
  Carousel,
  CarouselCaption,
  CarouselItem,
  Col,
  Container,
  Nav,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap"
import umiam from "../../assets/Home/01.jpg"
import gorge from "../../assets/Home/02.jpg"
import park1 from "../../assets/Home/03.jpg"
import cherry from "../../assets/Home/06.jpg"
import lake from "../../assets/Home/07.jpg"
import park2 from "../../assets/Home/08.jpg"
import falls from "../../assets/Home/09.jpg"
import pdf from "../../assets/Home/Forest Inventory of Sacred Groves of Meghalaya Vol-II 2022.pdf"
import { useNavigate } from "react-router-dom"
import {
  useFetchNotificationByID,
  useFetchPDF,
} from "../../hooks/queries/NotificationQueries"
import { BsFilePdfFill } from "react-icons/bs"

const Home = () => {
  // States
  const [activeKey, setActiveKey] = useState("eService")
  const [ID, setID] = useState(1)

  // Functions
  const onSuccess = (response) => {
    const fileUrl = window.URL.createObjectURL(response.data)
    window.open(fileUrl, "_blank")
    return response
  }
  const onError = (error) => {
    return error
  }
  const isActive = (key) => {
    return key === activeKey ? "active" : ""
  }

  // Hooks
  const navigate = useNavigate()
  const fetchPdf = useFetchPDF(onSuccess, onError)
  const advtResult = useFetchNotificationByID(ID)
  const tenders = useFetchNotificationByID(1)

  // Handlers
  const handleSelect = (key) => {
    setActiveKey(key)
  }
  // Handlers
  const handleDownload = (id) => {
    fetchPdf.mutate(id)
  }

  return (
    <div className="mb-3 bg-light">
      {/* Carousel */}
      <Carousel fade>
        <CarouselItem>
          <img src={umiam} className="w-100" height={350} />
          <CarouselCaption>
            <h4>Umiam Lake</h4>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src={gorge} className="w-100" height={350} />
          <CarouselCaption>
            <h4>Balpakram Gorge</h4>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src={park1} className="w-100" height={350} />
          <CarouselCaption>
            <h4>Lady Hydari Park</h4>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src={cherry} className="w-100" height={350} />
          <CarouselCaption>
            <h4>Cherry Blossom</h4>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src={lake} className="w-100" height={350} />
          <CarouselCaption>
            <h4>Ward's Lake</h4>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src={park2} className="w-100" height={350} />
          <CarouselCaption>
            <h4>Nehru Park</h4>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src={falls} className="w-100" height={350} />
          <CarouselCaption>
            <h4>Nohsngithiang Falls</h4>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
      <Container fluid className="mb-3 mt-4">
        <Row className="mt-3 mb-5">
          <Col sm={8}>
            <h5 className="text-center fw-bold bg-white p-2">
              Welcome to Forests & Environment Department, Government of
              Meghalaya
            </h5>
            <div className="bg-white p-2 mb-4">
              <p className="mt-3">
                Welcome to the Meghalayan Age. We currently live in the
                Meghalayan Age. The past 4,200 years of earth's geological
                history have been officially classified as Meghalayan Age. A
                stalagmite from the Mawmluh Cave of Meghalaya has provided
                chemical signature as evidence for the beginning of Meghalayan
                age.
              </p>
              <p>
                Meghalaya, the Abode of clouds, located in the hills of Eastern
                Sub-Himalayas was carved out of Assam as autonomous State on 2nd
                April, 1970 and was declared as full-fledged State on 21st
                January, 1972. It is bounded on the Northern and Eastern sides
                by the State of Assam. On South and Western side, it shares a
                423 Kms long international boundary with Bangladesh.
              </p>
              <p>
                Meghalaya is endowed with enviable natural beauty and resources.
                Nature has blessed her with abundant rainfall, sun-shine, virgin
                dense forests, high plateaus, tumbling waterfalls and
                crystal-clear Rivers. Shillong the capital also known as the
                “Scotland of the East” set amidst a picturesque landscape of
                pine covered hills, rapid streams and captivating water falls
                provides a perfect getaway from the heat. The rolling mists in
                the valleys, the undulating hills, numerous lakes, waterfalls,
                caves, sacred forests, dense forests, breath-taking scenic
                beauty makes the State overwhelmingly beautiful and one of the
                most favoured tourist destinations in the country. The towns of
                Cherrapunjee (Sohra) and Mawsynram, which are located on the
                Southern parts of the states receive very heavy rainfall and are
                amongst the wettest spots in the World.
                <Button
                  variant="outline-success"
                  size="sm"
                  className="float-end mt-2"
                  onClick={() => navigate("/about-us")}
                >
                  Read More
                </Button>
              </p>
            </div>
            {/* Tabs - e-Service  Results  Announcement */}
            <TabContainer defaultActiveKey="eService" className="mb-4">
              <Nav justify className="custom-nav" onSelect={handleSelect}>
                <NavLink
                  eventKey="eService"
                  className={`nav-link ${isActive("eService")}`}
                >
                  e-Services
                </NavLink>
                <NavLink
                  eventKey="advertisements"
                  className={`nav-link ${isActive("advertisements")}`}
                  onClick={() => {
                    setID(3)
                  }}
                >
                  Advertisements & Results
                </NavLink>
                <NavLink
                  eventKey="announcements"
                  className={`nav-link ${isActive("announcements")}`}
                  onClick={() => {
                    setID(4)
                  }}
                >
                  Announcements
                </NavLink>
              </Nav>
              <TabContent>
                <TabPane
                  eventKey="eService"
                  title="e-Services"
                  className="bg-white p-2"
                >
                  <NavLink
                    href="https://investmeghalaya.gov.in/directApply.do?serviceId=13"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Application for Permission for felling of Isolated trees at
                    Homesteads,Farms etc
                  </NavLink>
                </TabPane>
                <TabPane
                  eventKey="advertisements"
                  title="Advertisements and Results"
                  className="bg-white p-2"
                >
                  {advtResult?.data?.data?.data?.map((data) => {
                    return (
                      <NavLink key={data.id} className="mb-2">
                        {data.title}
                        <BsFilePdfFill
                          className="ms-3"
                          onClick={() => handleDownload(data.id)}
                        />
                      </NavLink>
                    )
                  })}
                </TabPane>
                <TabPane
                  eventKey="announcements"
                  title="Announcements"
                  className="bg-white p-2"
                >
                  {advtResult?.data?.data?.data?.map((data) => {
                    return (
                      <NavLink key={data.id} className="mb-2">
                        {data.title}
                        <BsFilePdfFill
                          className="ms-3"
                          onClick={() => handleDownload(data.id)}
                        />
                      </NavLink>
                    )
                  })}
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
          <Col sm={4}>
            <div className="bg-white mb-4 p-2">
              <h5 className="bg-success text-white text-center">
                Online Services
              </h5>
              <NavLink
                href="https://investmeghalaya.gov.in/"
                rel="noopener noreferrer"
                className="bg-light mb-2"
              >
                Invest Meghalaya
              </NavLink>
              <NavLink
                href="https://megepayment.gov.in/"
                rel="noopener noreferrer"
                className="bg-light"
              >
                GRAS e-Payment for Services
              </NavLink>
            </div>
            <div className="bg-white mb-4 p-2">
              <h5 className="bg-success text-white text-center">
                NGT Judicial Committee
              </h5>
              <NavLink href="/ngt" className="bg-light mb-2">
                Details
              </NavLink>
            </div>
            <div className="bg-white mb-4 p-2">
              <h5 className="bg-success text-white text-center">Documents</h5>
              <NavLink
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                title="PDF the in a New Tab"
                className="bg-light mb-2"
              >
                Forest Inventory of Sacred Groves of Meghalaya Vol-II 2022
              </NavLink>
            </div>
            <div className="bg-white p-2">
              <h5 className="bg-success text-white text-center">
                Tenders & Notices
              </h5>
              {tenders?.data?.data?.data?.map((data) => {
                return (
                  <NavLink key={data.id} className="mb-2">
                    {data.title}
                    <BsFilePdfFill
                      className="ms-3"
                      onClick={() => handleDownload(data.id)}
                    />
                  </NavLink>
                )
              })}
              <Button
                variant="outline-success"
                size="sm"
                className="float-end mt-2"
                onClick={() => navigate("/notifications")}
              >
                Archive
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
