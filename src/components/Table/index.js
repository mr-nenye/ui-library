import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export const TableWrapper = styled.div`
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(52, 61, 79, .1);
    border: 1px solid #ddd;
    background-color: #fff;
`;

export const Table = styled.div`
    display: block;
    border-radius: 10px;
    font-size: 14px;
    font-family: 'Courier New', Courier, monospace;
    
    & table {
        border-collapse: collapse;
        width: 100% ;
        border: 1px solid #ddd;
        border-radius: 10px;

        ${(props) => props.naked && css `
            border: 0 ;
        `}
        

        & th {  
            border: 1px solid #ddd;
            text-align: left;
            padding: 20px 10px;
            font-weight: 600;

            ${(props) => props.strip && css `
                border: 0 ;
            `}
            ${(props) => props.naked && css `
                border: 0;
                border-bottom: 1px solid #ddd;
            `}
        }

        & td {  
            border: 1px solid #ddd;
            text-align: left;
            padding: 15px 10px;

            ${(props) => props.strip && css `
                border: 0;
            `}
            ${(props) => props.naked && css `
                border: 0;
            `}

        }

        & tr{
            &:last-child {
                border-bottom: none;
            }

            ${(props) => props.strip && css `
                &:nth-child(even) {
                    background-color: #fafafa;
                }
            `}
        }
    }
    
`

Table.defaultProps = {
};
  
Table.propTypes = {
    strip: PropTypes.bool,
    naked: PropTypes.bool,
};