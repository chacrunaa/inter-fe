import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { InterviewAllItem } from '@network/models/interviews.model';

import style from '../cardInterview.module.scss';

const CardInterviewItem = (props: InterviewAllItem) => {
  const {
    minoffer,
    maxoffer,
    companyName,
    status,
    nickName,
    grade,
    stage,
    articleTitle,
    articleDescription,
  } = props;
  const offerRange = minoffer && `${minoffer?.toLocaleString()} - `;
  const maxOfferFormatted = maxoffer?.toLocaleString();

  return (
    <Card className="h-100">
      <Card.Header>
        <Row>
          <Col xs={9}>
            <Card.Title>{companyName}</Card.Title>
          </Col>
          <Col xs={2} className="text-end">
            <div>
              {offerRange}
              {maxOfferFormatted}
            </div>
          </Col>
          <Col xs={1}>
            <div className="badge bg-success">{status}</div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={4}>
            <Card.Subtitle className="mb-2 text-muted">{nickName}</Card.Subtitle>
            <Card.Text className="mb-0">{grade}</Card.Text>
            <Card.Text className="mb-2">{stage}</Card.Text>
          </Col>
          <Col md={8}>
            <Card.Title>{articleTitle}</Card.Title>
            <Card.Text>{articleDescription}</Card.Text>
            <Button variant="primary" className={style.moreDetailsButton}>
              Подробнее
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardInterviewItem;
