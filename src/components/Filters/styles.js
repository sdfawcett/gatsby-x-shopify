import styled from 'styled-components';

export const FiltersWrapper = styled.div`
    padding: 10px 1rem 10px 10px;
    border-right: 1px solid #ddd;
    color: #262626;

    .search-input-container {
        margin-bottom: 2rem;
    }

    @media(max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid #ddd;
      padding-bottom: 2rem;
    }
`;