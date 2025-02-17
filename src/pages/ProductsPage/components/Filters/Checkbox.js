import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  &:hover {
    opacity: 0.5;
  }
`

const Icon = styled.svg`
  fill: none;
  stroke: #037bff;
  stroke-width: 2px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 3px;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
