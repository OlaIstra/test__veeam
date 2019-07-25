import styled from 'styled-components'

export default styled.input`
    max-width: 300px
    height: 40px;
	padding-left: 10px;
	margin-bottom: 20px;
    
    &[type=checkbox] {
        min-width: 20px;
        height: 20px;
    }
    
    &[type=radio] {
        min-width: 20px;
        height: 20px;
        margin: 0 10px;
    }
    
`
