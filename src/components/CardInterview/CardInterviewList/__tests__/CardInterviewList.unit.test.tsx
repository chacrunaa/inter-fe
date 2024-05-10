
import CardInterviewList, { CardProps } from '@components/CardInterview/CardInterviewList/CardInterviewList';
  import { fakeInterviewItem } from '@components/CardInterview/testsMock.data';
  import '@testing-library/jest-dom';
  import { render, screen} from '@testing-library/react';
  
  describe('Тестирование CardInterviewList', () => {
    let mockPropsForList = {} as Partial<CardProps>;

    beforeEach(() => {
        mockPropsForList = { data: [fakeInterviewItem]} 
    })

    it('рендерит карточки интервью если есть данные', () => {
        render(<CardInterviewList {...mockPropsForList} />);
        expect(screen.getByText(fakeInterviewItem.companyName)).toBeInTheDocument()
    })

    it('cнэпшот с данными', () => {
        const list = render(<CardInterviewList {...mockPropsForList} />);
        expect(list).toMatchSnapshot()
    })
    it('не рендерит лист если нет данных для рендера', () => {
        render(<CardInterviewList data={[]} />);
        expect(screen.queryByText(fakeInterviewItem.companyName)).toBeNull()
    })
    it('снепшот без данных', () => {
        const list = render(<CardInterviewList data={[]} />);
        expect(list).toMatchSnapshot()
    })
  });
  