import styled from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-direction: ${props=>props.type || 'row'};
  justify-content: space-between;
  width: ${props=>props.width};
  gap: ${props=>props.gap};
`

export const Container = ({width, gap, type, children}) => {
    return (
        <SContainer width={width} gap={gap} type={type}>{children}</SContainer>
    )
}