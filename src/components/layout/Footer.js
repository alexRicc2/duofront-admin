import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2022
            {<HeartFilled />}
            <a href="#duofront" className="font-weight-bold" target="_blank">
              DuoFront
            </a>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
