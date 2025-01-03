import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  backgroud: #bf3c0a;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.a`
  font-size: 4rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: hsl(23, 88.4%, 56.1%);
  border: hsl(23, 88.4%, 56.1%) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 hsl(23, 88.4%, 56.1%),
    0 0 0.5em 0 hsl(23, 88.4%, 56.1%);

  position: relative;

  ::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: hsl(23, 88.4%, 56.1%);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em hsl(23, 88.4%, 56.1%);
    opacity: 0;
    background-color: hsl(23, 88.4%, 56.1%);
    z-index: -1;
    transition: opacity 100ms linear;
  }

  :hover,
  :focus {
    color: #000000;
    text-shadow: none;
  }

  :hover::before,
  :focus::before {
    opacity: 1;
  }
  :hover::after,
  :focus::after {
    opacity: 1;
  }
`;
