import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  flex-direction: ${props=>props.t || 'row'};
  justify-content: ${props=>props.t || 'space-between'};
  width: ${props=>props.w};
  gap: ${props=>props.gap};
  margin-bottom: ${props=>props.mBottom};
  margin-top: ${props=>props.mTop};
`
export const CardContainer = styled(SContainer)`
  flex-wrap: wrap;
`

export const Container = ({w, gap, t, mBottom, mTop,justify, children}) => {
    return (
        <SContainer w={w} gap={gap} t={t} mBottom={mBottom} mTop={mTop} justify={justify}>
          {children}
        </SContainer>
    )
}
