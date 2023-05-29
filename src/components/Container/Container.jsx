import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  flex-direction: ${props=>props.t || 'row'};
  justify-content: ${props=>props.justify || 'space-between'};
  width: ${props=>props.w};
  height: ${props=>props.h};
  gap: ${props=>props.gap};
`
// export const CardContainer = styled(SContainer)`
//   flex-wrap: wrap;
// `
export const Container = ({w, h, t, gap, justify, children, ...rest}) => {
    return (
        <SContainer w={w} h={h} t={t} gap={gap} justify={justify} {...rest}>
          {children}
        </SContainer>
    )
}
