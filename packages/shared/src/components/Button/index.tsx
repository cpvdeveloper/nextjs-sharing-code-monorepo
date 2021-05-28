import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
`;

export default function SharedButton() {
  return (
    <StyledButton onClick={() => alert("Clicked the shared button")}>
      This button is shared
    </StyledButton>
  );
}
