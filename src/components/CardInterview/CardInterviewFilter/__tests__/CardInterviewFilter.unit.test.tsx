import CardInterviewFilter from "@components/CardInterview/CardInterviewFilter/CardInterviewFilter";
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom';
import { act } from "react";

jest.mock('@tanstack/react-query', () => {
    const originalModule = jest.requireActual('@tanstack/react-query');
    return {
      __esModule: true,
      ...originalModule,
      useQueryClient: jest.fn(),
    };
  });

describe('СardInterviewFilters', () => {

    const setFilterMock = jest.fn();
    const invalidateQueriesMock = jest.fn();
  
    beforeEach(() => {
      jest.resetAllMocks();
      const useQueryClientMock = require('@tanstack/react-query').useQueryClient;
      useQueryClientMock.mockReturnValue({
        invalidateQueries: invalidateQueriesMock,
      });
    });

    it('кнопки поиска и сброса', async () => {
        let component;
        let cancelButton;
        let confirmButton;
        await act(async () => {
            component = render(<CardInterviewFilter filter={{}} setFilter={setFilterMock} />);
        });
        await waitFor(() => {
            expect(screen.getByText(/фильтрация/i))
        })
        expect(component).toMatchSnapshot()
        cancelButton = screen.getByRole('button', { name: /сбросить/i })

        fireEvent.click(cancelButton)
        expect(setFilterMock).toHaveBeenCalled()
        expect(setFilterMock).toHaveBeenCalledWith({})
        expect(invalidateQueriesMock).toHaveBeenCalled();

        confirmButton = screen.getByRole('button', { name: /поиск/i })

        fireEvent.click(confirmButton)
        expect(setFilterMock).toHaveBeenCalled()
        expect(setFilterMock).toHaveBeenCalledWith({})
    })
})