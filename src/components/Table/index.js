import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export const TableWrapper = styled.div`
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(52, 61, 79, .05);
    border: 1px solid #ddd;
    background-color: #fff;
`;

export const Table = styled.div`
    display: block;
    font-size: 0.75rem;
    
    & table {
        border-collapse: collapse;
        width: 100% ;
        /* border: 1px solid #ddd; */
        /* border-radius: 10px; */
        background-color: #fff;

        ${(props) => props.naked && css `
            border: 0 ;
            background-color: transparent;
        `}
        

        & thead {
            & tr{

                ${(props) => props.stripe && css `
                    &:nth-child(even) {
                        background-color: #f2f2ee;
                    }
                `}

                & th {  
                    border: 1px solid #ddd;
                    text-align: left;
                    padding: 20px 10px;
                    font-weight: 600;

                    ${(props) => props.stripe && css `
                        border: 0 ;
                    `}
                    ${(props) => props.naked && css `
                        border: 0;
                        border-bottom: 1px solid #ddd;
                    `}
                }
            }
            
        }

        & tbody {
            & tr{
                &:last-child {
                    border-bottom: none;
                }

                ${(props) => props.stripe && css `
                    &:nth-child(even) {
                        background-color: #f2f2ee;
                    }
                `}

                & td {  
                    border: 1px solid #ddd;
                    text-align: left;
                    padding: 15px 10px;

                    ${(props) => props.stripe && css `
                        border: 0;
                    `}
                    ${(props) => props.naked && css `
                        border: 0;
                    `}
                }
            }
        }

        
    }
    
`

Table.defaultProps = {
};
  
Table.propTypes = {
    strip: PropTypes.bool,
    naked: PropTypes.bool,
};