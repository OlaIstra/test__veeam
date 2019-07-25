import styled from 'styled-components'

export default styled.button`
    max-width: 200px;
    padding: 10px;
    margin-bottom: 20px;
    text-transform: uppercase;    
   
    &[disabled] {
        cursor: not-allowed;
        background-color: #cccccc !important;
    }
    &.primary {
        background-color: #0051ff5c;
    }

    &.secondary {
        background-color: #00800075;
    }

    &.danger {
        background-color: #ff00007d;
    }   
`

