import { Button } from 'react-bootstrap';
import CardInterview from '@components/CardInterview';
import CastomForm from '@components/castomForm';
import Container from '@components/Container';

const MainMenu = () => {
  const handleSubmit = (item: any) => {
    console.log(item);
  };

  const defaultValue = {
    test: [{ value: 'v1', label: 'l1' }],
    test1: 'хуй',
  };

  return (
    <Container>
      <div>
        <CastomForm defaultValues={defaultValue}>
          <CastomForm.Form onSubmitForm={handleSubmit}>
            <CastomForm.Items
              items={[
                {
                  id: 'test',
                  header: 'Слект бокс',
                  type: 'select',
                  options: [
                    { value: 'v1', label: 'l1' },
                    { value: 'v2', label: 'l2' },
                    { value: 'v3', label: 'l3' },
                  ],
                },
                {
                  id: 'test1',
                  header: 'Текстовое поле',
                  type: 'text',
                },
              ]}
            />
            <Button type="submit">Поиск</Button>
            <Button type="reset">Сбросить</Button>
          </CastomForm.Form>
        </CastomForm>
      </div>
      <div>
        <CardInterview />
      </div>
    </Container>
  );
};

export default MainMenu;
