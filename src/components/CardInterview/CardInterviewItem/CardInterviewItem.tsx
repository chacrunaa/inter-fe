import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { InterviewAllItem } from '@network/models/interviews.model';

import { formatOffer, getFormattedDateText } from '../utils';

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
        createdAt,
        updatedAt,
        prefix,
    } = props;

    const offerDisplay = formatOffer(prefix, minoffer, maxoffer);
    const dateText = getFormattedDateText(createdAt, updatedAt);

    return (
        <Card className="h-100">
            <Card.Header>
                <Row className={style.headerCard}>
                    <Col xs={2} sm={2} md={2}>
                        <Card.Title>{companyName}</Card.Title>
                    </Col>
                    <Col xs={7} sm={6} md={7}>
                        <div>{dateText}</div>
                    </Col>
                    <Col xs={2} sm={3} md={2} className="text-end">
                        <div>{offerDisplay}</div>
                    </Col>
                    <Col xs={1} sm={1} md={1}>
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
                    <Col md={6}>
                        <Card.Title>{articleTitle}</Card.Title>
                        <Card.Text>{articleDescription}</Card.Text>
                    </Col>
                    <Col md={{ span: 10, offset: 2 }} className="d-flex justify-content-end">
                        <Button variant="primary">Подробнее</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CardInterviewItem;
