import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { InterviewAllItem } from '@network/models/interviews.model';

import { formatOffer, formattedDate } from '../utils';

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
    } = props;

    const offerDisplay = formatOffer(minoffer, maxoffer);
    const formattedDateCreate = formattedDate(createdAt);
    const formattedDateUpdate = formattedDate(updatedAt);

    return (
        <Card className="h-100">
            <Card.Header>
                <Row>
                    <Col xs={7}>
                        <Card.Title>{companyName}</Card.Title>
                    </Col>
                    <Col xs={2}>
                        <div>{formattedDateUpdate ?? formattedDateCreate}</div>
                    </Col>
                    <Col xs={2} className="text-end">
                        <div>{offerDisplay}</div>
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
