import { Container, Row, Col, Card, Image } from "react-bootstrap"
import mineCraftImage from "../asset/trending/mineCraft.jpg"
import farCryImage from "../asset/trending/farCry6.jpg"
import lolImage from "../asset/trending/lol.jpg"
import olliwoorldImage from "../asset/trending/olliwoorld.jpg"
import valorantImage from "../asset/trending/valorant.jpg"
import wowImage from "../asset/trending/wow.jpg"

const Trend = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="trending">Trending Games</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={mineCraftImage} alt="Minecraft Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        keren lah
                                    </Card.Text>
                                </div>
                            </div>

                            </Image>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trend;