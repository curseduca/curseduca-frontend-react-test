import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 80%;
  padding: 24px;
  margin: 0 auto;

  border-radius: 4px;
  box-shadow: 0 0 10px #262b48;
  
  background: ${({ theme }) => theme.lighter};
  
  *{ 
    margin-bottom: 6px;
    :last-child{ margin: 0; }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  box-shadow: 0 0 4px ${({ theme }) => theme.primaryBg} inset;
  border-radius: 2px;
  width: 80%;
  
  background: ${({ theme }) => theme.color};
  
  :before{ 
    content: ${({ icon }) => `"${icon}"`};
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    display: inline-block;
    padding: 0 6px;
    
    color: ${({ theme }) => theme.lighter};
  }
`;

export const Input = styled.input`
  padding: 6px;
  color: ${({ theme }) => theme.lighter};

  &[type="submit"]{
    cursor: pointer;
    color: white;

    :hover{ color: ${({ theme }) => theme.hover}; }
  }
`;
